from django.urls import path
from storeAPI.views import user_views as views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    
    path('', views.getUsers, name='users'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register', views.registerUser, name='register'),
    path('profile', views.getUserProfile, name='user-profile'),
   
    
]

