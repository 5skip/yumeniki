from django.urls import path
from . import views

urlpatterns = [
    path("api/users/", views.UserAPIView.as_view(), name='user-api'),
]