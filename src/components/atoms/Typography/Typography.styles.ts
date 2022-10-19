import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { TypographyProps } from '.';

type WrapperProps = { theme: DefaultTheme } & Omit<TypographyProps, 'children'>;

const includeNowrap = css`
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const getVariant = {
  'heading-1': ({
    theme,
    nowrap,
    align = 'center',
    color = 'blue-dark'
  }: WrapperProps) => css`
    color: ${theme.colors[color]};
    font-style: normal;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 3.9rem;
    letter-spacing: -1.5px;
    text-align: ${align};
    ${nowrap && includeNowrap}

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xhuge};
      line-height: 6rem;
    `}
  `,
  'heading-2': ({
    theme,
    nowrap,
    align = 'start',
    color = 'blue-dark'
  }: WrapperProps) => css`
    color: ${theme.colors[color]};
    font-style: normal;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    line-height: 3.8rem;
    text-align: ${align};
    ${nowrap && includeNowrap}

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.huge};
      line-height: 6.5rem;
    `}
  `,
  body: ({
    theme,
    nowrap,
    align = 'start',
    color = 'gray-dark'
  }: WrapperProps) => css`
    font-style: normal;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};
    line-height: 2rem;
    color: ${theme.colors[color]};
    text-align: ${align};
    ${nowrap && includeNowrap}
  `,
  subtitle: ({
    theme,
    nowrap,
    align = 'center',
    color = 'gray-medium'
  }: WrapperProps) =>
    css`
      font-style: normal;
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
      line-height: 2.4rem;
      text-align: ${align};
      color: ${theme.colors[color]};
      ${nowrap && includeNowrap}
    `,
  caption: ({
    theme,
    nowrap,
    align = 'start',
    color = 'gray-dark'
  }: WrapperProps) =>
    css`
      font-style: normal;
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.xxsmall};
      line-height: 2rem;
      text-align: ${align};
      color: ${theme.colors[color]};
      ${nowrap && includeNowrap}
    `
};

export const h1 = styled.h1<WrapperProps>`
  ${({ variant = 'heading-1', ...props }: WrapperProps) =>
    getVariant[variant](props)}
`;
export const h2 = styled.h2<WrapperProps>`
  ${({ variant = 'subtitle', ...props }: WrapperProps) =>
    getVariant[variant](props)}
`;
export const span = styled.span<WrapperProps>`
  ${({ variant = 'body', ...props }: WrapperProps) =>
    getVariant[variant](props)}
`;
export const p = styled.p<WrapperProps>`
  ${({ variant = 'body', ...props }) => getVariant[variant](props)}
`;
export const caption = styled.caption<WrapperProps>`
  ${({ variant = 'caption', ...props }) => getVariant[variant](props)}
`;
