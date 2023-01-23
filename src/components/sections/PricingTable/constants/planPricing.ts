import { PlanPricingProps } from './planPricing.types';

const PlanPricing: PlanPricingProps = {
  starter: {
    abovePrice: 'No contract required',
    price: '$200',
    belowPrice: 'per month',
  },
  professional: {
    abovePrice: 'Starting at',
    price: '$795',
  },
  ecommerce: {
    abovePrice: 'Starting at',
    price: '$1295',
  },
  ultimate: {
    abovePrice: 'Starting at',
    price: '$1895',
  },
};

export default PlanPricing;
