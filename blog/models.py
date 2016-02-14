from __future__ import unicode_literals

from django.db import models

class Post(models.Model):
    title = models.CharField(null=True, max_length=50)
    text = models.TextField(null=True)
    preview = models.TextField(null=True)
    url = models.URLField(null=True, blank=True)
    date = models.DateField(null=True, blank=True)

    def __unicode__(self):
        return u'%s' % (self.title)
