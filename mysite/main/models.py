from django.db import models

# Create your models here.
class Broadcast(models.Model):
    """
    Текст не более 40 символов
    """
    broadcast = models.CharField(max_length=40)