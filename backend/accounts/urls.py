from django.urls import path
from . import views

urlpatterns = [
    path("users/<uid>/", views.UserAPIView.as_view(), name='user-detail'),
]