import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import router from "./modules/routes";
import { errorHandler } from "./infraestructure/helpers/handleError";
import path from "path";

export const createServer = () => {
  const app = express();

  app.disable("x-powered-by").use(compression());
  app
    .use(express.urlencoded({ extended: true, limit: "5mb" }))
    .use(express.json({ limit: "5mb" }))

    .use(cors())
    .use(cookieParser())
    .use("/v1/api", router);

  app.get("/", (req: Request, res: Response) => {
    res.json({
      status: "success",
      message: "Authentication Service is running",
      timestamp: new Date().toISOString(),
    });
  });

  const PUBLIC_PATH = path.join(__dirname, "../public");
  console.log("Public path:", PUBLIC_PATH);
  app.use("/public", express.static(PUBLIC_PATH));

  app.use(errorHandler);

  return app;
};
