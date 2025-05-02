/* You may need to fix this file */
import dotenv from 'dotenv';
dotenv.config({ path: ".env" });

const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME||"photos_app_db";
const DB_HOST = "127.0.0.1";
const DB_PORT = "5432";
const DB_URL = process.env.DATABASE_URL;
const DB_PASSWORD = process.env.DB_PASSWORD;
export default {
  client: "postgresql",
  connection: DB_URL || {
    host: DB_HOST || "127.0.0.1",
    port: DB_PORT || "5432",
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
  },
  migrations: {
    directory: "./server/db/migrations",
  },
  seeds: {
    directory: "./server/db/seeds",
  },
};
