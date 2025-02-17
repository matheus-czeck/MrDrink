import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/dbMrdrink"

export class confimedEvent extends Model {
}

confimedEvent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
       nameCouple: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        dateEvent:{
            type:DataTypes.DATE,
            allowNull: false,
        },
        amountGuests: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        place: {
        type: DataTypes.STRING,
        allowNull: false
        },
        value: {
            type:DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        menu: {
            type: DataTypes.STRING,
            allowNull: false
        },
        selectedTeams: {
            type: DataTypes.JSON,
            allowNull: false
        }
    }, 
    {
        Sequelize,
        modelName: "confirmedEvent",
        tableName: "confirmed_events",
        timestamps: true,
    }

)