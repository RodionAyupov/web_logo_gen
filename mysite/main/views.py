from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.http import HttpResponse
from .forms import *

# Create your views here.

def main_page(request):
    return render(request, 'main_page/main_page.html', locals())