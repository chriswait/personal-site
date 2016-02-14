"""personalsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin

from . import views

from rest_framework import routers
project_router = routers.DefaultRouter()

from blog.serializers import PostSerializer
from blog.viewsets import PostViewSet
project_router.register(r'posts', PostViewSet)

from work.serializers import WorkSerializer
from work.viewsets import WorkViewSet
project_router.register(r'works', WorkViewSet)

urlpatterns = [
    url(r'^api/', include(project_router.urls)),
    url(r'^$', views.index, name='index'),
    url(r'^blog/', include('blog.urls')),
    url(r'^work/', include('work.urls')),
    url(r'^admin/', include(admin.site.urls)),
]