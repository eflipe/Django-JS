from rest_framework import generics
from galeria_app.models import Autor, Pictures
from .serializers import GaleriaSerializer


# class GaleriaAPIView(generics.ListAPIView):
#         queryset = Pictures.objects.all()
#         serializer_class = GaleriaSerializer

class GaleriaAPIView(generics.ListAPIView):
        queryset = Autor.objects.all()
        serializer_class = GaleriaSerializer
