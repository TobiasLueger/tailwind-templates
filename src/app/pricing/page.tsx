import Pricing from "@/components/home/Pricing";
import Newsletter from "@/components/home/Newsletter";

export const metadata = {
  title: 'Pricing - Your App',
  description: 'Choose the perfect plan for your needs with our flexible pricing options.',
}

export default function PricingPage() {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4">Simple, transparent pricing</h1>
              <p className="text-xl text-gray-600">
                Choose the perfect plan for your needs. Start with our 14-day free trial.
                No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <Newsletter />
    </>
  );
}
