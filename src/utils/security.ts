import { ILoginResponse } from 'types/login';

export const login = (login: ILoginResponse): void => {
  localStorage.setItem('token', login.token);
  localStorage.setItem('username', login.name);

  window.location.href = '/';
};

export const logout = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');

  window.location.href = '/login';
};

export const getToken = (): string => localStorage.getItem('token') ?? '';
export const getUsername = (): string => localStorage.getItem('username') ?? '';
