# Cifra de César

## Índice

* [1. Como a Cifra de Cesar Funciona?](#1-Como-a-Cifra-de-Cesar-Funciona?)
* [2. O Usuário](#2-O-Usuario)
* [3. O Projeto](#3-O-Projeto)
* [4. A Interface](#4-A-Interface)
* [5. Objetivos de aprendizagem](#5-Objetivos-de-aprendizagem)
* [6. Checklist](#6-Checklist)

***

## 1. Como a Cifra de Cesar Funciona

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

## 2.  O Usuário

O que eu tenho que fazer exatamente? Neste projeto você criará a primeira
aplicação web do _bootcamp_. Nela o usuário poderá cifrar e decrifrar um texto
indicando a chave de deslocamento (_offset_).

O tema é livre. Você deve pensar em alguma situação de vida real em que seja
necessário cifrar uma mensagem e pensar em como deve ser a experiência do
usuário (tela, explicações, mensagens, cores, marca?, etc.). Algumas ideias de
exemplo:

* Mensagens secretas para alguma pessoa.
* Ferramenta de mensagens internas de uma organização em uma zona de conflito.
* Cifrar cartões de crédito.
* Criar senhas seguras para email.

## 3. O Projeto

Neste projeto você aprenderá a construir uma aplicação web (_WebApp_) que irá
interagir com o usuário final através do navegador utilizando HTML, CSS e
JavaScript como ferramentas.

Em outras palavras, você aprenderá:

* Organizar o seu tempo e priorizar as tarefas em um ambiente com **alta
  incerteza**.
* Entender as **necessidade do usuário** e propor uma solução.
* Entender a importância do processo de prototipação durante a criação de um
  produto digital.
* Conhecer os princípios básicos de desenho visual.
* Utilizar _tags_ semânticas de HTML e elementos de formulário.
* Mostrar elementos de formulário na tela usando **HTML** e **CSS**.
* Utilizar diversos tipos de seletores no CSS: elementos, classe e id.
* Utilizar o modelo de caixas do CSS (border, margin, padding).
* Definir regras de estilo do CSS.
* Permitir ao usuário interagir com elementos do DOM e fazer que a aplicação
  responda (cifrar/decifrar) quando os **evento de DOM** ocorrerem.
* Manipular _**strings**_ (cadeias de texto).
* Usar **controle de fluxo** (loops, condicionais, ...).
* Atualizar a tela com os resultados (**manipular o DOM**) através de
  **innerHTML** ou **textContent**.
* **Implementar uma função** dada a descrição do seu comportamento.
* Verificar que as suas funções façam o esperado (**usando provas unitárias
  (_unit test_) com Jest**).
* Configurar a sua conta de git.
* Fazer o _fork_ e _clone_ do repositório do projeto.
* Manter o seu repositório remoto sempre atualizado (commit, pull, push).
* Subir o seu projeto para o Github Pages.

## 4.  A Interface

* Este projeto deve ser resolvido individualmente.
* O projeto será entregue subindo o seu código no GitHub (commit/push) e o
  deploy será feito no GitHub Pages. Se não sabe o que é o GitHub, não se
  preocupe, você aprendera durante o projeto.

## 5. Objetivos de aprendizagem

Use o alfabeto simples (somente maiúsculas e sem ç):

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### Definição do produto

No README.md, escreva como você definiu seu usuário e qual foi o processo para
definir o produto final a nível de expriência e interface.

* Quem são os principais usuário do produto?
* Quais são os objetivos do usuário em relação com o produto?
* Como você acredita que o produto está resolvendo os problemas do usuário?

### Interface do usuário (UI)

A interface deve permitir ao usuário:

* Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada.

### Scripts / Arquivos

* `REAME.md`: deve explicar como fazer deploy, instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.
* `src/index.html`: aqui será o ponto de entrada da sua aplicação. Este arquivo
  deve conter a marcação HTML e chamar o CSS e JavaScript necessários.
* `src/cipher.js`: aqui você deve implementar o objeto `cipher`, o qual já está
  _exportado_ no _boilerplate_. Este objeto (`cipher`) deve conter dois métodos:
  - `cipher.encode(offset, string)`: `offset` é o número de posições que
      queremos mover para a direita no alfabeto e `string` é a mensagem (texto)
      que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` é o número de posições que
      queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
      que queremos decifrar.
* `src/index.js`: aqui você deve escutar os eventos de DOM, chamar
  `cipher.encode()` e `cipher.decode()`.
* `test/cipher.spec.js`: este arquivo contem alguns testes de exemplo e aqui
  você deve implementar os testes para `cipher.encode()` e `cipher.decode()`.

## 6. Checklist

As seções chamadas _Hacker Edition_ são **opcionais**. Se você **terminou** tudo
e ainda sobrou tempo, faça essa parte. Assim você poderá aprofundar e exercitar
mais sobre os objetivos de aprendizagem do projeto.

A descrição geral deste projeto não menciona o que aconteceria com letras
minúsculas ou outros caracteres (como espaço, pontuação, ç, ...). O
_boilerplate_ inclui alguns testes (comentados) que vocês podem usar como ponto
de partida para implementar o suporte para esses casos.

Também não foi mencionado o que aconteceria com _offset_ negativo. Como parte da
hacker edition te convidamos a explorar esse caso sozinha.
