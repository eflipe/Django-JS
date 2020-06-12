from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.db.models import Q

from .models import Autor, Pictures


class PicsListView(ListView):
    model = Pictures
    context_object_name = 'pics_list'
    template_name = 'galeria_app/pics_list.html'
    ordering = ['-id']


class PicsListViewJS(ListView):
    model = Pictures
    context_object_name = 'pics_list'
    template_name = 'galeria_app/pics_list_version_js.html'
    ordering = ['-id']


class AuthorsListView(ListView):
    model = Autor
    context_object_name = 'authors_list'
    template_name = 'galeria_app/authors.html'


class AuthorsDetailView(DetailView):
    model = Autor
    context_object_name = 'authors_detail_obj'
    template_name = 'galeria_app/authors_detail.html'


class SearchResultsView(ListView):
    model = Autor
    context_object_name = 'authors_list'
    template_name = 'galeria_app/search_results.html'

    def get_queryset(self):
        query = self.request.GET.get('q')
        return Autor.objects.filter(
               Q(author__icontains=query)
        )


class PicsSlideView(ListView):
    model = Pictures
    context_object_name = 'pics_slide'
    template_name = 'galeria_app/pics_slide_copy.html'
    ordering = ['-id']
