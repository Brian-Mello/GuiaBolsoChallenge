# GuiaBolsoChallenge
Projeto fron-end criado para guia bolso para desenvolvedores Front-end

## Stack

O Front-end web desse projeto teve seus arquivos em divididos seis seções. Foram divididos em Components onde são guardados os inputs, cards de post, cards de comentários e etc. Nos Containers são as páginas que "pensam" em união aos componentes para se mostrar na tela. As Actions armazenam as requisições feitas pela API. As Pasta Images armazenam as imagens utilizadas nos cards de categorias. O reducer salva as informações que foram requisitadas nas actions permitindo serem usadas globalmente no projeto e o Style armazena a estilização global do projeto.

## Tcnologias e serviços utilizados

Para a conclusão desse projeto foi utilizado: ReactJs, Redux, React-router, javascript, HTML, CSS, Material-ui, github, styled-components e o gerenciamento de pacotes foi feito utilizando NodeJS(yarn e npm).

## Sobre

Esse projeto foi criado com React/Redux e tem como objetivo consumir os dados fornecidos pela api.chucknorris.io quem trazem piadas sobre o Chuck Norris. Ele tem duas páginas, uma home page e uma página na qual a piada é renderizada de acordo com a categoria selecionada. Na home page encontramos um pequeno texto perguntando se você quer ouvir uma piada sobre Chuck norris e em seguida temos diversos cards das categorias da piadas. Ao clicar em alguma categoria a pessoa é redirecionada para a página da categoria selecionada e uma piada sobre Chuck norries relacionada aquela categoria é renderizada. Na página da piada a pessoa pode encontrar um botão para voltar para a página de categorias, um botão para a renderização de uma nova piada sobre aquela mesma categoria e um card no qual tem uma imagem do Chuck Norris e um espaço que tem um balão de fala onde a piada é renderizada. Nesse projeto o usuário consegue escolher a categoria da piada que quer ver, pode ler a piada e pode renderizar outras piadas de uma mesma categoria utilizando o botão de "new joke"

## Instruções para rodar

Por ser um projeto ReactJS, há a necessidade do NodeJS. Para clonar o repositório utilize via ***TERMINAL*** o comando:

***git clone https://github.com/Brian-Mello/GuiaBolsoChallenge.git***

após o clone do repositório é necessário instalar o node_modules. Para isso entre no repositório via ***TERMINAL*** e utilize o comando:

***npm install*** ou ***npm i***

e para rodar o projeto após a instalação utilize o comando: 

***npm start*** ou npm ***run start***

## Link para acesso da aplicação deployada

link do chuck jokes: https://brian-mello.github.io/GuiaBolsoChallenge/

