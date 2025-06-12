
import { ArrowDown, Brain, MessageCircle, Sparkles, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ScrollReveal } from '@/components/ScrollReveal';

interface HeroSectionProps {
  onButtonClick: (section: string) => void;
}

export const HeroSection = ({ onButtonClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        {/* Logo no canto superior esquerdo */}
        <div className="absolute top-8 left-8 animate-fade-in">
          <img src="/duop-logo.png" alt="Duop" className="w-auto h-8 hover:scale-110 transition-transform duration-300" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={200}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 text-white hover:bg-white/20 transition-all duration-300 group">
              <Brain className="w-4 h-4 group-hover:animate-pulse" />
              <span className="text-sm font-medium">Inteligência Artificial para Investimentos</span>
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Dados de mercado no <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">Whatsapp</span>. 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-blue-400 transition-all duration-500">Rapidez</span> que só a 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition-all duration-500"> IA </span> 
              da Duop te possibilita.
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Nossa <span className="text-purple-400 hover:text-purple-300 transition-colors duration-300">IA</span> é focada em <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">ações</span>, 
              <span className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"> Fundos imobiliários</span> e <span className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">títulos de Renda Fixa</span>, 
              tudo em um lugar só.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => onButtonClick('hero-primary')}
                id="cta-hero-primary"
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap group"
              >
                <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0 group-hover:animate-bounce" />
                Falar com Especialista
              </Button>
              <p className="text-gray-400 text-sm animate-pulse">✨ Demonstração gratuita</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={1000}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-300 transform hover:scale-105 group">
                <TrendingUp className="w-8 h-8 text-emerald-400 mb-2 mx-auto group-hover:animate-bounce" />
                <p className="text-white font-medium">+<AnimatedCounter end={500} />FIIs Analisados</p>
                <p className="text-gray-400 text-sm">Indicadores em tempo real</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 group">
                <BarChart3 className="w-8 h-8 text-blue-400 mb-2 mx-auto group-hover:animate-bounce" />
                <p className="text-white font-medium">+<AnimatedCounter end={300} /> Ações & Dividendos</p>
                <p className="text-gray-400 text-sm">Histórico e previsões</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 transform hover:scale-105 group">
                <Brain className="w-8 h-8 text-purple-400 mb-2 mx-auto group-hover:animate-pulse" />
                <p className="text-white font-medium"><AnimatedCounter end={24} suffix="h" /> Insights de IA</p>
                <p className="text-gray-400 text-sm">Análise automatizada</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60 hover:text-white transition-colors duration-300" />
      </div>
    </section>
  );
};
