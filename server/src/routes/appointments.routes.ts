import { Router } from 'express';
import { parseISO, startOfHour } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmenstRepository';

const routes = Router();
const AppointmentRepository = new AppointmentsRepository();

routes.get('/', (request, response) => {
  const appointments = AppointmentRepository.getAll();

  return response.json(appointments);
});

routes.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = AppointmentRepository.findByDate(
    parsedDate,
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ error: 'Já existe um agendamento nesse horário' });
  }

  const newAppointment = AppointmentRepository.create({
    provider,
    date: parsedDate,
  });

  return response.json(newAppointment);
});

export default routes;
