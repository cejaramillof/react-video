## video-react

- `mkdir video-react`
- `git init`
- `npm init -y`
- `mkdir src` (source code)
- `mkdir public` (builded to production)
- `mkdir src/components`
- index.js in src and index.html in public
- `npm install react react-dom`
- `npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader`
  -- babel core (tools to transpile)
  -- babel loader (to work with webpack)
  -- babel preset (to know and transpile da code)
  --- babel preset-env (to work with ecma5 and ecma6)
  --- babel preset-react (to work with jsx)
- create .babelrc
- remove node_modules from commits with `git rm -r --cached node_modules`
- `npm i -D webpack webpack-cli html-webpack-plugin html-loader`
- create webpack.config.js and script in package.json
- `npm i -D webpack-dev-server` and create script in package.json
- `npm i -D mini-css-extract-plugin css-loader node-sass sass-loader` and configure in webpack.config.js
- `npm i -D eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y` and create .eslintrc
- `npm i -D file-loader` and configure in webpack.config.js
- `sudo npm i -d json-server -g` and create initialState.json. Require sudo permissions



#### React Router - Redux
- `npm install react-router-dom --save`
- `npm install react-redux --save` create actions and reducers folders

- `npm i -s md5`
- `npm i -s classnames`


## Tipos de enrutadores
React Router es una librería más que añadimos a nuestro stack, lo más básico que debemos aprender de React Router son sus distintos enrutadores:

