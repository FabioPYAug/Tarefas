from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def api_root(request):
    return JsonResponse({
        "endpoints": {
            "listas": "/api/listas/", 
            "itens": "/api/itens/",  
        }
    })

urlpatterns = [
    path('admin/', admin.site.urls),  
    path('api/', include('lista.urls')),
    path('', api_root),
]