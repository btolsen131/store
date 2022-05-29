from django.db import models
from PIL import Image

# Create your models here.
class StoreItems(models.Model):
    name = models.CharField(max_length=20)
    price = models.DecimalField(max_digits= 10, decimal_places=2)
    color = models.CharField(max_length=20, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(default='default.png', upload_to='./product_pics')
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 300 or img.width > 300:
            output_size = (300,300)
            img.thumbnail(output_size)
            img.save(self.image.path)
    


