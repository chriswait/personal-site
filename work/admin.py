from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin

from .models import Work

class WorkAdmin(SummernoteModelAdmin):
    pass

admin.site.register(Work, WorkAdmin)
