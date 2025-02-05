import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';
import Profile from './Profile';


class MacroBudget extends Model {
    public id!: number;
    public profile!: number;
    public calories!: number;
    public carbohydrates!: number;
    public fat!: number;
    public protein!: number;
}

MacroBudget.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        profile: {
            type: DataTypes.INTEGER,
            references: {
                model: Profile,
                key: 'id',
            }
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
        }
    },
    {
        sequelize,
        modelName: 'MacroBudget',
        tableName: 'macro_budget',
        timestamps: false,
    }
);

export default MacroBudget;