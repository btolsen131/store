from django.shortcuts import render
from itsdangerous import Serializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

from storeAPI.models import StoreItems
from .serializers import StoreItemsSerializer

@api_view(['GET'])
def getRoute(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)
    
@api_view(['GET'])
def getItems(request):
    items = StoreItems.objects.all()
    serializer = StoreItemsSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getItem(request, pk):
    item = StoreItems.objects.get(id=pk)
    serializer = StoreItemsSerializer(item, many=False)
    return Response(serializer.data)
