module.exports = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123321a',
    database: 'look-buy-db',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  test: {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123321a',
    database: 'look-buy-db-test',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },

}