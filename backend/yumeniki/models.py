from django.db import models
from accounts.models import User

# Create your models here.
    
class Post(models.Model):
    post_id = models.AutoField(primary_key=True)
    content = models.TextField(blank=False)
    diagnosis = models.TextField(blank=True)
    post_date = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.content
    
class DummyPost(models.Model):
    post_id = models.AutoField(primary_key=True)
    content = models.TextField(blank=False)
    diagnosis = models.TextField(blank=True)
    post_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.content