from django.contrib import admin
from .models import Post, DummyPost

# Register your models here.

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('post_id', 'content', 'user', 'post_date')
    list_filter = ('user', 'post_date')

@admin.register(DummyPost)
class DummyPostAdmin(admin.ModelAdmin):
    list_display = ('post_id', 'content', 'post_date')
    list_filter = ('post_date', 'content')