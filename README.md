# Financial Management

## Visão geral

**Financial Management** é uma aplicação web desenvolvida como parte de um desafio técnico para consolidar os conhecimentos adquiridos durante a fase de estudos. O objetivo principal é criar uma interface de gerenciamento financeiro que permita aos usuários acompanhar e organizar suas transações financeiras de forma intuitiva e eficiente.


## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

- **Next.js**: Framework React para renderização híbrida (SSR e SSG) e funcionalidades avançadas de rotas.  
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, aumentando a segurança e legibilidade do código.  
- **Material-UI (MUI)**: Biblioteca de componentes React para criar interfaces de usuário modernas e responsivas.  
- **Storybook**: Ferramenta para desenvolvimento isolado de componentes e documentação de design system.  
- **CSS com Flexbox e Grid**: Técnicas utilizadas para criar layouts flexíveis, responsivos e estruturados.  

## Funcionalidades

1. **Home Page**  
   - Exibição de informações sobre o saldo da conta corrente.
   - Exibição de extrato das últimas transações.
   - Seção para iniciar uma nova transação, com opções para selecionar o tipo de transação e inserir o valor. 
   - Menu de navegação entre páginas, como: transferências, investimentos e outros serviços.

2. **Adicionar nova transação**  
   - Página contendo um formulário com campos de tipo de transação e valor para criar novas transações.
   - A adição altera o valor de saldo da conta.

3. **Editar transação**  
   - Modal que apresenta os dados da transação a ser editada, permitindo que os mesmos sejam alterados e salvos.
   - A edição altera o valor de saldo da conta.

4. **Remover transação**  
   - Modal de confirmação para remoção da transação selecionada.
   - A remoção altera o valor de saldo da conta.

5. **Detalhar transação**  
   - Modal com os dados da transação selecionada. Os dados são: tipo, valor, data e autor.

## Setup Instructions

1. Clone o repositório:  
   ```bash
   git clone https://github.com/evelynneves/financial-management

2. Instale as dependências:  
   ```bash
   npm install

3. Inicie o servidor de desenvolvimento:  
   ```bash
   npm start

4. Acesse a aplicação no navegador em http://localhost:3000

## Link para o vídeo de apresentação da aplicação
   - https://youtu.be/eZloP0KJZbc

## Usuário Pré-Criado  

Para facilitar os testes da aplicação, um usuário já foi pré-cadastrado com os seguintes dados:  

- **E-mail**: joanadasilvaoliveira@email.com.br  
- **Senha**: desafio@2024  
