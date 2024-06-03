import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const FormFormulario = sequelize.define('formFormulario' , {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.INTEGER 
    },
    city: {
        type: DataTypes.STRING
    },
    coment: {
        type: DataTypes.STRING
    }

})