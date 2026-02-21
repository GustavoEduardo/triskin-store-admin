# Triskin Store Admin

Admin de produtos com listagem, carrinho, edição e busca de produtos.

------------------------------------------------------------------------


## 🛠️ Tecnologias e Bibliotecas

- React + Hooks
- TypeScript
- Tailwind CSS v3
- Axios
- Zustand (estado global do carrinho)
- React Query (fetch, cache e mutations)
- JSON Server (mock API)

------------------------------------------------------------------------

## 🚀 Funcionalidades

- Listagem de produtos
- Busca com debounce (500ms)
- Adicionar ao carrinho
- Carrinho global com badge e total
- Persistência do carrinho no localStorage
- Editar produto (modal + mutation)
- Loader global e feedbacks visuais
- UX responsiva

------------------------------------------------------------------------

## ⚙️ Instruções de execução

- Instale dependências: npm install
- Rodar JSON Server: npm run server (porta 3001)
- Rodar aplicação: npm run dev (acessar http://localhost:5173/)
- Adicionar produtos ao carrinho, editar ou remover

------------------------------------------------------------------------

## Estratégias de otimização e estado global

- Zustand: carrinho global simples, escalável e persistente no localStorage
- React Query: queries e mutations otimizadas, cache automático, invalidação após update, - controle de loading global
- useMemo: total do carrinho e badge calculados de forma eficiente, evitando re-renders desnecessários
- Debounce: busca com 500ms para evitar chamadas desnecessárias à API
- Tailwind: componentes limpos, reutilizáveis e responsivos,

------------------------------------------------------------------------


## 🧑‍💻 Autor

[Gustavo L](https://www.linkedin.com/in/gustavo-barbosa-438b6694/)

Projeto desenvolvido para Desafio Técnico – Desafio Técnico – Eng. Front-End (Pleno)