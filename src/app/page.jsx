import { Suspense } from "react";
import HeroSection from "@/Components/Shared/HeroSection";
import MarqueePage from "@/Components/Shared/Marquee";
import ProductSection from "@/Components/Shared/ProductSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueePage />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <ProductSection />
      </Suspense>
    </main>
  );
}
