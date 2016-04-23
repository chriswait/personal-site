from django.shortcuts import render
from blog.models import Post
from work.models import Work

def index(request):
    posts = Post.objects.all().order_by('-date')[:3]
    works = Work.objects.filter(front_page=True)
    return render(request, 'index.html', {"posts": posts, "works": works})

def about(request):
    return render(request, 'about.html')
