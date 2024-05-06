const sequelize = require('../config/connection');
const { User, Bpost } = require('../models');

const userData = require('./userData.json');
const bpostData = require('./bpostData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const bpost of bpostData) {
        await Bpost.create({
            ...bpost,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();