from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import GaleriaViewSet


router = SimpleRouter()
router.register('v1', GaleriaViewSet, basename='api_app')
urlpatterns = router.urls
