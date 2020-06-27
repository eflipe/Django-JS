from rest_framework import generics
from rest_framework import viewsets

from galeria_app.models import Autor, Pictures
from .serializers import GaleriaSerializer


class GaleriaViewSet(viewsets.ModelViewSet):
        queryset = Pictures.objects.all()
        serializer_class = GaleriaSerializer


# class GaleriaAPIView(generics.ListCreateAPIView):
#         queryset = Pictures.objects.all()
#         serializer_class = GaleriaSerializer
#
#
# class GaleriaAPIDetail(generics.RetrieveUpdateDestroyAPIView):
#         queryset = Pictures.objects.all()
#         serializer_class = GaleriaSerializer

# class GaleriaAPIView(generics.ListAPIView):
#         queryset = Autor.objects.all()
#         serializer_class = GaleriaSerializer
