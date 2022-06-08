from itsdangerous import Serializer
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import StoreItems
from django.contrib.auth.models import User

class StoreItemsSerializer(ModelSerializer):

    class Meta:
        model = StoreItems
        fields = '__all__'
