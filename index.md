---
layout: none
title: Página Inicial
style: main
---

{% include head.html %}
<body>
  <h1>Páginas:</h1>
  <div class="centralizado">
    {% for page in site.data.pages %}
      <a href="{{ / | relative_url }}{{ page | downcase | replace: " ", "_" }}/"><button>{{ page }}</button></a>
    {% endfor %}
  </div>
{{ / | relative_url }}
</body>
