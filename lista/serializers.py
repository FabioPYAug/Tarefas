from rest_framework import serializers
from .models import Lista, Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'descricao', 'status']

class ListaSerializer(serializers.ModelSerializer):
    itens = ItemSerializer(many=True, read_only=True)  # Incluir itens da lista

    class Meta:
        model = Lista
        fields = ['id', 'nome', 'itens']