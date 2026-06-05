# Context API Global

## Objetivo

Criar um gerenciamento global de estado para centralizar todas as pesquisas da aplicação.

## Contexto

O PulseUX precisava armazenar pesquisas, perguntas e operações de CRUD sem a utilização de backend.

## Prompt Utilizado

Estou desenvolvendo uma aplicação React para criação de pesquisas.

Preciso criar uma Context API responsável por armazenar todas as pesquisas da aplicação.

Cada pesquisa deve possuir:

- id
- título
- descrição
- status
- lista de perguntas

Também preciso de funções para:

- criar pesquisa
- atualizar pesquisa
- remover pesquisa
- publicar pesquisa

A solução deve seguir boas práticas de React.

## Resultado Obtido

Foi definida uma estrutura baseada em Context API responsável pelo gerenciamento global das pesquisas.

## Ajustes Realizados

Posteriormente foram adicionadas funções para gerenciamento de perguntas e persistência em Local Storage.

## Impacto no Projeto

A Context API tornou-se o núcleo da aplicação e passou a ser utilizada por praticamente todas as telas do sistema.

## Ferramenta Utilizada

ChatGPT