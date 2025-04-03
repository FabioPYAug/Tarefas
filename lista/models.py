from django.db import models

class Lista(models.Model):
    nome = models.CharField(max_length=255)

    def __str__(self):
        return self.nome

class Item(models.Model):
    STATUS_CHOICES = [
        ('pendente', 'Pendente'),
        ('concluido', 'Concluído'),
    ]
    
    descricao = models.CharField(max_length=255)
    lista = models.ForeignKey(Lista, related_name='itens', on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pendente')

    def __str__(self):
        return self.descricao