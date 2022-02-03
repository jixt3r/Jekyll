---
layout: none
title: Página Inicial
style: main
---

{% include head.html %}
<body>
{% include header.html %}
<div class="centralizado">
  <h1>Páginas:</h1>
  {% for page in site.data.pages %}
    <a href="/{{ site.repository-name }}/{{ page | downcase | replace: " ", "_" }}/" ><button>{{ page }}</button></a>
  {% endfor %}
</div>
</body>
