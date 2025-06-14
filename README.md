
# 🍽️ FoodExplorer — Frontend

Projeto de interface web para o sistema de gerenciamento de pratos de um restaurante.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Styled-Components](https://styled-components.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Swiper.js](https://swiperjs.com/) (para slider de pratos)

## 🎨 Estilização

Todo o estilo do projeto foi implementado com **Styled-Components**, possibilitando a criação de componentes de UI reativos, encapsulados e responsivos.

## 🔧 Funcionalidades

- Listagem de pratos
- Busca de pratos e ingredientes
- Visualização de detalhes do prato
- Controle de quantidade de pratos
- Cadastro e edição de pratos (apenas admin)
- Upload de imagens de pratos
- Exclusão de pratos
- Gerenciamento de ingredientes
- Sistema de autenticação (login/logout)
- Responsivo para desktop e mobile

## 📦 Instalação e Execução

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/foodexplorer-frontend.git
cd foodexplorer-frontend
```

2. Instale as dependências:

```bash
npm install
# ou
yarn
```

3. Rode a aplicação:

```bash
npm run dev
# ou
yarn dev
```

4. Acesse no navegador:

```
http://localhost:5173
```

⚠️ **Observação:**  
Este front-end consome a API hospedada no repositório: [FoodExplorer - Back-End](https://github.com/seu-usuario/foodexplorer-back-end).

### Variáveis de Ambiente `.env`

Crie um arquivo `.env` na raiz do projeto:

```bash
VITE_API_URL=http://localhost:3333
```

## 📂 Estrutura de Pastas

```
src/
├── components/        # Componentes reutilizáveis
├── pages/            # Páginas da aplicação
├── services/         # Configuração do Axios (API)
├── hooks/            # Custom hooks (ex: Auth)
├── styles/           # Tema e estilos globais (Styled-components)
├── utils/            # Funções e variáveis utilitárias
├── App.jsx           # Arquivo principal de rotas
└── main.jsx          # Ponto de entrada do React
```

## 🧩 Pacotes Principais

| Pacote                | Descrição                                      |
| -------------------- | --------------------------------------------- |
| **styled-components** | Estilização CSS-in-JS                         |
| **axios**            | Requisições HTTP para a API                    |
| **react-router-dom** | Gerenciamento de rotas                         |
| **react-icons**      | Biblioteca de ícones                           |
| **swiper**           | Slider de pratos (carrossel)                   |

## 📝 To-Do

- [ ] Implementar testes unitários
- [ ] Melhorar acessibilidade (a11y)
- [ ] Suporte a internacionalização (i18n)

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou pull requests.

## 🛡️ Licença

Este projeto está sob a licença MIT.
