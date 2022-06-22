from django.urls import path
from storeAPI.views import order_views as views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    
  path('add/', views.addOrderItems, name='add-order'),
    
]

