import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Profile = sequelize.define ('profile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    }

}, )