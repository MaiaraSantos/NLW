import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);

//Rota: conjunto
//Recurso: usuário

//Métodos HTTP: GET, PUT, POST, DELETE
    //GET: busca uma info
    //POST: cria uma nova informação
    //PUT: altera/edita uma informação
    //DELETE: deleta uma informação ou todas

//Params:
//Query Params: para busca, filtro, paginação... http://localhost:3333/users?search=value
//Route Params: para identificar um recurso que já existe, pelo ID (/:id)... http://localhost:3333/users/1
//Body: para capturar dados http://localhost:3333/users

/*testes insomnia
app.get('/users', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);

    return response.json({ message: "hello" });
});
*/

