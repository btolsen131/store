from itsdangerous import Serializer
from rest_framework.serializers import ModelSerializer
from .models import StoreItems

class StoreItemsSerializer(ModelSerializer):
    class Meta:
        model = StoreItems
        fields = '__all__'