from django.urls import path

from .views import PicsListView, AuthorsListView, AuthorsDetailView

urlpatterns = [
    path('', PicsListView.as_view(), name="pics_list"),
    path('artistas/', AuthorsListView.as_view(), name="authors_list"),
    path('artistas/<slug:slug>', AuthorsDetailView.as_view(), name="authors_detail"),
]
