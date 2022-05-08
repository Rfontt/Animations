# Sobre o projeto

Esse projeto é para falar sobre animações usando a lógica javascript para construí-las.

# Animações

### TypeWritter

A animação typewritter é uma das mais usadas em sites, isso porque ela simulação uma interação de digitação com o usuário.

**Código:**

> Primeiro precisamos usar o useState, pois ele quem irá armazenar nossa phase final.

```js
const [string, setString] = useState('');
```

> Segundo precisamos de um useEffect, pois esse código irá acontecer assim que renderizar a página.
> Logo depois, criamos uma variável **let** com a frase que queremos que apareça na página com o typewritter;
> Feito isso, a transformamos em um array usando o método split;
> Depois, precisamos percorrer esse array, precisaremos de cada item, ou seja, cada letra e de seu index;
> Em seguida, esvaziamos a string que contem a nossa frase para que depois possamos incrementá-la;
> Depois de fazer isso, precisamos criar um setTimeout para que a cada 75 * index s a nossa string de frase possa ser incrementada. A lógica de multiplicar pelo index é porque a cada vez que o loop for feito o index será mudado e cada letra irá entrar depois da última.

```js
useEffect(() => {
    let phase = 'Hello, I am Rfontt';
    const array = phase.split('');
    
    array.forEach((element, index) => {
      phase = '';

      setTimeout(() => {
        phase += element

        setString(phase)
      }, 75 * index)
    });

}, []);
```

> Por fim, só precisamos mostrar na tela

```js
return (
    <div className="TypeWritter">
      <header className="TypeWritter-header">
        <h1 className="title">{string}</h1>
        <h1 className="pipe">|</h1>
      </header>
    </div>
);
```

**CSS:**

Para a pipe(|), precisamos colocar um efeito de opacitade:

> Criamos um keyframe que a cada 1s e infinitamente irá executar um efeito de opacidade.

```css
.TypeWritter-header .pipe {
    animation: 1s pipe infinite;
    padding-left: 2px;
    color: white;
}

@keyframes pipe {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 0; }
}
```

**Images:**

<img src="./assets/typeWritter.gif" />