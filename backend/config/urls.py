from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path("__debug__/", include("debug_toolbar.urls")),
    path('admin/', admin.site.urls),
    #drf-social-oauth2
    path("api/auth/", include("drf_social_oauth2.urls", namespace="drf")),
    #accounts
    path('api/', include('accounts.urls')),
    #yumeniki
    path('api/', include('yumeniki.urls')),
    #page
    path('', include('page.urls')),
]
