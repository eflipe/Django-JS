from django.urls import path

from .views import PicsListView,PicsListViewJS, AuthorsListView, AuthorsDetailView, SearchResultsView, PicsSlideView

urlpatterns = [
    path('', PicsListView.as_view(), name="pics_list"),
    path('artistas/', AuthorsListView.as_view(), name="authors_list"),
    path('artistas/<slug:slug>', AuthorsDetailView.as_view(), name="authors_detail"),
    path('search/', SearchResultsView.as_view(), name="search_results"),
    path('slides/', PicsSlideView.as_view(), name="pics_slide"),
    path('v2/', PicsListViewJS.as_view(), name="pics_list_version_js"),
]
