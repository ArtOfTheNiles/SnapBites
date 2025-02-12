import Profile from './Profile.js';
import MacroBudget from './MacroBudget.js';
import Meal from './Meal.js';
import Goals from './Goals.js';
import Favorites from './Favorites.js';


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