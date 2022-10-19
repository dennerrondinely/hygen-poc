import React from 'react';

import { Container } from './Icon.styles';
import iconPath, { IconType } from './icons';
import { ColorsType } from 'styles/colors';

export type IconProps = {
  size?: number | string;
  icon: IconType;
  color?: ColorsType;
};

const Icon = ({ icon, ...props }: IconProps) => (
  <Container
    xmlns="http://www.w3.org/2000/svg"
    viewBox={iconPath[icon].viewBox}
    {...props}
  >
    {iconPath[icon].path}
  </Container>
);

export default Icon;
