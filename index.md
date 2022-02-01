---
layout: none
title: Página Inicial
---

{% include head.html %}
<body>
{% include header.html %}
<div class="centralizado">
  {% for page in site.data.pages %}
    <a href="/{{ site.repository-name }}/{{ page | downcase | replace: " ", "_" }}/" ><button>{{ page }}</button></a>
  {% endfor %}
  {% for item in site.data.Ju %}
    $ {{ item }}
  {% endfor %}
  DDD {{ site.data.Ju }}
</div>
</body>
