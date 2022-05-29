from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoute, name='routes'),
    path('items/', views.getItems, name='items'),
    path('items/<int:pk>/', views.getItem, name='item'),
]