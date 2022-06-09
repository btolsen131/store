from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    
    path('users/', views.getUsers, name='users'),
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register', views.registerUser, name='register'),
    path('users/profile', views.getUserProfile, name='user-profile'),
    path('items/', views.getItems, name='items'),
    path('items/<int:pk>/', views.getItem, name='item'),
    
]

if settings.DEBUG:
    urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)