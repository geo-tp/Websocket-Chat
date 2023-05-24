from rest_framework import serializers
from chat.models import Message, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["user"] = UserSerializer(User.objects.get(id=rep["user"])).data

        return rep
