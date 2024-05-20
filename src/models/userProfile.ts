import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db/connection';
import { User } from './user';
import { Profile } from './profile';

// Definir la interfaz de atributos de UserProfile
interface UserProfileAttributes {
    id?: number; // Hacer el ID opcional
    userId: number;
    profileId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

// Definir la interfaz de creación opcional
interface UserProfileCreationAttributes extends Optional<UserProfileAttributes, 'id'> {}

// Definir la clase UserProfile que extiende Model
export class UserProfile extends Model<UserProfileAttributes, UserProfileCreationAttributes> implements UserProfileAttributes {
    public id!: number;
    public userId!: number;
    public profileId!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

UserProfile.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    profileId: {
        type: DataTypes.INTEGER,
        references: {
            model: Profile,
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'user_profile'
});
