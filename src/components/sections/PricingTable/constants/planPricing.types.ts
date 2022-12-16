export type PricingBundleType =
  | 'starter'
  | 'professional'
  | 'ecommerce'
  | 'ultimate';

export interface PricingProps {
  abovePrice?: string;
  price: string;
  belowPrice?: string;
}

export type PlanPricingProps = {
  [x in PricingBundleType]: PricingProps;
};
