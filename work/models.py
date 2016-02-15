from __future__ import unicode_literals

from django.db import models

class Work(models.Model):
    title = models.CharField(null=True, max_length=50)
    description = models.TextField(null=True)
    url = models.URLField(null=True, blank=True)
    github_url = models.URLField(null=True, blank=True)
    date_from = models.DateField(null=True, blank=True)
    date_to = models.DateField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    front_page = models.NullBooleanField(null=True, blank=True)

    def __unicode__(self):
        return u'%s' % (self.title)
