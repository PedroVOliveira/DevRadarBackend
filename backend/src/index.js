const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://pedrovoliveira:sacatrafe159842@cluster0-bqusv.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros:
// Query Params: request.query (Filtros, Ordenações, Paginação...) 'GET'
// Route Params: request.params (Identificar um recurso na alteração ou remoção) 'PUT, DELETE'
// Body: request.body (Dados para criação ou alteração de registro) 'POST, PUT'

// Mongo DB (Banco Não-Relacional)

app.listen(3333);