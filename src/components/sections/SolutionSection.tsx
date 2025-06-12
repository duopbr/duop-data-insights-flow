
import { TrendingUp, ArrowUp, Brain, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

export const SolutionSection = () => {
  return (
    <ScrollReveal>
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-emerald-900/50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
                Conheça a <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Duop</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto hover:text-gray-200 transition-colors duration-300">
                A primeira IA brasileira que transforma a complexidade do mercado financeiro em decisões de investimento inteligentes e embasadas
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <ScrollReveal delay={200}>
                    <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="bg-blue-500 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Fundos Imobiliários (FIIs)</h3>
                        <p className="text-gray-300">Acesso fácil a indicadores, relatórios e segmentação automatizada</p>
                      </div>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={400}>
                    <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="bg-emerald-500 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                        <ArrowUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Ações & Dividendos</h3>
                        <p className="text-gray-300">Análise de histórico, previsibilidade e saúde financeira das empresas</p>
                      </div>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={600}>
                    <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="bg-purple-500 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Fatos Relevantes</h3>
                        <p className="text-gray-300">IA que interpreta o impacto real das informações no seu portfólio</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
              
              <ScrollReveal delay={800}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 group">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">HGLG11</span>
                        <span className="text-emerald-400 font-semibold animate-pulse">+2.3%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full transition-all duration-1000 group-hover:w-full w-3/4"></div>
                      </div>
                      <p className="text-sm text-gray-400">IA detectou: Aumento na ocupação dos imóveis</p>
                      <div className="flex items-center gap-2 text-xs text-emerald-400">
                        <Sparkles className="w-3 h-3 animate-pulse" />
                        <span>Oportunidade identificada pela IA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
