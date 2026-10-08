import dotenv from 'dotenv';

dotenv.config();

export class EnvConfig {
    static DB_URL = process.env.DB_URI;
    static PORT = process.env.PORT;
    static prefix = "/api"
}