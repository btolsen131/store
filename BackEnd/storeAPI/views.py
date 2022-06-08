from django.shortcuts import render
from django.http import JsonResponse
from itsdangerous import Serializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import StoreItems
from .serializers import StoreItemsSerializer

@api_view(["GET"])
def getRoutes(resquest):
    return Response('hello', safe=False)

@api_view(["GET"])
def getItems(request):
    items = StoreItems.objects.all()
    serializer = StoreItemsSerializer(items, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getItem(request, pk):
    product = StoreItems.objects.get(_id=pk)
    serializer = StoreItemsSerializer(product, many=False)
    return Response(serializer.data)




