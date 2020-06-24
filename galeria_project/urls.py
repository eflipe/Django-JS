from django.conf import settings
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),

    # Usuarios
    path('accounts/', include('allauth.urls')),

    # Local apps
    path('api/', include('api_app.urls')),
    path('accounts/', include('users.urls')),
    path('static/', include('static_pages.urls')),
    path('', include('galeria_app.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
