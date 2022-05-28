from django.shortcuts import render
from django.http import JsonResponse

def getRoute(request):

    return JsonResponse('Our Api', safe=False)