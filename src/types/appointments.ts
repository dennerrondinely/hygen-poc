export interface ConsultationResponse {
  id: number;
  patientId: number;
  date: string;
}

export interface PatientResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface AppointmentRequest {
  patientId: number;
  date: string;
}

export interface AppointmentResponse extends ConsultationResponse {
  patient: PatientResponse;
}

export interface PatientAndConsultationResponse {
  patient: PatientResponse;
  consultation: ConsultationResponse;
}

export type Appointment = {
  consultationId: number;
  name: string;
  date: string;
};

export type Patient = {
  id: number;
  value: number;
  name: string;
};
