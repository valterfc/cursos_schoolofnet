## Testes automatizados com Javascript
https://www.schoolofnet.com/curso-testes-automatizados-com-javascript/

```
---------------------------------------------------------------------
---- instalação
-- instalar NodeJS - nodejs.org
---------------------------------------------------------------------
-- instalar nodejs (executável)
node -v
npm -v

npm init
ou
npm init -y

npm install --save mocha

-- criar o arquivo de testes
-- o padrão é "nomearquivo.spec.js"
-- para ignorar arquivos ".js" que não são o teste

-- rodar o mocha
node_modules/.bin/mocha tests

-- configurar o arquivo package.json, adicionando o mocha
  "scripts": {
    "test": "mocha tests/*.spec.js"
  },

-- assim, fica mais fácil executar os testes; ele automaticamente busca no global ou no .bin dos módulos
npm test

mocha hooks
	- before
	- after
	- beforeEache
	- afterEache


-- fazer requisições via API	
npm install --save request

-- instalar express para API´s
npm install --save express

-- criar arquivo server.js para a API
-- dar start no servidor
-- para poder executar o teste, é necessário abrir outro terminal
node server.js

-- testar no navegador
http://localhost:9000/
http://localhost:9000/hex-to-rgb/ff0000
http://localhost:9000/rgb-to-hex/255/0/0

-- instalar o babel para converter para o navegador
npm install --save babel-cli babel-preset-env

-- criar arquivo
.babelrc

-- criar diretório
dist

-- e executar
node_modules/.bin/babel src/color-converter.js -o dist/color-converter.js

-- para facilitar, pode ser adicionado ao arquivo package.json
  "scripts": {
    "build": "babel src/color-converter.js -o dist/color-converter.js",
    "test": "mocha tests/*.spec.js"
  },

-- daí o comando fica mais simples
npm run build

-- criar arquivo
dist/index.html

-- rodar servidor
php -S localhost:8000 -t dist/
---------------------------------------------------------------------
```
