from django.utils import timezone
from django.db import models
from accounts.models import User

# Create your models here.
    
class Post(models.Model):
    uid = models.AutoField(primary_key=True, editable=False)
    content = models.TextField(blank=False)
    diagnosis = models.TextField(blank=True)
    post_date = models.DateField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.content
