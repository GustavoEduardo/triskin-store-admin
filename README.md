# Triskin Store Admin

Admin de produtos com listagem, carrinho, edição e busca de produtos.

------------------------------------------------------------------------


## 🛠️ Tecnologias e Bibliotecas

- React + Hooks
- TypeScript
- Tailwind CSS v3
- Axios
- Zustand
- TanStack Query
- JSON Server

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

#### Zustand

- Escolhido por sua API simples e baixo boilerplate
- Permite gerenciamento de estado global com re-renderizações granulares (cada componente consome apenas o que precisa)
- Utilização do middleware persist para manter o carrinho salvo após refresh, melhorando a experiência do usuário

#### React Query

- Escolhido para centralização do data fetching de forma declarativa
- Reduzir o uso de useEfect e controle manual de estados assíncronos
- Cache automático por queryKey
- Invalidação inteligente após mutations
- Controle de loading global e por componente
- Redução de estados locais desnecessários (useState)

#### useMemo
- Utilizado para cálculos (total do carrinho, badge e busca) e evitar recomputações desnecessárias em re-renderizações

#### Debounce
- Busca com 500ms para evitar chamadas desnecessárias à API

------------------------------------------------------------------------


## 🧑‍💻 Autor

[Gustavo L](https://www.linkedin.com/in/gustavo-barbosa-438b6694/)

Projeto desenvolvido para Desafio Técnico – Desafio Técnico – Eng. Front-End (Pleno)