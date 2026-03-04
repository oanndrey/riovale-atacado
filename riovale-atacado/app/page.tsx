import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryMarquee from "./components/CategoryMarquee";
import CategoryGrid from "./components/CategoryGrid";
import Advantages from "./components/Advantages";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CategoryMarquee />
      <CategoryGrid />
      <Advantages />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
