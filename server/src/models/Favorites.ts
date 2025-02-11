import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import Profile from './Profile.js';
class Favorites extends Model {
    public id!: number;
    public profile!: number;
}


Favorites.init(
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
        }
    },
    {
        sequelize,
        modelName: 'Favorites',
        tableName: 'favorites',
        timestamps: false,
    }
);

export default Favorites;