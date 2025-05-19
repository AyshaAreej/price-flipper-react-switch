
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type PlanFeature = {
  title: string;
  included: boolean;
};

export type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency: string;
  features: PlanFeature[];
  buttonText: string;
  isPopular?: boolean;
};

type PricingCardProps = {
  plan: PricingPlan;
  isYearly: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly }) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  
  return (
    <div className={cn(
      "flex flex-col border rounded-lg p-6 transition-all duration-200 hover:shadow-lg",
      plan.isPopular ? "border-purple-400 shadow-md" : "border-gray-200"
    )}>
      {plan.isPopular && (
        <div className="px-3 py-1 text-xs font-medium text-purple-800 bg-purple-100 rounded-full self-start mb-4">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="mt-2 text-gray-500 text-sm">{plan.description}</p>
      
      <div className="mt-5 mb-5">
        <span className="text-4xl font-bold">{plan.currency}{price}</span>
        <span className="text-gray-500 ml-2">/{isYearly ? 'year' : 'month'}</span>
      </div>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className={cn(
              "flex-shrink-0 rounded-full p-1 mr-2",
              feature.included ? "text-green-500" : "text-gray-300"
            )}>
              <Check size={16} />
            </div>
            <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
              {feature.title}
            </span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={cn(
          "w-full",
          plan.isPopular ? "bg-purple-600 hover:bg-purple-700" : ""
        )}
      >
        {plan.buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
