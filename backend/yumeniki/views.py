from django.shortcuts import render
from rest_framework import views
from .models import Post
from .serializers import PostSerializer

# Create your views here.

def index(request):
    return render(request, 'index.html')

class PostAPIView(views.APIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer