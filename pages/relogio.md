---
layout: none
permalink: /relogio/
title: Relogio
style: relogio
---

<html>
    {% include head.html %}
    <body>
        <div class="container">
            <div id="corpo-relogio">
                <div id="corpo-interno-relogio">
                    <div class="traco-hora" id="traco-hora-1"></div>
                    <div class="traco-hora" id="traco-hora-2"></div>
                    <div class="traco-hora" id="traco-hora-3"></div>
                    <div class="traco-hora" id="traco-hora-4"></div>
                    <div class="traco-hora" id="traco-hora-5"></div>
                    <div class="traco-hora" id="traco-hora-6"></div>
                    <div id="tampa-relogio"></div>
                    <div id="ponteiro-horas"></div>
                    <div id="ponteiro-minutos"></div>
                    <div id="ponteiro-segundos"></div>
                </div>
            </div>
        </div>
        <script src="{{ '/assets/scripts/relogio.js' | relative_url }}"></script>
    </body>
</html>
