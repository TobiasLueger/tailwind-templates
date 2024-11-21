import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import Zigzag from "@/components/home/Zigzag";
import Pricing from "@/components/home/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Pricing />
      <Newsletter />
    </>
  );
}
