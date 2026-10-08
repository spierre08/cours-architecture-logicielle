import express from 'express';
import morgan from 'morgan';

import { EnvConfig } from './config/env.config.js';
import { HandleError } from './errors/HandleError.js';
import { NotFoundError } from './errors/NotFoundError.js';
import { regionRouter } from './modules/region/region.routes.js';
import { villeRouter } from './modules/ville/ville.routes.js';

export const createExpressApp = ()=>{
    const app = express();

    app.use(express.json());
    app.use(morgan('dev'));

    app.use(`${EnvConfig.prefix}/regions`, regionRouter);
    app.use(`${EnvConfig.prefix}/villes`, villeRouter);

    app.use((req, res, next) => {
        next(NotFoundError("Ressource introuvable"));
    });
    app.use(HandleError);

    return app;
}