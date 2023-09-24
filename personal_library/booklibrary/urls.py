from django.urls import path
from booklibrary import views

urlpatterns = [
    path('books/', views.BookListCreateView.as_view(), name='book-create'),
    path('books/<int:pk>/', views.BookRetrieveUpdateDestsroyView.as_view(), name='book-detail'),
]
