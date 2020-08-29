import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const routes = Router();

const appointmentRepository = new AppointmentsRepository();
const createAppointment = new CreateAppointmentService(appointmentRepository);

routes.get('/', (request, response) => {
  const appointments = appointmentRepository.getAll();

  return response.json(appointments);
});

routes.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const newAppointment = createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return response.json(newAppointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default routes;
