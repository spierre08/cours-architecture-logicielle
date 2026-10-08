import mongoose from 'mongoose';
import { EnvConfig } from './env.config.js';

export const connectDB = async ()=>{
    try{
        await mongoose.connect(EnvConfig.DB_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}