from django.urls import path
from storeAPI.views import order_views as views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [

  path('add/', views.addOrderItems, name='add-order'),
  path('myorders/', views.getMyOrders, name='my-orders'),
  path('<str:pk>/', views.getOrderById, name='user-order'),
  path('<str:pk>/pay/', views.updateOrderToPaid, name='order-paid'),

]

