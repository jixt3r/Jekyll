# Informações sobre sites Jekyll

* Pra usar Markdown tem que ter a extensão md no arquivo.
* Um arquivo include pode chamar outro dentro de si.
* HTML e Liquid dá para usar em todos os arquivos.

## Sobre as pastas:

_drafts: É para rascunhos.

## Stylesheet

* Existem dois tipos de Stylesheet: _**Main**_ e _**Partial**_. As _**Main**_ ficam em "assets/css" e as _**Partial**_ ficam em "_sass" e são puxadas pelas _**Main**_ com: ```@import "{{ site.sass.default }}";```

## Puxar dados
**Exemplo**: ```{{ palavra.outra }}```

* _**page**_ é a página atual, com ele vc pega informações do front matter.
* _**site**_ é o root do repositório, com ele vc acessa pastas e pega informações dentro de arquivos.

**Tema**: Minimal.
