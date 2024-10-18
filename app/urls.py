from app.views import *

from django.urls import path
urlpatterns = [
    path("",home, name="home"),
    path("about/",about, name="about"),
    path("gallery/",gallery, name="gallery"),
    path("contact/",contact, name="contact"),
    path("glance/",glance, name="glance"),
    path("news/",news, name="news"),
    path("sport/",sport, name="sport"),
    path("visite/",visite, name="visite"),
    path("sec/",sec, name="sec"),
    path("lang/",lang, name="lang"),
    path("recutment/",recutment, name="recutment"),
    path("EYFS/",EYFS, name="EYFS"),
    path("infortechcom/",infortechcom, name="infortechcom"),
]