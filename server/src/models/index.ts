import Profile from './Profile';
import MacroBudget from './MacroBudget';
import Meal from './Meal';
import Goals  from './Goals';
import Favorites from './Favorites';

// Set up associations between models
Profile.hasMany(MacroBudget, {
    foreignKey: 'profile',
    as: 'macroBudgets'
});

Profile.hasMany(Meal, {
    foreignKey: 'profile',
    as: 'meals'
});

Profile.hasMany(Goals, {
    foreignKey: 'profile',
    as: 'goals'
});

Profile.hasMany(Favorites, {
    foreignKey: 'profile',
    as: 'favorites'
});

Meal.belongsTo(Profile, {
    foreignKey: 'profile'
});

MacroBudget.belongsTo(Profile, {
    foreignKey: 'profile'
});

Goals.belongsTo(Profile, {
    foreignKey: 'profile'
});

Favorites.belongsTo(Profile, {
    foreignKey: 'profile'
});

export {
    Profile,
    MacroBudget,
    Meal,
    Goals,
    Favorites
};