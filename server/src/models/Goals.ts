import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import Profile from './Profile.js';


class Goals extends Model {
    public id!: number;
    public profile!: number;
    public name!: string;
    public created!: Date;
    public finish_line?: Date;
}

Goals.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        profile: {
            type: DataTypes.INTEGER,
            references: {
                model: Profile,
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        created: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        finish_line: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'goals',
        tableName: 'goals',
    }
)

export default Goals;