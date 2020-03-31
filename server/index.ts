import "reflect-metadata"; // gives us decorators for the di container
import { Container, AsyncContainerModule } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { bindings } from "./inversify.config";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as typeorm from "typeorm";
import * as express from "express";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import Contact from "./Contact";
// import createRouter from 'express-promise-router'

const port = 3000;

const runServerApp = async () => {
  await typeorm.createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "bandit",
    database: "jn",
    synchronize: true,
    namingStrategy: new SnakeNamingStrategy(),
    entities: [Contact]
  });
  const container = new Container();
  container.load(bindings);
  // const appExpress = express();
  // const router = require('express-promise-router')();
  // appExpress.use('/', router);

  const server = new InversifyExpressServer(container);
  server.setConfig(app => {
    app.use(express.static('dist'));
    app.use(cors());
    // Add the authentication middleware.
    app.options("*", cors());
    app.use(bodyParser.json());
  });
  server.setErrorConfig((app: any) => {
    // Add the authentication error handler.
    type JoiError = Error & { status: number; errors: any[] };
    app.use(
      (
        err: JoiError,
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
      ) => {
        if (!err.status || err.status != 400) next();
        console.error(err);
        response.status(err.status).send(err.errors);
      }
    );
    app.use(
      (
        err: Error,
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
      ) => {
        console.error(err.stack);
        response.status(500).send("Our developers are on the case!");
      }
    );
  });
  server.build().listen(port, () => console.log("Just Neighbors website up and running BOI!"));
};

runServerApp();
