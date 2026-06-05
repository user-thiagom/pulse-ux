# PulseUX

PulseUX é uma aplicação web de criação, gestão e análise de pesquisas de experiência do usuário (UX). O projeto oferece uma interface moderna e fluida para criar pesquisas, gerenciar templates, visualizar resultados e responder questionários.

## 🚀 O que faz

- Página de aterrissagem com navegação para login/cadastro
- Autenticação simples usando `localStorage`
- Dashboard de pesquisa com seções de estatísticas e pesquisas recentes
- Criação e edição de pesquisas personalizadas
- Filtro de pesquisas e templates
- Visualização de pesquisas publicadas e páginas de resposta
- Animações suaves com `framer-motion`

## 🧰 Tecnologias utilizadas

- React 19
- Vite
- React Router DOM
- Ant Design (`antd`)
- Framer Motion
- Crypto-JS
- GitHub Pages (deploy via `gh-pages`)

## 📁 Estrutura principal do projeto

- `src/` - todos os arquivos da aplicação
  - `pages/` - páginas principais (`Landing`, `Home`, `Login`, `Register`, `Surveys`, `Templates`, `Survey`, `PublishedSurvey`, `SurveyResponse`)
  - `components/` - componentes reutilizáveis e layouts
  - `routes/` - configuração de rotas com `react-router-dom`
  - `services/` - lógica de autenticação e armazenamento local
  - `utils/` - helpers, animações e geração de IDs
  - `styles/` - estilos globais, reset e variáveis

## 💻 Guia de instalação

Siga estes passos para rodar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/user-thiag/pulse-ux.git
```

2. Entre na pasta do projeto:

```bash
cd pulse-ux
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

5. Abra o navegador e acesse a URL exibida no terminal, normalmente:

```text
http://localhost:5173
```

## ⚙️ Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — cria a versão de produção
- `npm run preview` — pré-visualiza a build de produção localmente
- `npm run lint` — executa o ESLint
- `npm run deploy` — publica a pasta `dist/` usando `gh-pages`

## 🌐 Deploy

O projeto já conta com configuração para deploy em GitHub Pages:

```bash
npm run deploy
```

Isso executa a build e publica o conteúdo da pasta `dist/` no branch configurado.

## 🛠️ Observações

- A aplicação usa `localStorage` para gerenciar usuários e manter sessão;
- Não há backend real implementado, portanto os dados são persistidos apenas no navegador;
- Para produção real, recomenda-se conectar a uma API e banco de dados apropriados.

## 💡 Melhorias possíveis

- Persistência em backend com API REST ou GraphQL
- Autenticação real com JWT
- Integração com analytics e relatórios avançados
- Melhorias de acessibilidade e suporte a múltiplos idiomas

## 📄 Licença

Projeto aberto para estudos e demonstração.
