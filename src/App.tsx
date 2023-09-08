import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollingLine from "./components/ScrollingLine";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollingLine />
      <MainSection />
      {/* Other content here */}
      <Footer />
    </div>
  );
}

export default App;
