import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { ColorsType } from 'styles/colors';
import { SizeType } from 'types/sizes';

import * as S from './Button.styles';

export type ButtonProps = {
  children?: ReactNode;
  color?: ColorsType;
  bg?: ColorsType;
  size?: SizeType;
  border?: boolean;
  fullWidth?: boolean;
  icon?: JSX.Element;
  onClick?(): void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  size = 'medium',
  color = 'white',
  bg = 'blue',
  fullWidth = false,
  border = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    color={color}
    bg={bg}
    size={size}
    fullWidth={fullWidth}
    border={border}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && icon}
    {!!children && children}
  </S.Wrapper>
);

export default Button;
