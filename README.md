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