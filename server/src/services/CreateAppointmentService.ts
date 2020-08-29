import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface RequestDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentRepository;
  }

  execute({ date, provider }: RequestDTO): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('Já existe um agendamento nesse horário');
    }

    const newAppointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return newAppointment;
  }
}

export default CreateAppointmentService;
