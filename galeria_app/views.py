from django.shortcuts import render
from django.views.generic import ListView, DetailView

from .models import pictures


class PicsListView(ListView):
    model = pictures
    context_object_name = 'pics_list'
    template_name = 'galeria_app/pics_list.html'


class AuthorsListView(ListView):
    model = pictures
    context_object_name = 'authors_list'
    template_name = 'galeria_app/authors.html'


class AuthorsDetailView(DetailView):
    model = pictures
    context_object_name = 'authors_detail_obj'
    template_name = 'galeria_app/authors_detail.html'
