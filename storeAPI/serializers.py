from itsdangerous import Serializer
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import StoreItems

class StoreItemsSerializer(ModelSerializer):
    category = serializers.SerializerMethodField()

    class Meta:
        model = StoreItems
        fields = '__all__'

    def get_category(self, obj):
        return obj.get_category_display()