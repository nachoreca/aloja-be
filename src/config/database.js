const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://default:aqRF7yKNuch2@ep-curly-poetry-a4wolwuh-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;
