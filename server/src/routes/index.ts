import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Ahhh .. Hellow??' }),
);

export default routes;
