import express from 'express';

import { EnvConfig } from './config/env.config.js';
import { HandleError } from './errors/HandleError.js';
import { NotFoundError } from './errors/NotFoundError.js';
import { ProductRoutes } from './routes/ProductRoutes.js';

export const createExpressApp = ()=>{
    const app = express();

    app.use(express.json());

    app.use(`${EnvConfig.prefix}/products`, ProductRoutes);

    app.use((req, res, next) => {
        next(NotFoundError("Ressource introuvable"));
    });
    app.use(HandleError);

    return app;
}