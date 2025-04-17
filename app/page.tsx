import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import FeatureSection from "./components/FeatureSection";
import AIAdvisorSection from "./components/AIAdvisorSection";
import SimulationSection from "./components/SimulationSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero
        title1={"Visualize"}
        title2={"Your Path"}
        title3={"To Financial Freedom"}
      />
      <FeatureSection />
      <AIAdvisorSection />
      <SimulationSection />
      <Footer />
    </main>
  );
}
