---
layout: none
title: Página inicial
style: main
---

{% include head.html %}
<body>
  <h1>Páginas:</h1>
  <div class="centralizado">
    <!--{% for page in site.data.pages %}
      <a href="{{ '/' | relative_url }}{{ page | downcase | replace: " ", "_" }}/"><button>{{ page }}</button></a>
    {% endfor %}-->

    {% assign all_pages = site.pages | map: "title" %}
    {% for page in all_pages %}
      <a href="{{ '/' | relative_url }}{{ page | downcase | replace: " ", "_" }}/"><button>{{ page }}</button></a>
    {% endfor %}
    {% for page in all_pages %}
      - {{ page }}
    {% endfor %}
  </div>
</body>
