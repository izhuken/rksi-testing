from django.contrib import admin

from .models import Order, Product, Supplier

admin.site.register(Supplier)
admin.site.register(Product)
admin.site.register(Order)
