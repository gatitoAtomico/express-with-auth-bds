import express, {
  Express,
  Request,
  Response,
  NextFunction,
  RequestHandler,
  ErrorRequestHandler,
} from "express";

interface AdvancedServerSettings {
  port: number;
}

class AdvnacedServer {
  private _app: Express;
  private _settings: AdvancedServerSettings;
  //   private _route404: RequestHandler;
  //   private _routeError: ErrorRequestHandler;

  constructor(settings: AdvancedServerSettings) {
    this._app = express();
    this._settings = settings;
    this._app.use(express.json({ limit: "6mb" }));
  }

  use = (middleware: RequestHandler) => {
    this._app.use(middleware);
    return this;
  };

  getApp = () => {
    return this._app;
  };
}

export default AdvnacedServer;
