import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';
import { Order } from './order';
import { Product } from './product';

export class OrderLine extends Model {
  public id!: number;
  public quantity!: number;
  public price!: number;
  public orderId!: number;
  public productId!: number;
}

OrderLine.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
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
    allowNull: false,
    references: {
      model: Order,
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id'
    }
  }
}, {
  sequelize,
  tableName: 'orderLines',
  timestamps: true
});
