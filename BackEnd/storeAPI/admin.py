from django.contrib import admin
from .models import *

admin.site.register(StoreItems)
admin.site.register(Order)
admin.site.register(Review)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)

