from django.db import models
from accounts.models import User

# Create your models here.
    
class Post(models.Model):
    title = models.CharField(max_length=30, blank=True)
    content = models.TextField(blank=False)
    diagnosis = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title