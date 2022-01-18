# Alura Challenge Front-End 2021

Minha participação no Alura Challenge que começou no final de 2021, com foco em front-end!

## 🚀 Objetivo

O objetivo era criar um portal onde as pessoas pudessem escrever seus codigos e disponibilizar para outros usuários visualizarem e interagirem. Projeto incialmente contendo a página editor de codigo e a página comunidade (listagem dos codigos publicados), comforme foi solicitado no escopo do projeto.

## ✏️ Estrutura

O projeto foi desenvolvido com os seguinte recursos:

* Framework SPA: Angular 13
* Estilizaçao: Scss (Responsivo)
* Servidor: JSON Server
* Mudança de syntax: Highlight.js

## 💻 Funcionalidades

**Editor de Código**

* Inserção do código a ser compartilhado;
* Inserção de nome e descrição do projeto;
* Escolha da syntax no select de personalização;
* Mudança de cor da moldura ao redor da tela de editor;
* Botão para ativar o "highlight" no código, deixando o visual parecido com um editor de texto tradicional;
* Botão salvar que adiciona nosso "post" ao banco utilizando o metodo .post() do Http Client Module;

**Comunidade**

* Listagem das "postagens" utilizando o metodo .get() do Http Client Module;
* Comentários: Ao clicar no badge de comentários, abrirá uma modal para vc adicionar seu comentário a postagem;
* Opção de like e deslike nas postagens;
* Método de filtro usando o metódo .filter() da biblioteca RXJS

## Rodar projeto!

**Em seu terminal favorito faça os seguintes passos:

1. **git clone https://github.com/jcmagalhaess/alurachallenges.git** para clonar o repositório em sua maquina.
2. **npm install** para fazer o download dos pacotes do projeto.
3. **npm run server** para rodar o servidor __json-server__. Navegue para `http://localhost:3000/codes/` para visualizar.
3. **npm start** para rodar a aplicação. Navegue para `http://localhost:4200/` para visualizar.

## 😀 Manda um salve no meu linkedin!

[Meu Linkedin](https://www.linkedin.com/in/jcmagalhaess/)

### Agradeço pelo interesse!
