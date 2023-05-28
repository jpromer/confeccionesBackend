module.exports = {
  HOST: process.env.HOST,
  PORT: process.env.PORTMYSQL,
  USER: process.env.USER_DB,
  PASSWORD: process.env.PASSWORD_DB,
  DB: process.env.DB_NAME,
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
