
import PricingSection from "../components/PricingSection";
// Example of how the package could be imported
// import { PricingSection } from 'react-pricing-toggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          React Pricing Toggle Example
        </h1>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          This is an example of the React Pricing Toggle package. Below you can see the pricing
          component in action. To use this as an npm package, check the documentation in <code>/src/package</code>
          directory.
        </p>
        <PricingSection />
      </div>
    </div>
  );
};

export default Index;
