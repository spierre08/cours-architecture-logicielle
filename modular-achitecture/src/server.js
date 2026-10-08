import { createExpressApp } from './app.js';
import { connectDB } from './config/db.config.js';
import { EnvConfig } from './config/env.config.js';

const launchServer = async () => {
    const app = createExpressApp();

    try{
        await connectDB();
        app.listen(EnvConfig.PORT, () => {
            console.log(`Server is running on port ${EnvConfig.PORT}`);
        });
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
    }
}

launchServer();