---
layout: none
title: Página inicial
style: main
---

{% include head.html %}
<body>
  <h1>Páginas: {{ site.hoje }}</h1>
  <div class="centralizado">
    {% for page in site.data.pages %}
      <a href="{{ '/' | relative_url }}{{ page | downcase | replace: " ", "_" }}/"><button>{{ page }}</button></a>
    {% endfor %}
  </div>
</body>
