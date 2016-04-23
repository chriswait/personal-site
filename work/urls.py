from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<work_item_id>[0-9]+)/$', views.work_item, name='work_item'),
]
