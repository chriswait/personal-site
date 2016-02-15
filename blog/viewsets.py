from .models import Post
from .serializers import PostSerializer
from rest_framework import viewsets
from rest_framework.response import Response

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def retrieve(self, request, pk=None):
            post = Post.objects.get(pk=pk)
            serializer = PostSerializer(post)
            return Response(serializer.data)

class RecentPostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-date')[:3]
    serializer_class = PostSerializer
