import { PlanPricingProps } from './planPricing.types';

const PlanPricing: PlanPricingProps = {
  starter: {
    abovePrice: 'No contract required',
    price: '$175',
    belowPrice: 'per month',
  },
  professional: {
    abovePrice: 'Contact us',
    price: 'Contact us',
  },
  ecommerce: {
    abovePrice: 'Contact us',
    price: '$1295',
  },
  ultimate: {
    abovePrice: 'Contact us',
    price: '$1895',
  },
};

export default PlanPricing;
