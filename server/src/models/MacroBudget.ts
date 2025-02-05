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

