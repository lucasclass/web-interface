export const metadata = {
  title: "Home - Comece sua jornada",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
    </>
  );
}
