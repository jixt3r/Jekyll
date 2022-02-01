---
layout: default
---

{% include header.html %}

<div class="centralizado">
  {% for page in site.data.pages %}
    <a href="/{{ site.repository-name }}/{{ page | downcase | replace: " ", "_" }}/" > {{ page }} </a>
  {% endfor %}
<div>

{% include footer.html %}
