from django.shortcuts import render
from django.http import HttpResponse
from models import Work

def index(request):
    works = Work.objects.all()
    return render(request, 'work/work.html', {"works": works})

def work_item(request, work_item_id):
    work = Work.objects.get(pk=work_item_id)
    return render(request, 'work/work.html', {"works": [work]})
