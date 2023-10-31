from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
import requests
import openai
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")
ESV_API_KEY = os.getenv("ESV_API_KEY")

def get_verse(request):
    return HttpResponse("HELLO")
    
def get_chapter(request, book, chapter):
    API_ENDPOINT = "https://api.esv.org/v3/passage/text/"
    headers = {
        "Authorization": "Token " + ESV_API_KEY
    }
    
    response = requests.get(API_ENDPOINT, headers=headers, params={"q": f"{book} {chapter}", "include-footnotes": False, "include-headings": False, "include-verse-numbers": False, "include-passage-references": False, "include-audio-link": False})
    
    return JsonResponse(response.json())

def get_book(request, book):
    API_ENDPOINT = "https://api.esv.org/v3/passage/text/"

    headers = {
        "Authorization": "Token " + ESV_API_KEY
    }
    response = requests.get(API_ENDPOINT, headers=headers, params={"q": f"{book}", "include-footnotes": False, "include-headings": False, "include-verse-numbers": False, "include-passage-references": False, "include-audio-link": False})
        
    return JsonResponse(response.json())

def get_gpt_book(request, book):
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are bible assistant. Generating short concise summaries of chapters of the bible."},
        {"role": "user", "content": "What is the book of " + book + " about?"}
    ]
    )
    response = completion.choices[0].message
    return HttpResponse(response.json())
