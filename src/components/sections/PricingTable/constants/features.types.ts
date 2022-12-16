export interface PricingFeatureProps {
  id: number;
  feature: string;
  description?: string;
  included: {
    starter: boolean | string;
    professional: boolean | string;
    ecommerce: boolean | string;
    ultimate: boolean | string;
  };
}
