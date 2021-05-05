"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from . import views


# urlpatterns = [
#    url(r'^$', views.landing, name='landing'),
#     url(r'^wrong_qr/$', views.wrong_qr, name='wrong_qr'),
#     url(r'^get_data/$', views.home, name='home'),
#     url(r'^update/$', views.update, name='update'),
#     url(r'^get_link/$', views.setup, name='setup'),
#
#     url(r'^service/delete_status/$', views.delete_status, name='delete_status'),
#     url(r'^service/check_status/$', views.check_status, name='check_status'),
#     url(r'^service/set_status/$', views.set_status, name='set_status'),
#     url(r'^service/godmode/$', views.godmode, name='godmode'),
#
#
# ]
