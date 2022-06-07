from django.db import models
from PIL import Image
from django.contrib.auth.models import User
from django.utils import timezone
from django.shortcuts import reverse


# Create your models here.

class StoreItems(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=20)
    brand = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(max_digits= 10, decimal_places=2)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(default='default.png', upload_to='./product_pics')
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    created = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=20)
    _id = models.AutoField(primary_key=True, editable=False)
    

