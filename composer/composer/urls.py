from django.contrib import admin
from django.urls import path, re_path
from .views import react_render

urlpatterns = [
    path('admin', admin.site.urls),
    re_path(r'^.*', react_render),
]
