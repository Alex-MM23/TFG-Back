import { Category } from './category';
import { Product } from './product';
import { User } from './user';
import { Profile } from './profile';
import { UserProfile } from './userProfile';
import { Order } from './order';
import { OrderLine } from './orderLine';

Category.hasMany(Product, {
    foreignKey: 'categoryId',
    sourceKey: 'id'
});

Product.belongsTo(Category, {
    foreignKey: 'categoryId',
    targetKey: 'id'
});

// Un Usuario puede tener muchos Perfiles
User.belongsToMany(Profile, { through: UserProfile, foreignKey: 'userId' });

// Un Perfil puede pertenecer a muchos Usuarios
Profile.belongsToMany(User, { through: UserProfile, foreignKey: 'profileId' });

// Un Usuario puede tener muchas Órdenes
User.hasMany(Order, {
    foreignKey: 'userId',
    sourceKey: 'id'
});

// Una Orden pertenece a un Usuario
Order.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'id'
});

// Una Orden puede tener muchas Líneas de Orden
Order.hasMany(OrderLine, {
    foreignKey: 'orderId',
    sourceKey: 'id'
});

// Una Línea de Orden pertenece a una Orden
OrderLine.belongsTo(Order, {
    foreignKey: 'orderId',
    targetKey: 'id'
});

// Una Línea de Orden se refiere a un Producto
OrderLine.belongsTo(Product, {
    foreignKey: 'productId',
    targetKey: 'id'
});

// Un Producto puede estar en muchas Líneas de Orden
Product.hasMany(OrderLine, {
    foreignKey: 'productId',
    sourceKey: 'id'
});