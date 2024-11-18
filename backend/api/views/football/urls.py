
from django.urls import path

from .views import FixturesView

urlpatterns = [
    path('fixtures/', FixturesView.as_view(), name='teams')
]
