from django.urls import path, include

urlpatterns = [path("football/", include('api.views.football.urls'))]
