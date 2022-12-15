import { PlanPricingProps } from './planPricing.types';

const PlanPricing: PlanPricingProps = {
  starter: {
    abovePrice: 'No contract required',
    price: '$150',
    belowPrice: 'per month',
  },
  professional: {
    abovePrice: 'Starting at',
    price: '$1245',
  },
  ecommerce: {
    abovePrice: 'Starting at',
    price: '$1495',
  },
  ultimate: {
    abovePrice: 'Starting at',
    price: '$2495',
  },
};

export default PlanPricing;
