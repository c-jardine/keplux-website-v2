import { IconType } from '@react-icons/all-files';

export interface NavbarItemProps {
  label: string;
  href?: string;
  icon?: IconType;
  description?: string;
  items?: NavbarItemProps[];
  onClick?: () => void;
}
