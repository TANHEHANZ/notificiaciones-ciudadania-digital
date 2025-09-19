import dotenv from "dotenv";
dotenv.config();
import { createServer } from "./server";
import config from "./infraestructure/config/config";
import { InitBD } from "./infraestructure/config/database";

const startServer = async () => {
  try {
    const server = createServer();
    await InitBD();
    server.listen(config.port, () => {
      console.log(` Running on port: http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
