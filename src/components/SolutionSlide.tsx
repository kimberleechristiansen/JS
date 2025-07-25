import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Shield, Zap, Target } from "lucide-react";

interface SolutionSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const SolutionSlide = ({ onNext, onPrev }: SolutionSlideProps) => {
  return (
    <div className="min-h-screen bg-gradient-surface flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,hsl(var(--primary))_1px,transparent_1px),linear-gradient(-45deg,hsl(var(--primary))_1px,transparent_1px)] bg-[length:20px_20px]" />
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl font-bold text-primary mb-6">THE SOLUTION</h1>
          <p className="text-xl text-surface-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Introducing a revolutionary AI-powered defense system that puts job seekers back in control.
          </p>
        </div>

        {/* Main Scamalyzer Logo Section */}
        <div className="flex justify-center mb-16 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-110" />
            
            {/* Main logo container */}
            <div className="relative bg-gradient-primary rounded-2xl p-12 shadow-floating border border-primary/30 group-hover:shadow-elevated transition-all duration-500">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2 tracking-wider">
                  SMARTER TOOLS FOR TOUGHER TIMES.
                </div>
                <div className="text-7xl font-black text-primary-foreground tracking-tight bg-gradient-to-r from-white via-primary-foreground to-white bg-clip-text">
                  SCAMALYZER
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {[
            {
              icon: Shield,
              title: "Real-Time Protection",
              description: "AI-powered analysis of job postings, emails, and contact details",
              delay: "0.5s"
            },
            {
              icon: Target,
              title: "Precision Scoring",
              description: "1-100 legitimacy score with detailed feedback and red flags",
              delay: "0.7s"
            },
            {
              icon: Zap,
              title: "Instant Results",
              description: "Get comprehensive scam reports in seconds, not hours",
              delay: "0.9s"
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary to-primary-dark shadow-lg group-hover:shadow-elevated transition-shadow duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-surface-foreground mb-3">{feature.title}</h3>
                <p className="text-surface-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
          <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 rounded-xl p-6 max-w-4xl mx-auto border border-primary/20">
            <p className="text-lg text-surface-foreground leading-relaxed">
              <span className="font-bold text-primary">Stop being a victim.</span> Arm yourself with the intelligence 
              to identify scams before they steal your time, money, and personal information.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <Button
            onClick={onPrev}
            variant="outline"
            size="lg"
            className="group bg-primary-foreground/80 hover:bg-primary-foreground border-primary/30"
          >
            <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </Button>
          
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-primary/40 rounded-full"></div>
            <div className="w-3 h-3 bg-primary/40 rounded-full"></div>
            <div className="w-3 h-3 bg-primary/40 rounded-full"></div>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
          
          <Button
            onClick={onNext}
            size="lg"
            className="group bg-gradient-primary hover:from-primary-dark hover:to-primary text-primary-foreground shadow-elevated"
          >
            How It Works
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};