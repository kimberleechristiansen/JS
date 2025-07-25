import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, DollarSign, Heart, TrendingDown, AlertCircle } from "lucide-react";

interface DamageSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const DamageSlide = ({ onNext, onPrev }: DamageSlideProps) => {
  const damageStats = [
    {
      amount: "$12.7B",
      title: "TOTAL FRAUD LOSSES",
      subtitle: "2024 (25% INCREASE)",
      description: "Federal Trade Commission reported record-breaking fraud losses",
      source: "FTC Consumer Sentinel Report 2024",
      icon: DollarSign,
      color: "text-danger"
    },
    {
      amount: "$47B",
      title: "IDENTITY FRAUD COST",
      subtitle: "TO AMERICANS IN 2024",
      description: "Including job-related identity theft and data harvesting",
      source: "AARP & Javelin Strategy Report 2024",
      icon: AlertCircle,
      color: "text-warning"
    },
    {
      amount: "$5,000",
      title: "AVERAGE LOSS",
      subtitle: "PER VICTIM",
      description: "When employment scams result in financial losses",
      source: "Back Office Pro Study 2025",
      icon: TrendingDown,
      color: "text-danger"
    },
    {
      amount: "265%",
      title: "INCREASE IN SCAMS",
      subtitle: "SINCE 2021",
      description: "Devastating emotional and financial impact on job seekers",
      source: "Future Crime Research Foundation 2025",
      icon: Heart,
      color: "text-warning"
    }
  ];

  const emotionalImpacts = [
    "Prolonged unemployment due to wasted time on fake applications",
    "Identity theft leading to damaged credit scores",
    "Financial devastation from upfront fee scams",
    "Loss of trust in legitimate job opportunities",
    "Emotional trauma and increased stress during job searches",
    "Delayed career progression and lost opportunities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-danger/5 via-background to-warning/5 flex items-center justify-center relative">
      {/* Dramatic background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-danger rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warning rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl font-bold bg-gradient-warning bg-clip-text text-transparent mb-6">
            THE DAMAGE DONE
          </h1>
          <p className="text-xl text-surface-foreground/80 max-w-3xl mx-auto leading-relaxed">
            The human and financial cost of job scams extends far beyond mere numbers. 
            Real people are suffering devastating consequences.
          </p>
        </div>

        {/* Financial Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {damageStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-primary-foreground border-2 border-danger/20 hover:border-danger/40 transition-all duration-500 shadow-elevated hover:shadow-floating animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Warning indicator */}
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-danger rounded-full animate-pulse" />
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-danger to-warning shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Amount */}
                <div className="text-center mb-4">
                  <div className={`text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.amount}
                  </div>
                  <div className="text-lg font-bold text-surface-foreground">
                    {stat.title}
                  </div>
                  <div className="text-lg font-bold text-surface-foreground/80">
                    {stat.subtitle}
                  </div>
                </div>
                
                {/* Description */}
                <div className="text-center mb-4">
                  <p className="text-sm text-surface-foreground/70 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
                
                {/* Source */}
                <div className="text-center">
                  <p className="text-xs text-surface-foreground/50 font-medium">
                    Source: {stat.source}
                  </p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-danger/5 to-warning/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            );
          })}
        </div>

        {/* Human Impact Section */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-danger/10 to-warning/10 rounded-2xl p-8 border-l-4 border-danger">
            <h3 className="text-2xl font-bold text-surface-foreground mb-6 flex items-center">
              <Heart className="w-6 h-6 text-danger mr-3" />
              Beyond the Numbers: Real Human Suffering
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emotionalImpacts.map((impact, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-primary-foreground/50 hover:bg-primary-foreground/70 transition-colors duration-300"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-danger rounded-full mt-2 flex-shrink-0" />
                  <p className="text-surface-foreground/80 text-sm leading-relaxed">{impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <div className="bg-primary rounded-xl p-6 max-w-3xl mx-auto shadow-floating border border-primary-dark">
            <p className="text-primary-foreground text-lg leading-relaxed">
              <span className="font-bold">Enough is enough.</span> Job seekers deserve protection from sophisticated 
              scams that prey on desperation and hope. It's time for a solution that fights back.
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
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
          
          <Button
            onClick={onNext}
            size="lg"
            className="group bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-primary-foreground shadow-elevated"
          >
            Enter Job Scamalyzer
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};