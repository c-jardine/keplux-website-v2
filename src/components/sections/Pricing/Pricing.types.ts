import React from 'react';

export interface PricingFeatureProps {
  id: number;
  heading: string;
  description: string;
}

export interface PricingStructureProps {
  abovePrice?: string;
  price: string;
  belowPrice?: string;
  primaryCta: React.ReactNode;
  secondaryCta?: React.ReactNode;
  disclaimer?: string;
}

export interface PricingProps {
  heading: string;
  description: string | React.ReactNode;
  features: PricingFeatureProps[];
  price: PricingStructureProps;
}
