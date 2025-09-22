import dotenv from "dotenv";
dotenv.config();
import { createServer } from "./server";
import config from "./infraestructure/config/config";
import { InitBD } from "./infraestructure/config/database";

const startServer = async () => {
  try {
    const server = createServer();
    // await InitBD();
    server.listen(3001, "0.0.0.0", () => {
      console.log("Servidor corriendo en http://192.168.220.119:3001");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
