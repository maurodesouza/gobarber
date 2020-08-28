import { Router } from 'express';
import { parseISO, startOfHour, isEqual } from 'date-fns';

import Appointment from '../models/Appointments';

const routes = Router();

const appointments: Appointment[] = [];

routes.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date),
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ error: 'Já existe um agendamento nesse horário' });
  }

  const newAppointment = new Appointment(provider, parsedDate);

  appointments.push(newAppointment);

  return response.json(newAppointment);
});

export default routes;
