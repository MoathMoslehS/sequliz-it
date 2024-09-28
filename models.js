const { Sequelize, DataTypes } = require('sequelize');

// server commect
const sequelize = new Sequelize('SequlizeIt', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

// User model
const User = sequelize.define(
  'worker',// table name 
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 19],
      },
    },
    last_name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,// dont change names
    timestamps: false,
  }
);

module.exports = { User, sequelize };