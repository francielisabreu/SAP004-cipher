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

Alunas da Laboratoria que desejam um ambiente seguro para trocar mensagens ou dicas de programação. O assunto pode ser diverso, mas a confiança de que tudo será confidencial é única. A ferramenta é somente para aluna da Laboratoria, caso você não faça parte, dentro da aplicação terá um link exclusivo para mais informações, clique nele e veja como participar!

## 3. O Projeto

A aplicação permite Cifrar e Decifrar letras.

## 4.  A Interface

Na primeira tela, o usuário pode escolher entre começar ou saber mais sobre a Laboratoria.


![tela-01-comeco-ou-fazer-parte](https://user-images.githubusercontent.com/61169584/79082515-e8f20780-7cfc-11ea-9546-1d4db4755e8a.JPG)

Ou seja, a primeira coluna da esquerda, é para quem já é aula. Utilizando o botão START será dado literalmente o inicio da experiência da crifra.

Na outra coluna, temos a opção de um link, no qual todas as informações para quem deseja saber mais sobre o projeto da Laboratoria possa entrar e se informar melhor.

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
