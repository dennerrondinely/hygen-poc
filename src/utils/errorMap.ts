import { MessageError } from 'types/error';

export const errorMap: { [key in MessageError]: string } = {
  [MessageError.INCORRECT_CREDENTIALS]: 'Credenciais incorretas',
  [MessageError.INVALID_AUTH]: 'Autenticação inválida'
};
