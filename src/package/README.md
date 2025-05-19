
# React Pricing Toggle

A customizable pricing toggle component for React applications. This package provides components for building pricing sections with monthly/yearly toggle functionality.

## Installation

```bash
npm install react-pricing-toggle
# or
yarn add react-pricing-toggle
```

## Usage

```jsx
import { useState } from 'react';
import { PriceSwitch, PricingCard, PricingSection } from 'react-pricing-toggle';

// Example pricing plan data
const pricingPlans = [
  {
    name: 'Basic',
    description: 'Essential features for small teams',
    monthlyPrice: 19,
    yearlyPrice: 182,
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
  // Add more plans here
];

// Using the component
function App() {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <div className="app">
      {/* Option 1: Use the full pricing section */}
      <PricingSection />
      
      {/* Option 2: Use individual components */}
      <div className="container">
        <PriceSwitch 
          isYearly={isYearly}
          onChange={setIsYearly}
          title="Custom Pricing Title"
          subtitle="Custom pricing subtitle text"
        />
        
        <div className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              plan={plan}
              isYearly={isYearly}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
```

## Components

### PriceSwitch

A toggle switch component for switching between monthly and yearly pricing.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onChange | (isYearly: boolean) => void | required | Callback function when toggle state changes |
| isYearly | boolean | required | Current toggle state |
| title | string | "Simple, transparent pricing" | Title text |
| subtitle | string | "Choose the plan that works best for you and your team" | Subtitle text |
| monthlyLabel | string | "Monthly" | Label for monthly option |
| yearlyLabel | string | "Yearly" | Label for yearly option |
| discountLabel | string | "Save" | Discount label text |
| discountPercentage | number | 20 | Discount percentage (set to 0 to hide) |
| className | string | undefined | Additional class for the container |
| switchClassName | string | undefined | Additional class for the switch container |

### PricingCard

A component to display pricing plan details.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| plan | PricingPlan | required | Plan data |
| isYearly | boolean | required | Current pricing mode |

#### PricingPlan Type

```typescript
type PlanFeature = {
  title: string;
  included: boolean;
};

type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency: string;
  features: PlanFeature[];
  buttonText: string;
  isPopular?: boolean;
};
```

## License

MIT
