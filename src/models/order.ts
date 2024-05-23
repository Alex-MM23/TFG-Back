import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';
import { User } from './user';

export class Order extends Model {
  public id!: number;
  public orderDate!: Date;
  public totalAmount!: number;
  public userId!: number;
}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  sequelize,
  tableName: 'orders',
  timestamps: true
});
