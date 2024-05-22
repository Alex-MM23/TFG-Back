import { Sequelize } from "sequelize";


const sequelize = new Sequelize('tfg', 'userTFG', 'admin123', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;