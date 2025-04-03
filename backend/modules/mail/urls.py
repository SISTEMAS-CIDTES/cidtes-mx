from django.urls import path
from . import views

urlpatterns = [
    path(
        '',
        views.index,
        name='index'
    ),
    path(
        'send-mail/',
        views.my_courier,
        name='my_courier'
    )
]