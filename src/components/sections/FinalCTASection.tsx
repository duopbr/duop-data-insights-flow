
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

interface FinalCTASectionProps {
  onButtonClick: (section: string) => void;
}

export const FinalCTASection = ({ onButtonClick }: FinalCTASectionProps) => {
  return (
    <ScrollReveal>
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
              Pronto para Revolucionar seus Investimentos?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
              Seja um dos primeiros a experimentar a IA da Duop. Conversação gratuita.
            </p>
            
            <Button 
              onClick={() => onButtonClick('final-cta')}
              id="cta-final"
              size="lg" 
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-4 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 mb-4 whitespace-normal sm:whitespace-nowrap group"
            >
              <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0 group-hover:animate-bounce" />
              Quero uma Demonstração da IA
            </Button>
            
            <p className="text-blue-100 text-sm hover:text-white transition-colors duration-300">
              💬 Resposta em menos de 1 hora | ✨ Demonstração personalizada | 🚀 Acesso early adopter
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
