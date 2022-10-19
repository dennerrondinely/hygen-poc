import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'bg' | 'color' | 'border'
>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    min-width: 5.7rem;
    height: 3.2rem;
    font-size: ${theme.font.sizes.xxsmall};
    line-height: 1.8rem;
    padding: 0 ${theme.spacings.small};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    min-width: 7.5rem;
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1.8rem;
    padding: 0 ${theme.spacings.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    min-width: 8.8rem;
    height: 5rem;
    font-size: ${theme.font.sizes.small};
    line-height: 1.8rem;
    padding: 0 ${theme.spacings.small};
  `,

  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `
};

export const Wrapper = styled.button<WrapperProps>`
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s;

  ${({
    theme,
    size,
    fullWidth,
    hasIcon,
    color = 'white',
    bg = 'blue',
    border
  }) =>
    css`
      border-radius: ${border
        ? theme.border.radius.medium
        : theme.border.radius.large};
      color: ${border ? theme.colors[bg] : theme.colors[color]};
      background-color: ${border ? theme.colors.white : theme.colors[bg]};
      font-weight: ${theme.font.bold};

      border: 0.2rem solid
        ${border ? theme.colors[bg] : theme.colors.transparent};

      ${!!size && wrapperModifiers[size](theme)};
      ${!!fullWidth && wrapperModifiers.fullWidth()};
      ${!!hasIcon && wrapperModifiers.withIcon(theme)};
      &:disabled {
        cursor: not-allowed;
        color: ${theme.colors['gray']};
        background-color: ${theme.colors['gray-light']};
      }
    `}
`;
