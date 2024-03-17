from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("api/posts/", views.PostListCreateAPIView.as_view(), name='post-api'),
]