---
layout: none
title: Página inicial
style: main
---

{% include head.html %}
<body>
  <h1>Páginas:</h1>
  <div class="centralizado">

    {% for page in all_pages %}
      {% if page.size > 1 %}
        <a href="{{ '/' | relative_url }}{{ page | downcase | replace: " ", "_" }}/"><button>{{ page }}</button></a>
      {% endif %}
    {% endfor %}

  </div>
</body>
