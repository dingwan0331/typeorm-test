import dotenv from "dotenv"
import { DataSource } from "typeorm"
import Sequelize from 'sequelize'

dotenv.config();

const databse  = process.env.MYSQL_DATABASE
const username = process.env.MYSQL_USERNAME
const password = process.env.MYSQL_PASSWORD
const host     = process.env.MYSQL_HOST
const dialect  = process.env.MYSQL_DIALECT

const sequelize = new Sequelize(
  databse, username, password, {
    host: host,
    dialect: dialect
  }
)

export default sequelize
