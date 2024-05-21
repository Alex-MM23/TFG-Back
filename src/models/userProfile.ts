import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db/connection';
import { User } from './user';
import { Profile } from './profile';

interface UserProfileAttributes {
    id: number;
    userId: number;
    profileId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface UserProfileCreationAttributes extends Optional<UserProfileAttributes, 'id'> {}

class UserProfile extends Model<UserProfileAttributes, UserProfileCreationAttributes>
  implements UserProfileAttributes {
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
    }
}, {
    sequelize,
    modelName: 'user_profile',
    timestamps: true
});

User.belongsToMany(Profile, { through: UserProfile, foreignKey: 'userId' });
Profile.belongsToMany(User, { through: UserProfile, foreignKey: 'profileId' });

export { UserProfile, UserProfileAttributes };
