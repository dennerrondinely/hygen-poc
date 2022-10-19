import { apiUrl } from 'env';
import { AppointmentRequest, AppointmentResponse } from 'types/appointments';
import { IError } from 'types/error';
import { ILoginRequest, ILoginResponse } from 'types/login';
import { getToken } from 'utils/security';
import { http } from './http';

const defaultPost = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const headers = {
  'Content-Type': 'application/json',
  Authorization: getToken()
};

const api = {
  login: (login: ILoginRequest) =>
    http<ILoginResponse & IError>(`${apiUrl}/login`, {
      ...defaultPost,
      body: JSON.stringify(login)
    }),
  getAppointments: () =>
    http<AppointmentResponse[] & IError>(
      `${apiUrl}/consultations?_expand=patient`,
      {
        headers
      }
    ),
  postAppointment: (appointment: AppointmentRequest) =>
    http<AppointmentResponse & IError>(`${apiUrl}/consultations`, {
      ...defaultPost,
      headers,
      body: JSON.stringify(appointment)
    })
};

export default api;
