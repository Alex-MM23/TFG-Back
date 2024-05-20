import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { Order } from './order';
import { Product } from './product';

export const OrderLine = sequelize.define('order_line', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    orderId: {
        type: DataTypes.INTEGER,
        references: {
            model: Order,
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    }
});
