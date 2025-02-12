import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import Profile from './Profile.js';

class Meal extends Model {}

Meal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        image_url: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        weight_est: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        calories: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        carbohydrates: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        fats: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        proteins: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        time_eaten: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        favorite: {
            type: DataTypes.BOOLEAN,  
            allowNull: true,
        },
        profileId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Profile, 
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
    },
    {
        sequelize,
        modelName: 'Meal',
        tableName: 'meal',
        timestamps: false,
    }
);

export default Meal;

