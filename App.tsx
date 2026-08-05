import Hero from "./components/Hero";
import KpiSection from "./components/KpiSection";
import Navigation from "./components/Navigation";
import OngoingPlansSection from "./components/OngoingPlansSection";
import PerformanceSection from "./components/PerformanceSection";
import RecommendationsSection from "./components/RecommendationsSection";
import ScrollToTop from "./components/ScrollToTop";
import SwotSection from "./components/SwotSection";
import WorkHighlightsSection from "./components/WorkHighlightsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />
      <main>
        <Hero />
        <KpiSection />
        <PerformanceSection />
        <WorkHighlightsSection />
        <OngoingPlansSection />
        <SwotSection />
        <RecommendationsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
