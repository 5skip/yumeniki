from django.contrib import admin
from .models import Post

# Register your models here.

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('post_id', 'content', 'user', 'post_date')
    list_filter = ('user', 'post_date')