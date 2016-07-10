from __future__ import unicode_literals

from django.db import models

class Post(models.Model):
    title = models.CharField(null=True, max_length=50)
    text = models.TextField(null=True)
    preview = models.TextField(null=True)
    date = models.DateField(null=True, blank=True)
    is_published = models.BooleanField(default=False)

    def __unicode__(self):
        return u'%s' % (self.title)
