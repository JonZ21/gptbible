from django.urls import path
from . import views

urlpatterns = [
    path('get_Chapter/<str:book>/<int:chapter>/', views.get_chapter, name='get_chapter'),
    path('get_Book/<str:book>/', views.get_book, name='get_book'),
]
