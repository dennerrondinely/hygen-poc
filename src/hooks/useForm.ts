import { ChangeEvent, useState } from 'react';

export type returHook = {
  value: string;
  onInput: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  validate: () => boolean;
  onBlur: () => void;
  setDefaultValue: (value: string) => void;
};

const validation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido'
  },
  name: {
    regex: /^.{6,}$/,
    message: 'O nome deve conter no mínimo 6 caracteres'
  },
  cpf: {
    regex: /^.{11,}$/,
    message: 'O cpf deve conter no mínimo 11 números'
  },
  cnpj: {
    regex: /^.{14,}$/,
    message: 'O cnpj deve conter no mínimo 14 números'
  },
  password: {
    regex: /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha precisa possuir 1 caracter maíusculo, 1 caracter minúsculo e 1 dígito. Com no mínimo 8 caracteres.'
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize apenas números'
  },
  other: {
    regex: /^.{1,}$/,
    message: 'O campo não pode ficar vazio'
  }
};
const useForm = (
  type: 'email' | 'name' | 'cpf' | 'cnpj' | 'number' | 'money' | 'other' | null
): returHook => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validateMoney = () => {
    const sanitazeNumber = value.replace(',', '.');
    if (Number(sanitazeNumber) < 0.01) return false;
    return true;
  };
  const validateMask = (): boolean => {
    setValue((prevState) => prevState.replace(/[^\d]/g, ''));
    if (
      type &&
      type !== 'money' &&
      validation[type] &&
      !validation[type].regex.test(value)
    ) {
      setError(validation[type].message);
      return false;
    }
    setError('');
    return true;
  };

  const validate = (): boolean => {
    if (!!type === false) return true;
    if (type === 'money') {
      if (!validateMoney()) {
        setError('O valor deve ser maior que 0,01');
        return false;
      }
      setError('');
      return true;
    }
    if (type === 'cpf' || type === 'cnpj') {
      return validateMask();
    }
    if (type && validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message);
      return false;
    }
    setError('');
    return true;
  };

  const onInput = ({ target }: { target: { value: string } }) => {
    if (error) validate();
    setValue(target.value);
  };

  const setDefaultValue = (v: string) => {
    setValue(v);
  };

  return {
    value,
    onInput,
    error,
    validate: () => validate(),
    onBlur: () => validate(),
    setDefaultValue
  };
};

export default useForm;
