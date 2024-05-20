import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    cantidad: {
        type: DataTypes.INTEGER
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categories', // El nombre de la tabla en plural
            key: 'id'
        }
    }
}, ) 