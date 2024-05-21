import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db/connection';
import { Order } from './order';
import { Product } from './product';

interface OrderLineAttributes {
  id: number;
  quantity: number;
  price: number;
  orderId: number;
  productId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface OrderLineCreationAttributes extends Optional<OrderLineAttributes, 'id'> {}

class OrderLine extends Model<OrderLineAttributes, OrderLineCreationAttributes> implements OrderLineAttributes {
  public id!: number;
  public quantity!: number;
  public price!: number;
  public orderId!: number;
  public productId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

OrderLine.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  orderId: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'id',
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  }
}, {
  sequelize,
  modelName: 'OrderLine',
  timestamps: true,
});

Order.hasMany(OrderLine, { foreignKey: 'orderId' });
OrderLine.belongsTo(Order, { foreignKey: 'orderId' });

export { OrderLine, OrderLineAttributes, OrderLineCreationAttributes };
