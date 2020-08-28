import { Router } from 'express';
import { uuid } from 'uuidv4';
import { parseISO, startOfHour, isEqual } from 'date-fns';

interface Appointment {
  provider: string;
  id: string;
  date: Date;
}

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

  const newAppointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  };

  appointments.push(newAppointment);

  return response.json(newAppointment);
});

export default routes;
