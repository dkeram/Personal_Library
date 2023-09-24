from django.db import models

# Create your models here.
class Books(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    genre = models.CharField(max_length=255)
    synopsis = models.TextField()
    
    
    def __str__(self):
        return self.title
    
    