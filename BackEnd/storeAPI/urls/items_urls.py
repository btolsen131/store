from django.urls import path
from storeAPI.views.product_views import getItem, getItems
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    
    
    path('', getItems, name='items'),
    path('<int:pk>/', getItem, name='item'),
    
]

