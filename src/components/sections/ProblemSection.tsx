
import { Clock, Target, BarChart3 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ScrollReveal } from '@/components/ScrollReveal';

export const ProblemSection = () => {
  return (
    <ScrollReveal>
      <section className="py-20 bg-slate-800/50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 hover:text-gray-200 transition-colors duration-300">
              Cansado de Perder Oportunidades por Falta de Dados?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ScrollReveal delay={200}>
                <Card className="bg-red-500/10 border-red-500/20 p-6 hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                  <Clock className="w-12 h-12 text-red-400 mb-4 mx-auto group-hover:animate-spin" />
                  <h3 className="text-lg font-semibold text-white mb-2">Horas Perdidas</h3>
                  <p className="text-gray-300">Navegando em dezenas de sites para encontrar informações sobre FIIs e ações</p>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <Card className="bg-red-500/10 border-red-500/20 p-6 hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                  <Target className="w-12 h-12 text-red-400 mb-4 mx-auto group-hover:animate-pulse" />
                  <h3 className="text-lg font-semibold text-white mb-2">Análise Superficial</h3>
                  <p className="text-gray-300">Dificuldade em acompanhar fatos relevantes e seu impacto real nos investimentos</p>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <Card className="bg-red-500/10 border-red-500/20 p-6 hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                  <BarChart3 className="w-12 h-12 text-red-400 mb-4 mx-auto group-hover:animate-bounce" />
                  <h3 className="text-lg font-semibold text-white mb-2">Comparações Limitadas</h3>
                  <p className="text-gray-300">Impossível comparar rentabilidade de diferentes ativos de forma rápida e inteligente</p>
                </Card>
              </ScrollReveal>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 hover:text-gray-200 transition-colors duration-300">
              Você merece algo melhor. Uma solução que entende sua necessidade por dados detalhados.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
