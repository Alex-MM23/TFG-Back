import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db/connection';

// Definir la interfaz de atributos del usuario
interface UserAttributes {
    id: number;
    username: string;
    password: string;
    name: string;
    surname: string;
    email: string;
}

// Definir la interfaz de creación opcional
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Definir la clase User que extiende Model
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public password!: string;
    public name!: string;
    public surname!: string;
    public email!: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
});
