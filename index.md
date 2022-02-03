---
layout: none
title: Página Inicial
style: main
---

{% include head.html %}
<body>
{% include header.html %}
<div class="centralizado">
  {% for page in site.data.pages %}
    <a href="/{{ site.repository-name }}/{{ page | downcase | replace: " ", "_" }}/" ><button>{{ page }}</button></a>
  {% endfor %}
  {{ '/assets/css/' | relative_url | append: {{ page.style }}.css }}
</head>
</div>
</body>
