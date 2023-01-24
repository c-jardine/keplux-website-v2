import { PlanPricingProps } from './planPricing.types';

const PlanPricing: PlanPricingProps = {
  starter: {
    abovePrice: 'No contract required',
    price: '$175',
    belowPrice: 'per month',
  },
  professional: {
    abovePrice: 'For pricing',
    price: 'Contact us',
  },
  ecommerce: {
    abovePrice: 'For pricing',
    price: 'Contact us',
  },
  ultimate: {
    abovePrice: 'For pricing',
    price: 'Contact us',
  },
};

export default PlanPricing;
