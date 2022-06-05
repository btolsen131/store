from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import ItemListView, AddToCartView

urlpatterns = [
    
    path('items/', ItemListView.as_view(), name='items'),
    path('items/<int:pk>/', views.getItem, name='item'),
    path('add-to-cart/', AddToCartView.as_view(), name='add-to-cart'),

]

if settings.DEBUG:
    urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)