import http.client
import json

from rest_framework.views import APIView

# Create your views here.

from django.http import HttpResponse

API_KEY = "6ac7516a6ffee1f479e1f1752924efa8"  # TODO: MOVE!!


class FixturesView(APIView):

    def get(self, request):

        conn = http.client.HTTPSConnection("v3.football.api-sports.io")

        headers = {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": API_KEY,
        }

        conn.request("GET", "/fixtures?league=39&season=2022&round=Regular+Season+-+26", headers=headers)
        
        res = conn.getresponse()
        data = json.loads(res.read().decode())["response"]
        print('IM A FIRIN MY LASER')
        return HttpResponse(data)


