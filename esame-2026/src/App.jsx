import { useState } from "react";
import Slide0 from "./components/Slide0";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";
import Slide7 from "./components/Slide7";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  <Slide0 onStart={() => setCurrentSlide(1)} />,
  <Slide1 onNext={() => setCurrentSlide(2)} onPrev={() => setCurrentSlide(0)} />,
  <Slide2 onNext={() => setCurrentSlide(3)} onPrev={() => setCurrentSlide(1)} />,
  <Slide3 onNext={() => setCurrentSlide(4)} onPrev={() => setCurrentSlide(2)} />,
  <Slide4 onNext={() => setCurrentSlide(5)} onPrev={() => setCurrentSlide(3)} />,
  <Slide5 onNext={() => setCurrentSlide(6)} onPrev={() => setCurrentSlide(4)} />,
  <Slide6 onNext={() => setCurrentSlide(7)} onPrev={() => setCurrentSlide(5)} />,
  <Slide7 onPrev={() => setCurrentSlide(6)} />
];


  return (
    <div className="app">
      {slides[currentSlide]}
    </div>
  );
}

export default App;
