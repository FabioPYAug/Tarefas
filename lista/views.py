from rest_framework import viewsets
from .models import Lista, Item
from .serializers import ListaSerializer, ItemSerializer

class ListaViewSet(viewsets.ModelViewSet):
    queryset = Lista.objects.all()
    serializer_class = ListaSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer