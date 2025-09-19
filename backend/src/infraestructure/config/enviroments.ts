export const DB_CONFIG = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER!,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME!,
  schema: process.env.SCHEMA!,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  dialect: "postgres" as const,
};
