import express, { Application } from 'express';
import cors from 'cors';
import routesProduct from '../routes/product';
import routesUser from '../routes/user';
import routesCategory from '../routes/category';
import sequelize from '../db/connection';
import { Product } from './product';
import { Category } from './category';
import { User } from './user';
import { Profile } from './profile';
import { UserProfile } from './userProfile';
import { Order } from './order';
import { OrderLine } from './orderLine';
import './associations'; // Importar las asociaciones

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.midlewares();
        this.routes();
        this.dbConnect();
        this.listen();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicación corriendo en el puerto ' + this.port);
        });
    }

    routes() {
        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);
        this.app.use('/api/categories', routesCategory);
    }

    midlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await sequelize.sync({ force: true }); // Cambia a `false` en producción para no perder datos
            console.log('Database & tables created!');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;