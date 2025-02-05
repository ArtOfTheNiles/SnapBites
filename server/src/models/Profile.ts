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