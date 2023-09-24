from django.shortcuts import render
from rest_framework import generics
from .models import Books
from .serilazers import BooksSerializer

# Create your views here.
class BookListCreateView(generics.ListCreateAPIView):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer
    

class  BookRetrieveUpdateDestsroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer