import requests
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponseNotFound

def _react_render(content, request):
    render_assets = {
        'url': request.path_info,
    }

    render_assets.update(content)

    try:
        res = requests.post(settings.RENDER_SERVER_BASE_URL + '/render',
                            json=render_assets,
                            headers={'content_type': 'application/json'})

        rendered_payload = res.json()
    except Exception as e:
        return HttpResponseNotFound

    return render(request, 'base.html', rendered_payload)
