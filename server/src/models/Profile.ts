import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Profile extends Model {
}

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Profile',
        tableName: 'profile',
        timestamps: false,
    }
);

export default Profile;

