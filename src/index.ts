import express, { Express } from 'express';
import { Sequelize } from 'sequelize/types';
import bodyParser from 'body-parser';

// import { db } from 'db';
import Router from './router';

class Server {
  private port: number = 3000;
  private app: Express;
  // private db: Sequelize;

  private constructor() {
    this.app = express();
    
    // this.createConnection(db);

    this.applyMiddlewares();

    new Router(this.app);

    this.run();
  };

  public static instance = () => {
    new Server();
  };

  private applyMiddlewares = () => {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  };

  // private createConnection = async (db: Sequelize) => {
  //   await db.authenticate();
  // };

  private run = () => {
    this.app.listen(this.port, () => {
      // console.clear();
      console.log('===============================================');
      console.log(`Server started at http://localhost:${this.port}`);
    });
  };
};

Server.instance();
