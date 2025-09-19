import { Sequelize } from "sequelize-typescript";
import path from "path";
import { DB_CONFIG } from "./enviroments";

const sequelize = new Sequelize({
  database: DB_CONFIG.database,
  username: DB_CONFIG.username,
  password: DB_CONFIG.password,
  host: DB_CONFIG.host,
  port: DB_CONFIG.port,
  dialect: DB_CONFIG.dialect,
  schema: DB_CONFIG.schema,
  logging: console.log,
});
sequelize.addModels([path.join(__dirname, "../database/models/**/*.model.ts")]);

export default sequelize;

export const InitBD = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: false });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
    process.exit(1);
  }
};
