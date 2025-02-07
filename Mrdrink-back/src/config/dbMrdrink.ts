import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();



const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: 'mysql',
    logging: false,

})

module.exports = sequelize;

export default sequelize;
