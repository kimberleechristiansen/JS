import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, AlertTriangle } from "lucide-react";

interface IntroSlideProps {
  onNext: () => void;
}

export const IntroSlide = ({ onNext }: IntroSlideProps) => {
  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-light/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-warning/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-danger/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-8 text-center">
        {/* Main content */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-16 h-16 text-primary-foreground mr-4" />
            <h1 className="text-6xl font-bold text-primary-foreground">
              Job Scamalyzer
            </h1>
          </div>
          
          {/* Tagline */}
          <p className="text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
            Your AI-powered shield against job scams and career fraud
          </p>
          
          {/* Warning sign inspired by your image */}
          <div className="relative inline-block mb-12 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-primary-foreground rounded-2xl p-8 shadow-floating transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 text-warning mr-3" />
                <h2 className="text-3xl font-bold text-foreground">NOW HIRING</h2>
              </div>
              <p className="text-xl text-foreground font-semibold leading-tight">
                THE JOB HUNT<br />
                IS BROKEN — AND<br />
                YOU'RE THE TARGET
              </p>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            In 2024, job scams surged by 118%. Fake postings, identity theft, and financial fraud 
            are targeting desperate job seekers. It's time to fight back.
          </p>
          
          {/* CTA Button */}
          <Button
            onClick={onNext}
            size="lg"
            variant="secondary"
            className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-elevated transform hover:scale-105 transition-all duration-300"
          >
            Discover the Reality
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Bottom indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
            <div className="w-3 h-3 bg-primary-foreground/40 rounded-full"></div>
            <div className="w-3 h-3 bg-primary-foreground/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};