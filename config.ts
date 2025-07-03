import dotenv from 'dotenv';

dotenv.config();

interface Config {
    Mongo_URL: string;
}

const variablesDeConfiguracion: Config = {
    Mongo_URL: process.env.MONGODB_URI || '',
}

if (!variablesDeConfiguracion.Mongo_URL) {
    throw new Error('La Variable de Entorno MONGODB_URI no esta definida');
}

export default variablesDeConfiguracion;