import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Category = sequelize.define('category' ,{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    dec: {
        type: DataTypes.STRING
    }

}, )