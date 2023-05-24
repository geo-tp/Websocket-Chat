import json

from channels.generic.websocket import WebsocketConsumer
from chat.broadcasters import ChatBroadCaster
from chat.models import User
from chat import opcodes


class ChatConsumer(WebsocketConsumer):
    def __init__(self):
        super().__init__()
        self.user = None
        self.broadcaster = ChatBroadCaster()

    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        self.broadcaster.remove_member(self.user)
        self.user.is_connected = False
        self.user.save()
        self.close()

    def receive(self, text_data):
        data_json = json.loads(text_data)
        op_code = data_json["op_code"]

        if op_code == opcodes.S_RECEIVE_PSEUDO:
            pseudo = data_json["pseudo"]
            self._set_user(pseudo)
            self.broadcaster.send_members(self)
            self.broadcaster.add_member({"socket": self, "user": self.user})
            self.broadcaster.send_profile(self, self.user)

        else:
            message = data_json["content"]
            self.broadcaster.broadcast_new_message(message, self.user)

    def _set_user(self, pseudo):
        user, created = User.objects.get_or_create(name=pseudo)
        user.is_connected = True
        user.save()
        self.user = user
