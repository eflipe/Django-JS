from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),

    # Usuarios
    path('accounts/', include('allauth.urls')),

    # Local apps
    path('accounts/', include('users.urls')),
    path('', include('static_pages.urls')),
]
