# Publicação de Pesquisas

## Objetivo

Implementar funcionalidade de publicação de pesquisas com geração de links compartilháveis.

## Contexto

Após criar uma pesquisa no editor, os usuários precisam de uma maneira simples de publicar e compartilhar as pesquisas com respondentes.

## Prompt Utilizado

Preciso criar uma funcionalidade de publicação de pesquisas que:
- Gere um link único e compartilhável para cada pesquisa
- Permita que usuários desativem/ativem uma pesquisa
- Exiba um código único para cada pesquisa publicada
- Salve o status de publicação no localStorage
- Permita copiar o link com um clique

## Resultado Obtido

Implementado sistema de publicação com:
- Página `PublishedSurveyPage` para visualização da pesquisa publicada
- Função de geração de ID único para cada pesquisa
- Componente de compartilhamento com opção de copiar link
- Status visual indicando se a pesquisa está ativa ou inativa

## Ajustes Realizados

- Adição de feedback visual ao copiar link
- Validação de pesquisa antes de permitir publicação
- Armazenamento do status de publicação no localStorage

## Impacto no Projeto

Permitiu que usuários compartilhem pesquisas de forma simples, facilitando a coleta de respostas.

## Ferramenta Utilizada

GitHub Copilot
