# API do Projeto de Estruturas

 - Linguagem utilizada: **Node.js - Javascript(Typescript)**

## Iniciando a API
 - ``git clone``
 - ``yarn build``
 - ``yarn start``

 ## Descrição
 Utilizando-se de um *csv* com dados de veículos vendidos da BMW, organizamos a **árvore binária** com os dados encontrados no *csv*. Desse modo, utilizamos os preços dos carros vendidos como a chave principal para a organização da árvore binária de veículos encontrados.

## Árvore Binária
É possível encontrar o código referente a **árvore** na pasta *modules* da aplicação. A estrutura da **árvore binária** possui dois métodos: *inserção*(insert) e *procurar*(find). Ao iniciar a **API** é feita a inserção dos dados encontrados no arquivo *csv*, utilizando-se como parâmetro a chave *price* do banco de dados.

## Rotas da API
 - ``GET /healthCheck``: Retorna um json informando se a aplicação está online.
 - ``GET /getBmw``: Retorna as informações encontrados na **árvore binária**, com a possibilidade de filtrar com os seguintes parâmetros: **price**(Preço dos carros à serem encontrados), **operator**(Operador para comparação: <=, <, ===, >, >=), **key**(Chave para agrupamento dos dados encontrados: transmission, year, fuelType e model).

## Resultados
Foi utilizado uma aplicação web em **React + Next.js** para gerar os gráficos baseados nas perguntas que utilizamos para a demonstração dos resultados. Que foram:
 - Porcentagem de tipos de gasolinas para carros vendidos à $10,000.
 - Porcentagem de tipos de câmbio para carros vendidos à menos ou igual a $20,000.
 - Porcentagem de modelos para carros vendidos à $20,000.
 - Porcentagem de cada ano para carros vendidos à $30,000.

Repo do código do front-end: https://github.com/Garubieru/mack-tree-front

## Vídeo da explicação
 - https://www.youtube.com/watch?v=mXXQW_GD6k0

<img src="https://i.imgur.com/lkvMtmX.png" align="center">