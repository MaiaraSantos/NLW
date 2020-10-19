import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

//MVC
    //M Model - representatividade de entidades (users...)
    //V Views - como as coisas são visualizadas
    //C Controllers - onde fica as lógicas
    routes.get('/orphanages', OrphanagesController.index);
    routes.get('/orphanages/:id', OrphanagesController.show);
    routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;