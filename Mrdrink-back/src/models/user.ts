import {Model, DataTypes, Sequelize} from 'sequelize';
import sequelize from '../config/dbMrdrink'

export class User extends Model {
    public id!: number;
    public userName!: string;
    public password!: string;
}

User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,

        },
        createdAt: {
            type: DataTypes.DATE,

        }

    },

    {
        sequelize,
        modelName: 'User',
        tableName: 'adminuser'
        
    }
);
export default User;


