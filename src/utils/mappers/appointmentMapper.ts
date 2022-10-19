import { Appointment, AppointmentResponse } from 'types/appointments';
import { formatAppoitmentDate } from 'utils/format-date';

export const appointmentMapper = (
  appointments: AppointmentResponse[]
): Appointment[] => {
  return appointments.map(({ date, id, patient }) => ({
    consultationId: id,
    name: `${patient.first_name} ${patient.last_name}`,
    date: formatAppoitmentDate(date)
  }));
};