- **BrowserRouter:** Es el enrutador que quizá más tiempo utilices como frontend, usa el HTML5 history API (history.pushState(), history.replaceState()) lo que quiere decir que es el enrutador que nos da la posibilidad de cambiar las rutas en el navegador sin recargar.
- **HashRouter:** Funciona similar al BrowserRouter, pero usa un hash (#) al inicio de cada url. Se usaba cuando la API de history no estaba completa
- **MemoryRouter:** Mantiene el historial de búsqueda en memoria y te sirve para realizar pruebas sin navegador. En este curso no haremos pruebas unitarias por lo tanto no veremos este enrutador.
- **StaticRouter:** Nunca cambia de dirección, es perfecto para realizar Server Side Render.
- **NativeRouter:** Es el router que nos servirá si queremos usar React Native, NO lo veremos en este curso. Es recomendable usar en su lugar React Navigation. (Es una alternativa a react-navigation, libreria cual también sirve para web, pero esta ultima, es más común en moviles.)

## BrowserRouter
Dentro de nuestro proyecto debemos envolver nuestros componentes principales dentro del BrowserRouter.

Este componente enrutador cuenta con diferentes propiedades para ser configurado:

- **basename:** configura la url base de todas las rutas.
- **getUserConfirmation:** recibe una función con la cual puedes validar si el usuario quiere dejar la pagina en la que se encuentra.
- **forceRefresh:** es un booleano, como su nombre lo indica en caso de ser verdadero se forzará a que el navegador recargue cuando se navegue.
- **keyLength:** un key es el id único que recibe cada movimiento en la navegación, keyLength se encarga de configurar la longitud de cada key y por defecto tiene una longitud de 6 caracteres.
- **children:** es lo que estará dentro de nuestro BrowserRouter.
Todo esto lo encontraras en su documentación original de React Router.

### Switch
Switch se encarga de solo renderizar el primer componente que haga match con la ruta que estés designando.

### Route
Para poder cambiar la interfaz acorde a la url usaremos Route, algunas propiedades son:

- **component:** que componente quieres renderizar.
- **path:** indica la ruta en la cual va a renderizar el componente que le pases.
- **render:** es una alternativa a componente, puedes hacer un renderizado en forma de función como en los componentes de React. Como es una función puedes hacer validaciones en ella.
- **children:** son los hijos o componentes que tenga anidado.
- **exact:** recibe un booleano, si le indicas que es verdadero solo hará match si la ruta coincide exactamente con la ubicación, no hará caso a ninguna sub-ruta.
- - path: `/one`, location.pathname: `/one/two` exact: `true`, matches?: **no**
- - path: `/one`, location.pathname: `/one/two` exact: `false`, matches?: **yes**
- **strict:** recibe un booleano, si le indicas que es verdadero solo hará match si la ruta a la que te diriges es idéntica a la ruta del Route.
- - path: `/one/`, location.pathname: `/one`, matches?: **no**
- - path: `/one/`, location.pathname: `/one/`, matches?: **yes**
- - path: `/one/`, location.pathname: `/one/two`, matches?: **yes**
- - - porque es estricto, pero no exacto. (podemos usar ambos)
- **sensitive:** recibe un booleano, si le indicas que es verdadero activara el case sensitive para la ruta.
- - path: `/one/`, location.pathname: `/one`, sensitive: `true`, matches?: **yes**
- - path: `/One/`, location.pathname: `/one/`, sensitive: `true`, matches?: **no**
- - path: `/one/`, location.pathname: `/one/two`, sensitive: `false`, matches?: **yes**

### Redirect
El componente Redirect nos ayudara para realizar un redireccionamiento en el navegador, sus principales parámetros son `from` y `to` que sirven para indicar de que ruta van a redirigir hacía que ruta van a realizar el redireccionamiento.

## Dentro de los Componentes:

### Link
BrowserRouter no hará mucho si no esta acompañado de enlaces y rutas, los enlaces que se llaman Link y NavLink. Estos funcionan de manera similar a las anclas (`<a>`) de HTML.

Link cuenta con las siguientes propiedades:

- **to:** similar al href de , puede recibir un string indicando la ruta a donde va a mandar o bien recibir un objeto con: pathname, un string que representa la ruta a donde se dirige; search, un string que representa el query de una url; hash, un hash para poner en la url; y por último state, un objeto que representa un estado en la navegación.
- - también puede recibir un objeto ej:
```javascript
<Link
  to={{
    pathname: '/videos',
    search: `?id=${props.id}`, // queryparams, o parametros de busqueda, también podría concatenarlo en el pathname
    state: { // customparams, según la condición en la que se encuentre actualmente, sin redux. o sea pasar parametros por debajo.
      modal: true,
      id: props.id,
    }
  }}
/>
```

- **replace:** similar a to, pero en lugar de añadir una nueva ruta al stack del historial de navegación, reemplaza la ultima ruta por la nueva ruta.
- **innerRef:** es una forma de obtener el elemento HTML del componente, funciona igual que el ref de React.
- (others)

### NavLink
NavLink es una versión especial de Link, cuenta con varias características más poderosas como, por ejemplo:

- **activeClassName:** cuando se navegue a la ruta que dirija el NavLink, esta propiedad añadirá al className del componente el string que le pasemos.
- **activeStyle:** similar a activeClassName, pero con estilos en línea.
- **isActive:** es una función que se mandara cuando naveguemos a la ruta del NavLink.
- **exact:** recibe un booleano, sirve para marcar si dirige a una ruta exacta.
- **strict:** recibe un booleano, sirve para marcar si dirige a una ruta estricta.
- **location:** para hacer la comparación de isActive con alguna ruta.

### Prompt
Validación antes de dejar la página en la que se encuentra el usuario. Esto sucede comúnmente en páginas que incluyan un formulario para evitar que el usuario se vaya sin enviar el formulario o dejarlo a medias.
Prompt cuyos parámetros que recibe son when que recibe un booleano para indicar si muestra el mensaje del navegador y message que recibe un string que será el mensaje que reciba el usuario.
```javascript
import { prompt } from 'react-router';

<Prompt
  // when debería ser una condicional dinamica, para mostrar o no mostrar el Prompt
  when={true} // boolean - por defecto, si no lo especificamos igual es true
  // when // es igual a when={true} en react
  message="¿Estás seguro de querer dejar la página?"
/>
```

## Manipulando el historial
Dentro de los componentes que renderizamos a través de Route encontramos en sus props un objeto llamado history, este objeto cuenta con multiples propiedades y métodos como:

- **go:** es un método que te permite ir a cierto momento en el historial de navegación, recibe como parámetro un número, dependiendo de la cantidad es cuanto avanzara en el historial y si es positivo o negativo será la dirección que tome.
- **goBack:** es un método que te permite navegar una pagina hacia atrás, funciona de forma similar a que si llamáramos a go(-1).
- **goForward:** es un método que te permite navegar una pagina hacia adelante, funciona de forma similar que si llamáramos a go(1).
- **push:** te permite añadir una nueva ruta al stack de navegación.
- **replace:** Reemplaza la ruta actual en el historial por la nueva, ej: Entro al home y voy a contacto tendría: ['home', 'contacto'], en contacto le doy replace a video, entonces tendría: ['home', 'video']

## Obteniendo el historial desde cualquier componente
El history es una propiedad que le llega a componentes que son renderizados por el componente padre Route.
Cuando un componente no hace parte de ninguna ruta, existe un High Order Component llamado withRouter que te permite añadir estas propiedades.