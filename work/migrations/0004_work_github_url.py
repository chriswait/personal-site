# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-02-15 06:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('work', '0003_work_front_page'),
    ]

    operations = [
        migrations.AddField(
            model_name='work',
            name='github_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
