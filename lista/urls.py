from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ListaViewSet, ItemViewSet

router = DefaultRouter()
router.register(r'listas', ListaViewSet)
router.register(r'itens', ItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
