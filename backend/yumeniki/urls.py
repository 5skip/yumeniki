from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("api/posts/", views.PostAPIView.as_view(), name='post_api'),
]