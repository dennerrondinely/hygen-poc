import React, { ReactNode } from 'react';

import { ColorsType } from 'styles/colors';

import { Component, Variant, VariantType } from './types';

import * as S from './Typography.styles';

export type TypographyProps = {
  variant?: Variant;
  component?: Component;
  color?: ColorsType;
  nowrap?: boolean;
  align?: 'start' | 'center' | 'end';
  children?: ReactNode | string;
  role?: string;
};

const Typography = ({
  children,
  variant = 'body',
  component,
  align,
  color,
  nowrap,
  role
}: TypographyProps) => {
  const Component = S[component ?? VariantType[variant]];

  return (
    <Component
      variant={variant}
      align={align}
      color={color}
      nowrap={nowrap}
      role={role}
    >
      {children}
    </Component>
  );
};

export default Typography;
