require('dotenv').config()

module.exports = {
  HOST: process.env.HOST,
  PORT: process.env.PORTMYSQL,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 30000, // 30 segundos
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
