import requests
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponseNotFound

def react_render(request):
    render_assets = {
        'url': request.path_info,
    }

    try:
        res = requests.post('http://localhost:3000' + '/render',
                            json=render_assets,
                            headers={'content_type': 'application/json'})

        rendered_payload = res.json()
    except Exception as e:
        print(e)
        return HttpResponseNotFound()

    return render(request, 'base.html', rendered_payload)
