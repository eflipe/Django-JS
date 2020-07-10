from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),

    # Usuarios
    path('accounts/', include('allauth.urls')),

    # Local apps
    path('api/', include('api_app.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/dj-rest-auth/', include('dj_rest_auth.urls')),
    path('api/v1/dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('accounts/', include('users.urls')),
    path('static/', include('static_pages.urls')),
    path('api-react/', TemplateView.as_view(template_name='index.html'), name="api_react"),
    path('', include('galeria_app.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
