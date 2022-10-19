import styled, { css } from 'styled-components';

import { TextFieldProps } from '.';

type LabelProps = Pick<TextFieldProps, 'error' | 'disabled'>;

type InputProps = {
  isPassWord?: boolean;
} & Pick<TextFieldProps, 'error'>;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.minimal};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const Input = styled.input<InputProps>`
  ${({ theme, isPassWord, error }) => css`
    border: none;
    background-color: ${theme.colors.transparent};
    color: ${error
      ? theme.colors['salmon-medium']
      : theme.colors['gray-medium']};
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.sizes['body-2']};
    font-weight: ${theme.font.normal};
    font-style: ${theme.font.style.italic};
    padding-bottom: ${theme.spacings.xxsmall};
    padding-right: ${isPassWord ? theme.spacings.xsmall : 0};
    border-bottom: 0.2rem solid
      ${error ? theme.colors['salmon-medium'] : theme.colors['gray']};
    transition: border-color 0.3s ease-out;
    -moz-appearance: textfield;

    &:-internal-autofill-previewed {
      background-color: ${theme.colors.transparent} !important;
    }

    &:-internal-autofill-selected {
      background-color: ${theme.colors.transparent} !important;
    }

    &::-webkit-inner-spin-button {
      display: none;
    }

    &:invalid {
      outline: none;
      box-shadow: none;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:required {
      box-shadow: none;
    }

    &::placeholder {
      color: ${error
        ? theme.colors['salmon-light']
        : theme.colors['gray-medium']};
    }

    &:disabled {
      cursor: not-allowed;
      border-bottom: 0.1rem solid ${theme.colors['gray-light']};
      &::placeholder {
        color: ${theme.colors['gray-light']};
      }
    }

    &:focus {
      caret-color: ${error
        ? theme.colors['salmon-light']
        : theme.colors['gray']};
      border-bottom: 0.2rem solid
        ${error ? theme.colors['salmon-light'] : theme.colors['gray']};
    }

    &:focus-visible {
      outline: none;
    }
  `}
`;

export const Label = styled.label<LabelProps>`
  ${({ theme, error, disabled }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    color: ${disabled
      ? theme.colors['gray-medium']
      : error
      ? theme.colors['salmon-medium']
      : theme.colors['gray-dark']};
    font-size: ${theme.font.sizes.xsmall};
    line-height: 2rem;
    font-weight: ${theme.font.normal};
  `}
`;

export const HelperWrapper = styled.div`
  display: inline-flex;
  position: absolute;
  top: 100%;
  left: 0;
`;

export const HideButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: ${theme.spacings.small};
    right: 0;
  `}
`;
