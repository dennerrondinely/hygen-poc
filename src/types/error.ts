export interface IError {
  message: string;
}

export enum MessageError {
  INCORRECT_CREDENTIALS = 'Incorrect credentials',
  INVALID_AUTH = 'Invalid auth'
}
