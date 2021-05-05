from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.http import HttpResponse
from .forms import *

# Create your views here.

def main_page(request):
    Broadcast_form = BroadcastForm(request.POST or None, auto_id=False)
    return render(request, 'main_page/main_page.html', locals())

# def godmode(request):
#     Broadcast_form = BroadcastForm(request.POST or None, auto_id=False)
#
#     # broadcast_data = Broadcast.objects.last()
#     broadcast_data = getattr(Broadcast.objects.last(), 'broadcast')
#
#     last_status = Status.objects.last()
#     last_status = getattr(last_status, 'status')
#     if int(last_status) == 1:
#         result = "online"
#     else:
#         result = "offline"
#     my_total = Broadcast.objects.count()
#     # print(getattr(Broadcast.objects.all()[my_total-1], 'broadcast'))
#     # print(getattr(Broadcast.objects.all()[my_total-1], 'broadcast'))
#     result1 = "1) " + getattr(Broadcast.objects.all()[my_total - 2], 'broadcast')
#     result2 = "2) " + getattr(Broadcast.objects.all()[my_total - 3], 'broadcast')
#     result3 = "3) " + getattr(Broadcast.objects.all()[my_total - 4], 'broadcast')
#     result4 = "4) " + getattr(Broadcast.objects.all()[my_total - 5], 'broadcast')
#     result5 = "5) " + getattr(Broadcast.objects.all()[my_total - 6], 'broadcast')
#
#     return render(request, 'landing/landing_god.html', locals())