from django.shortcuts import render
from django.views.generic import ListView, DetailView

from .models import Autor, Pictures


class PicsListView(ListView):
    model = Pictures
    context_object_name = 'pics_list'
    template_name = 'galeria_app/pics_list.html'


class AuthorsListView(ListView):
    model = Autor
    context_object_name = 'authors_list'
    template_name = 'galeria_app/authors.html'


class AuthorsDetailView(DetailView):
    model = Autor
    context_object_name = 'authors_detail_obj'
    template_name = 'galeria_app/authors_detail.html'
