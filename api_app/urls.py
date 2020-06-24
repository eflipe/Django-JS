from django.urls import path
from .views import GaleriaAPIView


urlpatterns = [
    path('', GaleriaAPIView.as_view()),
]
