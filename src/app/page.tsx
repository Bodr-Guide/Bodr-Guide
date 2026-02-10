import Header from "@/components/layout/Header";
import HeroSection from "@/components/features/home/HeroSection";
import PopularCountries from "@/components/features/home/PopularCountries";
import { getAllCountries } from "@/lib/countries";

export default function Home() {
  const countries = getAllCountries();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PopularCountries countries={countries} />
      </main>
    </>
  );
}
