import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import Appointment from '../entities/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface RequestDTO {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  async execute({ date, provider_id }: RequestDTO): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('Já existe um agendamento nesse horário');
    }

    const newAppointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(newAppointment);

    return newAppointment;
  }
}

export default CreateAppointmentService;
