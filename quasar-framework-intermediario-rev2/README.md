# Quasar App

```
npm install -g quasar-cli vue-cli

quasar --version (ou -v)
vue --version
composer --version
```

-------------
SERVER
-------------
```
https://github.com/schoolofnetcom/quasar-intermediario-server
(usar o zip que está em src_servidor)
-- ativar extensões no config do PHP
php_mbstring
php_intl

-- ir diretório do servidor
cd diretorio-servidor

-- rodar
php composer.phar install
-- ou
composer install

-- criar o banco de dados e configurar o arquivo config/app.php
-- executar as migrations
bin/cake migrations migrate

-- ativar servidor
bin/cake server

-- testar
http://localhost:8765/products
http://localhost:8765/api/products.json
```

-- corrigir arquivo "config/bootstrap.php" (corrigido no arquivo zipado em src_servidor)
```
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
-- estava com espaço antes dos ":"
```
-------------



-------------
CLIENT
-------------
```
-- diretório do cliente
cd quasar-framework-intermediario-rev2

-- iniciar projeto
quasar init .
(*) Vuex
(*) Axios

-- para executar
quasar dev
```
