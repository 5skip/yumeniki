from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Post
from .serializers import PostSerializer

# Create your views here.

#投稿一覧API（GET一覧）
class PostListAPIView(ListAPIView):
    queryset = Post.objects.all().order_by('-uid')
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]
    # permission_classes = (AllowAny,)

#投稿詳細API（GET詳細, PUT, DELETE）
class PostRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]
    # permission_classes = (AllowAny,)
    lookup_field = "uid"

    # def get_queryset(self):
    #     return self.queryset.filter(user=self.request.user)
    
#新規投稿API（POST）
class PostCreateAPIView(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]
    # permission_classes = (AllowAny,)

    # def perform_create(self, serializer, **kwargs):
    #     serializer.save(user=self.request.user)
