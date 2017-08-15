from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^products', views.buttonresponse, name='buttonresponse'),
    url(r'^$', views.index, name='index')
]