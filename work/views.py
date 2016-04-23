from django.shortcuts import render
from django.http import HttpResponse
from models import Work

def index(request):
    works = Work.objects.all()
    return render(request, 'work/work.html', {"works": works})
