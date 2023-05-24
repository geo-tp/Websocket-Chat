import json
from chat.serializers import UserSerializer, MessageSerializer
from chat import opcodes
from chat.models import User, Message


class ChatBroadCaster:
    MEMBERS = []

    @classmethod
    def broadcast_members(cls):
        members = [UserSerializer(member["user"]).data for member in cls.MEMBERS]
        data = {"op_code": opcodes.C_RECEIVE_MEMBERS, "members": members}

        cls.broadcast(data)

    @classmethod
    def broadcast_new_message(cls, message, user):
        obj_message = Message.objects.create(content=message, user=user)
        serialized_message = MessageSerializer(obj_message).data

        data = {
            "op_code": opcodes.C_RECEIVE_MESSAGE,
            "message": serialized_message,
        }

        cls.broadcast(data)

    @classmethod
    def broadcast_new_member(cls, member):
        data = {
            "op_code": opcodes.C_RECEIVE_NEW_MEMBER,
            "member": member,
        }

        cls.broadcast(data)

    @classmethod
    def broadcast_disconnected_member(cls, member):
        data = {
            "op_code": opcodes.C_RECEIVE_DISCONNECTED_MEMBER,
            "member_id": member["id"],
        }

        self.broadcast(data)

    @classmethod
    def add_member(cls, member):
        serialized_member = UserSerializer(member["user"]).data

        cls.MEMBERS.append(member)
        cls.broadcast_new_member(serialized_member)

    @classmethod
    def remove_member(cls, member):
        serialized_member = UserSerializer(member).data

        for m in cls.MEMBERS:
            if m["user"].id == member.id:
                cls.MEMBERS.remove(m)
                cls.broadcast_disconnected_member(serialized_member)
                break

    @classmethod
    def send_members(cls, socket):
        members = [UserSerializer(member["user"]).data for member in cls.MEMBERS]
        socket.send(
            json.dumps({"op_code": opcodes.C_RECEIVE_MEMBERS, "members": members})
        )

    @classmethod
    def send_profile(cls, socket, user):
        serialized_profile = UserSerializer(user).data

        socket.send(
            json.dumps(
                {"op_code": opcodes.C_RECEIVE_PROFILE, "profile": serialized_profile}
            )
        )

    @classmethod
    def broadcast(cls, data):
        for m in cls.MEMBERS:
            m["socket"].send(json.dumps(data))
