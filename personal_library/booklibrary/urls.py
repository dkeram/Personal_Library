from django.urls import path
from booklibrary import views

urlpatterns = [
    path('booklibrary/', views.BookListCreateView.as_view(), name='book-create'),
    path('booklibrary/<int:pk>/', views.BookRetrieveUpdateDestsroyView.as_view(), name='book-detail'),
]
