from django.shortcuts import render
from django.http import HttpResponse
from models import Post

def index(request):
    posts = Post.objects.all().order_by('-date')
    return render(request, 'blog/blog.html', {"posts": posts, "preview": True})

def post(request, post_id):
    post = Post.objects.get(pk=post_id)
    return render(request, 'blog/blog.html', {"posts": [post]})
