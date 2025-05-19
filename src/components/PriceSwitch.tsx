
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type PriceSwitchProps = {
  onChange: (isYearly: boolean) => void;
  isYearly: boolean;
}

const PriceSwitch: React.FC<PriceSwitchProps> = ({ onChange, isYearly }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3">Simple, transparent pricing</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Choose the plan that works best for you and your team
        </p>
      </div>
      
      <div className="flex items-center space-x-3">
        <span className={cn(
          "text-sm font-medium transition-colors duration-200",
          isYearly ? "text-gray-500" : "text-gray-900"
        )}>
          Monthly
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
            Yearly
          </span>
          <span className="ml-2 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Save 20%
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceSwitch;
