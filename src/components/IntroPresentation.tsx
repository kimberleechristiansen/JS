import { useState } from "react";
import { IntroSlide } from "./IntroSlide";
import { ProblemSlide } from "./ProblemSlide";
import { DamageSlide } from "./DamageSlide";

export const IntroPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <IntroSlide onNext={nextSlide} />;
      case 1:
        return <ProblemSlide onNext={nextSlide} onPrev={prevSlide} />;
      case 2:
        return <DamageSlide onNext={nextSlide} onPrev={prevSlide} />;
      default:
        return <IntroSlide onNext={nextSlide} />;
    }
  };

  return (
    <div className="relative">
      {/* Slide transition container */}
      <div className="transition-all duration-700 ease-in-out">
        {renderSlide()}
      </div>
      
      {/* Keyboard navigation hint */}
      <div className="fixed bottom-4 right-4 text-xs text-foreground/40 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
        Use ← → keys to navigate
      </div>
    </div>
  );
};