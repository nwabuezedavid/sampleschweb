from django.shortcuts import render
from .models import *
# Create your views here.
def home(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "home.html",con)
def discover(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "discove.html",con)
def teology(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "teology.html",con)
def study(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "study.html",con)
def Engage(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "Engage.html",con)
def Connect(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "Connect.html",con)
def Library(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "Library.html",con)
def WorkingatTrinity(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "WorkingatTrinity.html",con)
def student(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "student.html",con)
def WaystoGive(request):
    con ={
        # 'site':siteedit.objects.get(idx=1)
    }
    return render (request, "WaystoGive.html",con)
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