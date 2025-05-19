
import React from 'react';
import { cn } from '@/lib/utils';

export type PriceSwitchProps = {
  onChange: (isYearly: boolean) => void;
  isYearly: boolean;
  title?: string;
  subtitle?: string;
  monthlyLabel?: string;
  yearlyLabel?: string;
  discountLabel?: string;
  discountPercentage?: number;
  className?: string;
  switchClassName?: string;
}

const PriceSwitch: React.FC<PriceSwitchProps> = ({ 
  onChange, 
  isYearly,
  title = "Simple, transparent pricing",
  subtitle = "Choose the plan that works best for you and your team",
  monthlyLabel = "Monthly",
  yearlyLabel = "Yearly",
  discountLabel = "Save",
  discountPercentage = 20,
  className,
  switchClassName
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center mb-12", className)}>
      {(title || subtitle) && (
        <div className="text-center mb-6">
          {title && <h2 className="text-3xl font-bold mb-3">{title}</h2>}
          {subtitle && <p className="text-gray-600 max-w-md mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <div className={cn("flex items-center space-x-3", switchClassName)}>
        <span className={cn(
          "text-sm font-medium transition-colors duration-200",
          isYearly ? "text-gray-500" : "text-gray-900"
        )}>
          {monthlyLabel}
        </span>
        
        <button 
          onClick={() => onChange(!isYearly)}
          className="relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none"
          role="switch"
          aria-checked={isYearly}
        >
          <span 
            className={cn(
              "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
              isYearly ? "translate-x-6" : "translate-x-0"
            )}
          />
        </button>
        
        <div className="flex items-center">
          <span className={cn(
            "text-sm font-medium transition-colors duration-200",
            isYearly ? "text-gray-900" : "text-gray-500"
          )}>
            {yearlyLabel}
          </span>
          {discountPercentage > 0 && (
            <span className="ml-2 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              {discountLabel} {discountPercentage}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceSwitch;
