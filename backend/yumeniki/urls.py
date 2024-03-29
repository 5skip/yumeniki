from django.urls import path
from . import views

urlpatterns = [
    path("posts/", views.PostListAPIView.as_view(), name='post-list'),
    path("post-detail/<uid>/", views.PostRetrieveUpdateDestroyAPIView.as_view(), name='post-detail'),
    path("post-create/", views.PostCreateAPIView.as_view(), name='post-create'),
]