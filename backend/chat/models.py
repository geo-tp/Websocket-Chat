from django.db import models
from datetime import datetime


class User(models.Model):
    name = models.CharField(unique=True, max_length=64)
    subtitle = models.CharField(max_length=128, blank=True, null=True)
    thumbnail = models.URLField(blank=True, null=True)
    is_connected = models.BooleanField(default=False, blank=True)


class Message(models.Model):
    content = models.CharField(max_length=2048)
    date = models.DateTimeField(default=datetime.now().strftime(("%Y-%m-%d %H:%M:%S")))
    user = models.ForeignKey(User, on_delete=models.CASCADE)
