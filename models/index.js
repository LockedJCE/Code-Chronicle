const User = require('/User');
const Bpost = require('/Bpost');

User.hasMany(Bpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Bpost };