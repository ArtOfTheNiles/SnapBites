import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';
import bcrypt from 'bcrypt';


class Profile extends Model {
    public id!: number;
    public username!: string;
    public password!: string;

    public async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}

Profile.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: 'profile',
    tableName: 'profiles',
    timestamps: false,
    hooks: { 
        beforeCreate: async (profile) => {
            if (profile.changed('password')) {
                profile.password = await bcrypt.hash(profile.password, 10);
                }
            }
        }
    }
);

export default Profile;