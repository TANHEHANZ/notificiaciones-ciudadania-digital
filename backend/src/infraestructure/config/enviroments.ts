export const DB_CONFIG = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER!,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME!,
  schema: process.env.SCHEMA!,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  dialect: "postgres" as const,
};

export const AUTENTICATION = {
  url: process.env.URL_BASE!,
  response_type: "code",
  client_id: process.env.CLIENT_ID,
  redirect_uri: process.env.REDIRECT_URI!,
  scope: process.env.SCOPE!,
  redirect_client: process.env.REDIRECT_CLIENT,
  secret_client: process.env.SECRET_CLIENT!,
};
export const JWT_SERVICE = process.env.JWT_SERVICE!;
