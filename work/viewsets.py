from .models import Work
from .serializers import WorkSerializer
from rest_framework import viewsets
from rest_framework.response import Response

class WorkViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer

    def retrieve(self, request, pk=None):
            work = Work.objects.get(pk=pk)
            serializer = WorkSerializer(work)
            return Response(serializer.data)
