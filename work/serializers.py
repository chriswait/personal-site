from .models import Work
from rest_framework import serializers

class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = ('title', 'description', 'url', 'date_from', 'date_to', 'image')
