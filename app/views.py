from django.shortcuts import render
from .models import *
# Create your views here.
def home(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "home.html",con)
def about(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "about.html",con)
def gallery(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "gallery.html",con)
def contact(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "contact.html",con)
def glance(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "glance.html",con)
def news(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "news.html",con)
def sport(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "sport.html",con)
def visite(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "visite.html",con)
def sec(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "sec.html",con)
def lang(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "lang.html",con)
def recutment(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "recutment.html",con)
def EYFS(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "EYFS.html",con)
def infortechcom(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "infortechcom.html",con)