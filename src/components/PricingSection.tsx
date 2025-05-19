
import React, { useState } from 'react';
import PriceSwitch from './PriceSwitch';
import PricingCard, { PricingPlan } from './PricingCard';

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    description: 'Essential features for small teams',
    monthlyPrice: 19,
    yearlyPrice: 182, // 20% off monthly price for a year
    currency: '$',
    buttonText: 'Get Started',
    features: [
      { title: '5 team members', included: true },
      { title: '10GB storage', included: true },
      { title: 'Basic analytics', included: true },
      { title: 'Email support', included: true },
      { title: 'Advanced security', included: false },
      { title: 'Custom branding', included: false }
    ]
  },
  {
    name: 'Pro',
    description: 'Perfect for growing teams',
    monthlyPrice: 49,
    yearlyPrice: 470, // 20% off monthly price for a year
    currency: '$',
    buttonText: 'Start Free Trial',
    isPopular: true,
    features: [
      { title: '15 team members', included: true },
      { title: '50GB storage', included: true },
      { title: 'Advanced analytics', included: true },
      { title: 'Priority email support', included: true },
      { title: 'Advanced security', included: true },
      { title: 'Custom branding', included: false }
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large organizations and teams',
    monthlyPrice: 99,
    yearlyPrice: 950, // 20% off monthly price for a year
    currency: '$',
    buttonText: 'Contact Sales',
    features: [
      { title: 'Unlimited team members', included: true },
      { title: '250GB storage', included: true },
      { title: 'Custom analytics', included: true },
      { title: '24/7 phone & email support', included: true },
      { title: 'Enterprise security', included: true },
      { title: 'Custom branding', included: true }
    ]
  }
];

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <PriceSwitch isYearly={isYearly} onChange={setIsYearly} />
      
      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <PricingCard 
            key={index} 
            plan={plan} 
            isYearly={isYearly} 
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
