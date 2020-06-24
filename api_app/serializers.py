from rest_framework import serializers
from galeria_app.models import Autor, Pictures


# class GaleriaSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Pictures
#         fields = ('autor', 'title', 'url_pic', 'year')

class GaleriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Autor
        fields = ('author', 'description', 'url_web')
