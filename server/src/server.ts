import 'reflect-metadata';
import './database';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import cors from 'cors';

import AppError from './error/AppError';
import routes from './routes';
import uploadConfig from './config/upload';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError)
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333);
