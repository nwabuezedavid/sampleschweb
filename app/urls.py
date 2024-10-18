from app.views import *

from django.urls import path
urlpatterns = [
    path("",home, name="home"),
    path("discover/",discover, name="discover"),
    path("theology/",teology, name="teology"),
    path("study/",study, name="study"),
    path("Engage/",Engage, name="Engage"),
    path("Connect/",Connect, name="Connect"),
    path("Library/",Library, name="Library"),
    path("Workingatus/",WorkingatTrinity , name="WorkingatTrinity"),
    path("student/",student, name="student"),
    path("WaystoGive/",WaystoGive, name="WaystoGive"),
    path("recutment/",recutment, name="recutment"),
    path("EYFS/",EYFS, name="EYFS"),
    path("infortechcom/",infortechcom, name="infortechcom"),
]