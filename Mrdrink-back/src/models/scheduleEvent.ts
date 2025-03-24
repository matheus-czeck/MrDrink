import { DataTypes, Model } from "sequelize";
import  sequelize  from "../config/dbMrdrink"

export class scheduleEvent extends Model {
}

scheduleEvent.init(
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
        sequelize,
        modelName: "scheduleEvent",
        tableName: "schedule_event",
        timestamps: true,
    }

)