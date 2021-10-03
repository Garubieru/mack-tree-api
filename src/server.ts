import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { TreeService } from '@services/TreeService';

import { errorHandler } from '@error/handler';
import router from './routes';

class Server {
  private app: Express;

  constructor(private port: number) {
    this.initDatabase();

    this.app = express();
    this.initApp();
    this.middlewares();
    this.healthCheck();
    this.routes();
    this.error();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
  }

  private initApp() {
    const { app, port } = this;
    app.listen(port, () => {
      console.log(`[SERVER] 🔥 App listening at http://localhost:${port}`);
    });
  }

  private healthCheck() {
    this.app.get('/healthCheck', (req, res) => {
      return res.json({
        application_name: 'structure_project_api',
        status: true,
      });
    });
  }

  private initDatabase() {
    TreeService.init('bmw', 'price');
  }

  private error() {
    this.app.use(errorHandler);
  }

  private routes() {
    this.app.use(router);
  }
}

export const server = new Server(3333);
