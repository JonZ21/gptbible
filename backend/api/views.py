from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
import requests
import os
from dotenv import load_dotenv

load_dotenv()


def get_verse(request):
    return HttpResponse("HELLO")
    
def get_chapter(request, book, chapter):
    API_ENDPOINT = "https://api.esv.org/v3/passage/text/"
    API_KEY = os.environ['ESV_API_KEY'] 

    headers = {
        "Authorization": "Token " + API_KEY
    }
    
    response = requests.get(API_ENDPOINT, headers=headers, params={"q": f"{book} {chapter}", "include-footnotes": False, "include-headings": False, "include-verse-numbers": False, "include-passage-references": False, "include-audio-link": False})
    
    return JsonResponse(response.json())

def get_book(request, book):
    API_ENDPOINT = "https://api.esv.org/v3/passage/text/"
    API_KEY = os.environ['ESV_API_KEY'] 

    headers = {
        "Authorization": "Token " + API_KEY
    }
    response = requests.get(API_ENDPOINT, headers=headers, params={"q": f"{book}", "include-footnotes": False, "include-headings": False, "include-verse-numbers": False, "include-passage-references": False, "include-audio-link": False})
        
    return JsonResponse(response.json())

# def get_gpt_book(request, book):
