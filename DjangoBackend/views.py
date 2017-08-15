from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import sys
def index(request):
    return render(request, 'index.html')

@api_view(['GET'])
def buttonresponse(request):
    sys.stdout.write("Response in command line")
    return Response("Response on get request")