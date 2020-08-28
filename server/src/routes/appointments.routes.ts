import { Router } from 'express';
import { uuid } from 'uuidv4';

const routes = Router();

const appointments = [];

routes.post('/', (request, response) => {
  const { provider, date } = request.body;

  const newAppointment = {
    provider,
    date,
    id: uuid(),
  };

  appointments.push(newAppointment);

  return response.json(newAppointment);
});

export default routes;
