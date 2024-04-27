# Trilha JS Developer - Pokedex

Este projeto foi desenvolvido durante o curso Formação JavaScript Developer, da Digital Innovation One - DIO. A maior parte do projeto foi desenvolvida durante a aula, à exceção da página de detalhes, cujo desenvolvimento foi lançado como desafio para a conclusão do projeto.

O projeto em si trata da utilização de uma API externa, no caso, a PokeApi, dos personagens Pokemóns. Inicialmente desenvolmemos durante a aula, um algorítmo para realizar a requisição(Fetch) da URL que retornava por meio de Promise, uma lista de Pokemóns. Pegamos alguns dados iniciais, como nome, ID( número) e a imagem principal do Pokemón. Ainda, limitamos o resultado para 10 por página, e limitamos a lista de Pokemóns para apenas 151, referentes à primeira geração dos personagens que contam com mais de mil deles, no total.

Na segunda parte do projeto, foi feito o desafio, que era criar a página de detalhes para cada Pokemóm da lista. O objetivo era que, ao clicar em um item, o usuário seja direcionado para a página contendo detalhes do Pokemón clicado. Assim, fiz uma nova requisição(Fetch) desta vez utilizando parâmetros de busca por ID. Então, para cada resultado, era necessário pegar detalhes da API, além dos principais (nome, ID e foto) e exibir no HTML, numa nova página. 

Tive alguma dificuldade, pois esse é meu primeiro curso de JavaScript completo. O layout ficou simples, não fui muito fundo no design, já que o objetivo era aprender JS. Ainda ficou um problema de responsividade para telas muito pequenas, já que não tenho controle sobre quantos dados são exibidos(o número difere para cada) e não tenho muita experiência em desenvolvimento web ainda. 

Para o que já aprendi, até que o resultado ficou satisfatório.


