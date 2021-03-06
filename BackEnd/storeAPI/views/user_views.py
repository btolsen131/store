from itsdangerous import Serializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from storeAPI.serializers import UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status
import json

#api function to register user in database
@api_view(["POST"])
def registerUser(request):
    data = request.data
    
    #try creating user in database or return error
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        
        
        return Response(serializer.data)
    except:
        message = {'detail':'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


#api function to update user info
@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)
    
    data = request.data

    user.first_name = data['name']
    user.email = data['email']
    user.username = data['email']

    #checking if user inputted a new password
    if data['password'] != '':
        user.password=make_password(data['password'])
    
    user.save()
    
    return Response(serializer.data)
      
#api function to retrieve user info, checks if user is logged in
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

#api func to return all users info
@api_view(["GET"])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

#login funcs using jwt token
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
   def validate(self, attrs):
       data = super().validate(attrs)
       
       serializer = UserSerializerWithToken(self.user).data

       for k,v in serializer.items():
           data[k] = v

       return data 

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
