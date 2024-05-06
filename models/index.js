const User = require('./User');
const Bpost = require('./Bpost');

User.hasMany(Bpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Bpost.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Bpost };