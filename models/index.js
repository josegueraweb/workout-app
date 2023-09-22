const User = require('./User');
const Entry = require('./Entry');
const Preferences = require('./Preferences');

User.hasMany(Entry, {
  foreignKey: 'user_id'
});

Entry.belongsTo(User, {
  foreignKey: 'user_id'
});

Preferences.belongsTo(User, {
  foreignKey: 'user_id'
});



module.exports = { User, Entry, Preferences };