import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';
import Profile from './Profile';

class Meal extends Model {
    public id!: number;
    public image_url?: string;
    public name!: string;
    public weight_est?: number;
    public calories!: number;
    public carbohydrates?: number;
    public fats?: number;
    public proteins?: number;
    public fiber?: number;
    public time_eaten!: Date;
    public favorite?: number;
    public profile!: number;
}    


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
            allowNull: true,
        },
        weight_est: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        calories: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
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
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        favorite: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        profile: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Profile,
                key: 'id',
            },
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