from django.contrib import admin
from .models import User, SimCard, Tariff, Subscription


admin.site.register(User)
admin.site.register(SimCard)
admin.site.register(Tariff)
admin.site.register(Subscription)