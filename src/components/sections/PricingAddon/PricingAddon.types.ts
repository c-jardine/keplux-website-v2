import { PricingStructureProps } from '../Pricing/Pricing.types';

export interface PricingAddonProps {
  heading: string;
  description: string;
  price: PricingStructureProps;
  cta: {
    label: string;
    href: string;
  };
}
