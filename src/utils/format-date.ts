import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export const formatAppoitmentDate = (value: string) => {
  const rawDate = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'America/Sao_Paulo'
  }).format(new Date(value));

  const splitDate = rawDate.split(' ');
  return splitDate.join(' às ');
};

export const formatDate = (date?: Date, mask = 'dd/MM/Y') =>
  date
    ? format(date, mask, {
        locale: pt
      })
    : '-';
