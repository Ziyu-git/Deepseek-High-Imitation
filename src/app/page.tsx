import HeaderNavigation from "@/components/sections/header-navigation";
import HeroSection from "@/components/sections/hero-section";
import Footer from "@/components/sections/footer";
import CookieBanner from "@/components/sections/cookie-banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <HeaderNavigation />
        <HeroSection />
      </div>
      <Footer />
      <CookieBanner />
    </main>
  );
}