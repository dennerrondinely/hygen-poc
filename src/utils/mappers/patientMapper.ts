import { AppointmentResponse, Patient } from 'types/appointments';

export const patientMapper = (
  appointments: AppointmentResponse[]
): Patient[] => {
  return appointments.map(({ patient: { id, first_name, last_name } }) => ({
    id,
    value: id,
    name: `${first_name} ${last_name}`
  }));
};
