import { Sequelize } from "sequelize";


const sequelize = new Sequelize('tfg', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;