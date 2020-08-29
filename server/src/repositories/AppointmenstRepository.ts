import { isEqual } from 'date-fns';

import Appointment from '../models/Appointments';

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  getAll(): Appointment[] {
    return this.appointments;
  }

  create(provider: string, date: Date): Appointment {
    const newAppointment = new Appointment(provider, date);

    this.appointments.push(newAppointment);

    return newAppointment;
  }

  findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
