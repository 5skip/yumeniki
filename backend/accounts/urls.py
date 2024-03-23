from django.urls import path
from . import views

urlpatterns = [
    path("users/<user_id>/", views.UserAPIView.as_view(), name='user-detail'),
]