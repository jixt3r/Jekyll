# Informações sobre sites Jekyll

* Pra usar Markdown tem que ter a extensão md no arquivo.
* Um arquivo include pode chamar outro dentro de si.
* HTML e Liquid dá para usar em todos os arquivos.

## Sobre as pastas:

_drafts: É para rascunhos.

## Stylesheet

* Existem dois tipos de Stylesheet: "Main" e "Partial". As "Main" ficam em "assets/css" e as "Partial" ficam em "_sass" e são puxadas pelas "Main" com @import

## Puxar dados
**Exemplo**: {{ palavra.outra }}

* **page** é a página atual, com ele vc pega informações do front matter.
* **site** é o root do repositório, com ele vc acessa pastas e pega informações dentro de arquivos.

**Tema**: Minimal.
