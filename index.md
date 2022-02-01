---
layout: default
---

{% include header.html %}

{% for page in site.data.pages %}
  <a href="/{{ site.repository-name }}/{{ page | downcase | replace: " ", "_" }}/"> {{ page }} </a>
{% endfor %}

{% include footer.html %}
