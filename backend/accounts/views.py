from django.shortcuts import render
from rest_framework import generics, views
from .models import User
from .serializers import UserSerializer

# Create your views here.

class UserAPIView(views.APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer