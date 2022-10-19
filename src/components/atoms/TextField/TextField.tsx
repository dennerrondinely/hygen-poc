import React, {
  useState,
  InputHTMLAttributes,
  ChangeEvent,
  ReactNode
} from 'react';

import Icon from 'components/atoms/Icon';
import Typography from 'components/atoms/Typography';

import * as S from './TextField.styles';

export type TextFieldProps = {
  label?: ReactNode;
  initialValue?: string | number;
  disabled?: boolean;
  error?: string;
  type?: string;
  onInput?: (value: ChangeEvent<HTMLInputElement>) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onInput'>;

const TextField = ({
  label,
  name,
  type: rawType = 'text',
  initialValue = '',
  error,
  disabled = false,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);
  const [type, setType] = useState(rawType);
  const isPassword = rawType === 'password';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.validity.valid ? e.target.value : value;
    setValue(newValue);
    e.target.validity.valid && !!onInput && onInput(e);
  };

  const handleHideValue = () => {
    if (type !== 'password') {
      setType('password');
    } else {
      setType('text');
    }
  };

  return (
    <S.Wrapper>
      {error && (
        <S.HelperWrapper>
          <Typography variant="caption" color="salmon-light" component="span">
            {error}
          </Typography>
        </S.HelperWrapper>
      )}
      {!!label && (
        <S.Label error={error} htmlFor={name} disabled={disabled}>
          {label}
        </S.Label>
      )}
      <S.Input
        isPassWord={isPassword}
        error={error}
        type={type}
        onChange={handleChange}
        value={value}
        disabled={disabled}
        name={name}
        {...(label ? { id: name } : {})}
        {...props}
      />
      {isPassword && (
        <S.HideButton onClick={handleHideValue} type="button">
          <Icon icon="eye" color="gray-medium" size={13.33} />
        </S.HideButton>
      )}
    </S.Wrapper>
  );
};

export default TextField;
