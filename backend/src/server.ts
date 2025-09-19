import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import router from "./modules/routes";
import { errorHandler } from "./infraestructure/helpers/handleError";

export const createServer = () => {
  const app = express();

  app.disable("x-powered-by").use(compression());
  app
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors())
    .use(cookieParser())
    .use("/v1/api/", router);

  app.get("/", (req: Request, res: Response) => {
    res.json({
      status: "success",
      message: "Authentication Service is running",
      timestamp: new Date().toISOString(),
    });
  });
  app.use(errorHandler);

  return app;
};
