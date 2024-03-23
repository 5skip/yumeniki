from django.urls import path
from . import views

urlpatterns = [
    path("users/<usr_id>/", views.UserAPIView.as_view(), name='user-detail'),
]