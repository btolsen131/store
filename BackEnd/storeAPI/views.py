from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["GET"])
def getRoutes(resquest):
    return Response('hello', safe=False)

@api_view(["GET"])
def getItems(request):
    return Response(products)

@api_view(["GET"])
def getItem(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break

    return Response(product)




