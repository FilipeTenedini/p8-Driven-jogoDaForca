

# 8° Projeto Driven Education Bootcamp
- Primeiro projeto utilizando React
### Você pode acessar a aplicação neste link:
  ### - <a href="https://p8-driven-jogo-da-forca.vercel.app/"> Jogo da forca </a>
  ### - <a href="https://www.figma.com/file/pBXcqQZlun3INESEf0kwDP/Jogo-da-Forca?node-id=0%3A1&t=Zcil1abyeBfsJrwi-0"> Figma </a>
  
<br><br><br>


<p align="center">
  |&nbsp;&nbsp;&nbsp<a href="#Projeto">Projeto</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Aprendizados">Aprendizados</a>&nbsp;&nbsp;&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#avaliacao">Avaliação da Driven do meu Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;
</p>
<br><br>

<div align="center">
	
![image](https://user-images.githubusercontent.com/105571583/221978407-c1e0bc82-5547-4031-b5d6-893a3aa27397.png)
	
</div>

<h1 id="Projeto"> 💻 Projeto</h1>

<h3>- Requisitos passados </h3>
<details>
<summary>    
Geral
</summary>

- [ ]  Manipule o HTML usando somente React.
- [ ]  Você deve criar o projeto com o `create-react-app` padrão, SEM usar nenhum *template*, e delete os arquivos que não serão utilizados.
- [ ]  O template gerará os arquivos base, incluindo o arquivo `package.json` e `package-lock.json`. Esses arquivos devem estar **sempre** na raiz do repositório no GitHub. Se tiver dentro de uma pasta do repositório, a avaliação vai falhar. Além do bot não aceitar, não é uma boa prática.
- ✅ **Certo** ⇒ `projeto8-jogoforca` > `package.json`
- ❌ **Errado** ⇒ `projeto8-jogoforca` > outra pasta > `package.json`
- [ ]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub.
- [ ]  A cada requisito implementado faça um *commit* com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários *commits*, não há problema. Mas evite colocar mais de um requisito no mesmo *commit.*
- [ ]  Muito cuidado para não committar a `node_modules`. Se ela estiver committada, a avaliação também falhará. Não é boa prática comittar essa pasta no git.
- [ ]  Não é permitido o uso de `useEffect`!
  
 </details>
 
<details>
Componentização
</summary>

- [ ]  O seu jogo deverá ter 3 componentes:
    - [ ]  `App` (chamará os demais componentes)
    - [ ]  `Jogo` (imagem da forca, botão de iniciar, palavra do jogo)
    - [ ]  `Letras` (conjunto de botões com as letras)
 
 </details>
 
 <details>
<summary>    
Pré-jogo
</summary>

- [ ]  Crie um arquivo chamado `palavras.js` e coloque ele dentro da pasta `src` (o nome e o local precisam ser esses ou a avaliação falhará!).
- [ ]  Dentro do arquivo, insira um array de palavras em que cada elemento será uma palavra.
- [ ]  Os botões de letras devem ser mapeados através de um array do alfabeto em que cada elemento será uma letra.
- [ ]  Antes de o jogo iniciar, os botões de letras devem estar desabilitados.
    - [ ] Os botões desabilitados **devem** possuir o atributo `disabled` no HTML.
</details>

<details>
<summary>
Ao apertar “Escolher Palavra”
</summary

- [ ]  Letras passam a ficar habilitadas.
- [ ]  A contagem de erros nesse momento é 0, a imagem da forca vazia é mostrada.
- [ ]  Você deve sortear uma das palavras do array que está no arquivo `palavras.js` para o usuário tentar adivinhar.
- [ ]  Aparece a palavra a ser adivinhada na tela, com um *underline* ( `_` ) para cada letra que a palavra possui
 
 </details>
 
 <details>
 <summary>
Ao pressionar uma letra
 </summary>
 
- [ ]  O botão de uma letra já clicada deve ficar desabilitado.
- [ ]  Se a palavra escolhida no jogo tiver a letra que o usuário apertou:
    - [ ]  O *underline* da posição correspondente à letra deve ser substituído pela letra em si.
    - [ ]  As palavras disponibilizadas não possuem caracteres especiais, então não precisa se preocupar com isso!
- [ ]  Se a palavra escolhida no jogo NÃO tiver a letra que o usuário apertou:
    - [ ]  Sua contagem de erros deve aumentar.
    - [ ]  A imagem na forca deve mudar (forca0 > forca1 > forca2… e assim sucessivamente).
 </details>  

  
 <details>
 <summary>
Fim de jogo
 </summary>
 
- [ ]  Botões de letras devem ser desabilitados.
- [ ]  Caso o usuário ganhe:
    - [ ]  Quando o usuário ganha, a palavra completa fica em **verde**.
- [ ]  Caso o usuário perca:
    - [ ]  A imagem final que deve aparecer é a do boneco enforcado (forca6).
    - [ ]  A palavra deve ser revelada, mas em **vermelho**.
- [ ]  Para continuar a jogar, o usuário deve apertar o botão “Escolher Palavra” e o jogo deve ser reiniciado.
   
 </details>  
  
  
<details>
<summary>    
  
### Bônus (opcional)
  
</summary>

<details>
<summary>    
Reiniciar o jogo a qualquer momento
</summary>

- [ ]  A qualquer momento, o usuário pode reiniciar o jogo pressionando o botão “escolher palavra”.
- [ ]  Uma nova palavra é sorteada.
- [ ] O jogo deve voltar ao estado inicial (0 erros, imagem inicial da forca, palavra apenas com risquinhos, todos os botões de letras habilitados).

 </details>

<details>
<summary>    
Input de chute
</summary>

- [ ]  Crie um novo componente no seu projeto chamado `Chute`. Esse componente deverá ter um input e um botão onde o usuário poderá chutar a palavra inteira caso ele deseje
- [ ]  Ao fazer isso, se acertar a palavra, ele ganha imediatamente.
    - [ ]  A palavra correta aparece completa e na cor verde
- [ ]  Mas, se errar, ele perde imediatamente, independente da contagem anterior de erros. A imagem que deve aparecer nesse momento é a do bonequinho enforcado (forca6).
- [ ]  O input deve ser desabilitado em dois casos: antes de iniciar o jogo e depois de finalizar (ganhar ou perder)

</details>
  
<details>
<summary>    
Considerar caracteres especiais
</summary>

- [ ]  Quando o usuário pressionar uma letra sem acento (ex: a) e, na palavra, houver a mesma letra mas com acento (ex: à, á, â, ã), ela deve ser considerada como certo.
- [ ]  Além dos acentos, considere também que c e ç são equivalentes.

</details>
 
 <details>
<summary>    
Estilização do projeto utilizando styled-components
</summary>

- [ ]  A biblioteca `styled-components` é um jeito muito popular hoje em dia de fazer o CSS em projetos React. Iremos falar mais sobre ela em aulas futuras, mas a proposta é que você já tente ir fazendo a estilização desse projeto usando a ferramenta para ir se familiarizando!
    1. Para instalar em seu projeto, você precisa abrir um terminal dentro da pasta do projeto (aonde fica o arquivo `package.json`) e dar o comando: `npm install styled-components`
    2. Para aprender a usar, um bom lugar para começar é a documentação da ferramenta:

</details>
  
</details>
  
 
<h1 id="Tecnologias">🚀 Tecnologias</h1>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React 
- Styled Components


<h1 id="Aprendizados">🧠 Aprendizados</h1>

- Primeiro projeto utilizando React
- Controle de estados da aplicação
- Componentização
- Comunicação entre componentes

 <h1 id="avaliacao">📚 Avaliação da Driven do meu Projeto</h1>


<div align="center">
 
 <details>
<summary>    
Acima das expecattivas (clique para ver a foto)
</summary>	  
	 
	 
![image](https://user-images.githubusercontent.com/105571583/222563897-e848df67-a086-418d-aa74-ff6829941436.png)

  
</div>
</details>
  
<details>
<summary>    
  
  
# Como executar o projeto
  
  
</summary>
  # Getting Started with Create React App

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  ## Available Scripts

  In the project directory, you can run:

  ### `npm start`

  Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  The page will reload when you make changes.\
  You may also see any lint errors in the console.

  ### `npm test`

  Launches the test runner in the interactive watch mode.\
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  ### `npm run build`

  Builds the app for production to the `build` folder.\
  It correctly bundles React in production mode and optimizes the build for the best performance.

  The build is minified and the filenames include the hashes.\
  Your app is ready to be deployed!

  See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  ### `npm run eject`

  **Note: this is a one-way operation. Once you `eject`, you can't go back!**

  If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

  You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

  ## Learn More

  You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  To learn React, check out the [React documentation](https://reactjs.org/).

  ### Code Splitting

  This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

  ### Analyzing the Bundle Size

  This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

  ### Making a Progressive Web App

  This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

  ### Advanced Configuration

  This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

  ### Deployment

  This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

  ### `npm run build` fails to minify

  This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
</details>
