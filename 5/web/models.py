from django.db import models


class Supplier(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name="Наименование")
    contact_email = models.CharField(max_length=255, verbose_name="E-mail")
    phone_number = models.CharField(max_length=20, verbose_name="Телефон")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Поставщик"
        verbose_name_plural = "Поставщики"


class Product(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name="Наименование")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")
    supplier = models.ForeignKey(
        Supplier, on_delete=models.CASCADE, verbose_name="Поставщик"
    )

    def __str__(self):
        return f"{self.name} по {self.price}"

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"


class Order(models.Model):
    quantity = models.PositiveIntegerField(verbose_name="Количество")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name="Товар")
    order_date = models.DateTimeField(auto_now_add=True, verbose_name="Дата")

    def __str__(self):
        return f"Заказ от {self.order_date} на {self.product.name}"

    class Meta:
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"
