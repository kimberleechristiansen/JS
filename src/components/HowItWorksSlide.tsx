import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Upload, BarChart3, FileText, CheckCircle2 } from "lucide-react";

interface HowItWorksSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const HowItWorksSlide = ({ onNext, onPrev }: HowItWorksSlideProps) => {
  const steps = [
    {
      icon: Upload,
      title: "Upload & Analyze",
      description: "Drag and drop a job description file (PDF, DOCX, TXT) or enter contact details like name, email, or phone number.",
      step: "1"
    },
    {
      icon: BarChart3,
      title: "Get Your Score",
      description: "Our AI-powered analysis provides a legitimacy score from 1 (Legit) to 100 (Likely Scam), highlighting grammar, spelling, company verification, and salary benchmarks.",
      step: "2"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary-light/5 flex items-center justify-center relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6">
            <p className="text-lg text-surface-foreground/70 mb-2">Is that job offer or contact person legit?</p>
            <p className="text-xl text-surface-foreground/80">Analyze job descriptions and details to uncover potential scams.</p>
          </div>
          <h1 className="text-6xl font-bold text-primary mb-6">How It Works</h1>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative group animate-scale-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Step number background */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg z-10">
                  {step.step}
                </div>
                
                {/* Main card */}
                <div className="bg-primary-foreground rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-card hover:shadow-elevated group-hover:scale-105 transform">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-primary to-primary-dark shadow-lg">
                      <IconComponent className="w-10 h-10 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-surface-foreground mb-4">{step.title}</h3>
                    <p className="text-surface-foreground/80 leading-relaxed text-lg">{step.description}</p>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Legitimacy Score Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-3xl font-bold text-center text-surface-foreground mb-8">Legitimacy Score</h3>
            
            {/* Score bar visualization */}
            <div className="relative mb-6">
              <div className="h-8 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full overflow-hidden">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white font-bold text-sm">
                  1 (Legit)
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white font-bold text-sm">
                  100 (Scam)
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <div>
                  <div className="font-bold text-green-500">1-30: Legitimate</div>
                  <div className="text-sm text-surface-foreground/70">Safe to proceed</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <FileText className="w-6 h-6 text-red-500" />
                <div>
                  <div className="font-bold text-red-500">70-100: Likely Scam</div>
                  <div className="text-sm text-surface-foreground/70">Avoid at all costs</div>
                </div>
              </div>
            </div>
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
            <div className="w-3 h-3 bg-primary/40 rounded-full"></div>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
          
          <Button
            onClick={onNext}
            size="lg"
            className="group bg-gradient-primary hover:from-primary-dark hover:to-primary text-primary-foreground shadow-elevated"
          >
            Continue
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};