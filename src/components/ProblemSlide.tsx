import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, TrendingUp, Users, Eye, DollarSign } from "lucide-react";

interface ProblemSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const ProblemSlide = ({ onNext, onPrev }: ProblemSlideProps) => {
  const stats = [
    {
      percentage: "40%",
      title: "OF COMPANIES POST",
      subtitle: "FAKE JOB LISTINGS",
      source: "Resume Builder Study - CBS News 2024",
      icon: Eye,
      gradient: "from-warning to-danger"
    },
    {
      percentage: "118%",
      title: "SURGE IN JOB SCAMS",
      subtitle: "2023-2024",
      source: "CNBC Report 2024",
      icon: TrendingUp,
      gradient: "from-danger to-warning"
    },
    {
      percentage: "30%",
      title: "OF COMPANIES HAVE",
      subtitle: "ACTIVE FAKE LISTINGS",
      source: "Resume Builder - CBS News 2024",
      icon: Users,
      gradient: "from-primary to-primary-dark"
    },
    {
      percentage: "$2.7M",
      title: "IN LOSSES REPORTED",
      subtitle: "FIRST 4 MONTHS 2025",
      source: "Back Office Pro Study 2025",
      icon: DollarSign,
      gradient: "from-warning to-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface flex items-center justify-center relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(239,68,68,0.1),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl font-bold text-primary mb-6">THE PROBLEM</h1>
          <p className="text-xl text-surface-foreground/80 max-w-3xl mx-auto leading-relaxed">
            The job market has become a hunting ground for scammers. Major media outlets have exposed 
            the devastating reality facing job seekers in 2024-2025.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br bg-primary/10 hover:bg-primary/15 transition-all duration-500 shadow-card hover:shadow-elevated animate-scale-in border border-primary/20"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  background: `linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--primary-dark) / 0.15))`
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${stat.gradient} shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Percentage */}
                <div className="text-center mb-4">
                  <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.percentage}
                  </div>
                  <div className="text-lg font-bold text-surface-foreground">
                    {stat.title}
                  </div>
                  <div className="text-lg font-bold text-surface-foreground/80">
                    {stat.subtitle}
                  </div>
                </div>
                
                {/* Source */}
                <div className="text-center">
                  <p className="text-sm text-surface-foreground/60 font-medium">
                    {stat.source}
                  </p>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            );
          })}
        </div>

        {/* Additional context */}
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="bg-primary-foreground/95 rounded-xl p-6 max-w-4xl mx-auto shadow-card border border-primary/20">
            <p className="text-surface-foreground leading-relaxed">
              <span className="font-semibold text-primary">Major outlets like CBS News, CNN, and CNBC</span> have 
              reported on the alarming rise of fake job postings, "ghost jobs," and sophisticated scams targeting 
              vulnerable job seekers. The problem includes identity theft, data harvesting, and financial fraud.
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
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-primary/40 rounded-full"></div>
          </div>
          
          <Button
            onClick={onNext}
            size="lg"
            className="group bg-primary hover:bg-primary-dark text-primary-foreground"
          >
            See the Damage
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};