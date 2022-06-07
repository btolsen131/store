from django.contrib import admin
from .models import StoreItems, Order, OrderItem, Address, Payment, Coupon
# Register your models here.

admin.site.register(StoreItems)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Address)
admin.site.register(Payment)
admin.site.register(Coupon)
