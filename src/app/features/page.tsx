import Features from "@/components/home/Features";
import Zigzag from "@/components/home/Zigzag";

export const metadata = {
  title: 'Features - Your App',
  description: 'Discover all the powerful features that make our app stand out.',
}

export default function FeaturesPage() {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4">Powerful features for powerful businesses</h1>
              <p className="text-xl text-gray-600">
                Our cutting-edge features are designed to help you work smarter, not harder.
                Discover how our tools can transform your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Zigzag />
    </>
  );
}
