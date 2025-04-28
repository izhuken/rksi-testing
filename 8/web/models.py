from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=50, verbose_name="Имя")
    last_name = models.CharField(max_length=50, verbose_name="Фамилия")
    email = models.EmailField(unique=True, verbose_name="Электронная почта")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'


class SimCard(models.Model):
    number = models.CharField(max_length=20, unique=True, verbose_name="Номер SIM-карты")
    activation_date = models.DateTimeField(auto_now_add=True, verbose_name="Дата активации")
    is_active = models.BooleanField(default=True, verbose_name="Активная")

    def __str__(self):
        return self.number
    
    class Meta:
        verbose_name = 'SIM карта'
        verbose_name_plural = 'SIM карты'


class Tariff(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название тарифа")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")
    data_limit = models.PositiveIntegerField(help_text="Лимит данных в МБ", verbose_name="Лимит данных (МБ)")
    call_limit = models.PositiveIntegerField(help_text="Лимит звонков в минутах", verbose_name="Лимит звонков (мин)")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")

    def __str__(self):
        return f"{self.name} за {self.price} руб." 
    
    class Meta:
        verbose_name = 'Тариф'
        verbose_name_plural = 'Тарифы'


class Subscription(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='subscriptions', verbose_name="Пользователь")
    sim_card = models.ForeignKey(SimCard, on_delete=models.CASCADE, related_name='subscriptions', verbose_name="SIM-карта")
    tariff = models.ForeignKey(Tariff, on_delete=models.CASCADE, related_name='subscriptions', verbose_name="Тариф")
    start_date = models.DateTimeField(auto_now_add=True, verbose_name="Дата начала")
    end_date = models.DateTimeField(verbose_name="Дата окончания")

    def __str__(self):
        return f"{self.user} - {self.tariff} ({self.start_date} до {self.end_date})"

    class Meta:
        verbose_name = 'Подписка'
        verbose_name_plural = 'Подписки'
