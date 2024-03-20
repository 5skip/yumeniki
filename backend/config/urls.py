from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path("__debug__/", include("debug_toolbar.urls")),
    path('admin/', admin.site.urls),
    #djoser
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    #accounts
    path('api/', include('accounts.urls')),
    #yumeniki
    path('api/', include('yumeniki.urls')),
    #page
    path('', include('page.urls')),
]
