from rest_framework import serializers
from .models import Post, DummyPost

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = DummyPost
        fields = '__all__'