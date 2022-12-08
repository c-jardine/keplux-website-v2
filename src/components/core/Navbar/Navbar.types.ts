import { IconType } from '@react-icons/all-files';
import React from 'react';

export interface NavbarItemProps {
  label: string;
  href?: string;
  icon?: IconType;
  description?: string;
  items?: NavbarItemProps[];
  onClick?: () => void;
  ref: React.MutableRefObject<HTMLDivElement>;
}
