from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Post, DummyPost
from .serializers import PostSerializer

# Create your views here.

#投稿一覧API（GET一覧）
class PostListAPIView(ListAPIView):
    queryset = DummyPost.objects.all().order_by('-post_date')
    serializer_class = PostSerializer
    permission_classes = (AllowAny,)

    # permission_classes = [IsAuthenticated]

    # def get_queryset(self):
    #     return self.queryset.filter(user=self.request.user)

#投稿詳細API（GET詳細, PUT, DELETE）
class PostRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = DummyPost.objects.all()
    serializer_class = PostSerializer
    permission_classes = (AllowAny,)
    # permission_classes = [IsAuthenticated]
    lookup_field = "post_id"

    # def get_queryset(self):
    #     return self.queryset.filter(user=self.request.user)
    
#新規投稿API（POST）
class PostCreateAPIView(CreateAPIView):
    queryset = DummyPost.objects.all()
    serializer_class = PostSerializer
    permission_classes = (AllowAny,)
    # permission_classes = [IsAuthenticated]

    # def perform_create(self, serializer, **kwargs):
    #     serializer.save(user=self.request.user)
