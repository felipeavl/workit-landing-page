import ApplyInfo from "./components/apply-info/ApplyInfo";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";

function App() {
  const handleLearnMore = () => {
    const element = document.getElementById("features");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleApply = () => {
    const element = document.getElementById("apply");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Hero onApplyForAccess={handleApply} onLearnMore={handleLearnMore} />
      <Features />
      <ApplyInfo />
      <Footer />
    </div>
  );
}

export default App;
