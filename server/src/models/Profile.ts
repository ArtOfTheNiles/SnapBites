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

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true,
        }
    },
    {
        sequelize,
        modelName: 'Profile',                           
        tableName: 'profile',                                    
        timestamps: false,        
        hooks: {
            beforeSave: async (profile: Profile) => {
                if (profile.changed('password')) {
                    profile.password = await bcrypt.hash(profile.password, 10);
                }
            }
        }
    }
);

export default Profile;