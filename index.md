---
layout: none
title: Página Inicial
style: mai
---

{% include head.html %}
<body>
<h1>Páginas:</h1>
<div class="centralizado">
  {% for page in site.data.pages %}
    <a href="/{{ site.repository-name }}/{{ page | downcase | replace: " ", "_" }}/" ><button>{{ page }}</button></a>
  {% endfor %}
</div>
</body>
