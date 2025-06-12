import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingElements } from '@/components/FloatingElements';
import ContactForm from '@/components/ContactForm';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Footer } from '@/components/sections/Footer';
import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card } from '@/components/ui/card';
import { Zap, Target, BarChart3, Clock, Brain, TrendingUp, CheckCircle, Star } from 'lucide-react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const Index = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [currentButtonSection, setCurrentButtonSection] = useState('');

  const handleButtonClick = (section: string) => {
    // Enviar evento para o GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'contact_form_open',
      button_section: section,
      button_id: `cta-${section}`,
      button_text: 'Abrir Formulário'
    });
    
    console.log(`Contact form opened from: ${section}`);
    setCurrentButtonSection(section);
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
      <FloatingElements />
      
      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        buttonSection={currentButtonSection}
      />
      
      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => handleButtonClick('floating')}
          id="cta-floating-contact"
          size="lg"
          className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 sm:w-auto sm:h-auto sm:px-6 sm:py-3 group"
        >
          <MessageCircle className="w-8 h-8 sm:w-5 sm:h-5 sm:mr-2 animate-bounce" />
          <span className="hidden sm:inline">Fale Conosco</span>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:hidden">
            Fale Conosco
          </span>
        </Button>
      </div>

      <HeroSection onButtonClick={handleButtonClick} />
      <ProblemSection />
      <SolutionSection />

      {/* Benefits Section */}
      <ScrollReveal>
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
                Por Que Escolher a Duop?
              </h2>
              <p className="text-xl text-gray-300 hover:text-gray-200 transition-colors duration-300">
                Seja um dos primeiros a experimentar o futuro dos investimentos com IA
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <ScrollReveal delay={200}>
                <Card className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                  <div className="text-center">
                    <div className="bg-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Investidores que Amam Dados</h3>
                    <p className="text-white text-lg mb-8">
                      Você busca informações detalhadas antes de investir e não se satisfaz com análises superficiais
                    </p>
                    <div className="space-y-4 text-left">
                      <div className="flex items-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 mr-3 text-blue-400 animate-pulse" />
                        <span className="text-white text-lg">Analisa múltiplos indicadores</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 mr-3 text-blue-400 animate-pulse" />
                        <span className="text-white text-lg">Compara ativos em detalhes</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 mr-3 text-blue-400 animate-pulse" />
                        <span className="text-white text-lg">Acompanha fatos relevantes</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <Card className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                  <div className="text-center">
                    <div className="bg-emerald-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                      <Clock className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Analistas Eficientes</h3>
                    <p className="text-white text-lg mb-8">
                      Profissionais que querem otimizar seu tempo de análise sem perder qualidade nas decisões
                    </p>
                    <div className="space-y-4 text-left">
                      <div className="flex items-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 mr-3 text-emerald-400 animate-pulse" />
                        <span className="text-white text-lg">Economiza horas de pesquisa</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 mr-3 text-emerald-400 animate-pulse" />
                        <span className="text-white text-lg">Centraliza informações</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 mr-3 text-emerald-400 animate-pulse" />
                        <span className="text-white text-lg">Automatiza relatórios</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <Card className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                  <div className="text-center">
                    <div className="bg-purple-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-8">Entusiastas de FIIs</h3>
                    <p className="text-white text-lg mb-8">
                      Especialistas em renda fixa que querem expandir horizontes com inteligência artificial
                    </p>
                    <div className="space-y-4 text-left">
                      <div className="flex items-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 mr-3 text-purple-400 animate-pulse" />
                        <span>Análise profunda de FIIs</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 mr-3 text-purple-400 animate-pulse" />
                        <span>Segmentação automática</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 mr-3 text-purple-400 animate-pulse" />
                        <span>Tendências do setor</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group">
                  <Zap className="w-12 h-12 text-blue-400 mb-4 group-hover:animate-bounce" />
                  <h3 className="text-lg font-semibold text-white mb-3">Economia de Tempo</h3>
                  <p className="text-gray-300">Economize horas de pesquisa manual e análise complexa</p>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group">
                  <Target className="w-12 h-12 text-purple-400 mb-4 group-hover:animate-pulse" />
                  <h3 className="text-lg font-semibold text-white mb-3">Oportunidades Únicas</h3>
                  <p className="text-gray-300">Identifique oportunidades que passariam despercebidas</p>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group">
                  <BarChart3 className="w-12 h-12 text-emerald-400 mb-4 group-hover:animate-bounce" />
                  <h3 className="text-lg font-semibold text-white mb-3">Dados Simplificados</h3>
                  <p className="text-gray-300">Acesse dados complexos de forma visual e simplificada</p>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group">
                  <Brain className="w-12 h-12 text-blue-400 mb-4 group-hover:animate-pulse" />
                  <h3 className="text-lg font-semibold text-white mb-3">Early Adopter</h3>
                  <p className="text-gray-300">Seja um dos primeiros a usar a tecnologia do futuro</p>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group">
                  <TrendingUp className="w-12 h-12 text-purple-400 mb-4 group-hover:animate-bounce" />
                  <h3 className="text-lg font-semibold text-white mb-3">Análise Avançada</h3>
                  <p className="text-gray-300">Ferramentas de comparação e análise de performance</p>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Feedbacks Section */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
                O Que Nossos Usuários Dizem
              </h2>
              <p className="text-xl text-gray-300 hover:text-gray-200 transition-colors duration-300">
                Experiências reais de quem já utiliza nossa IA
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <ScrollReveal delay={200}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl group-hover:animate-pulse">
                      R
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Ricardo M.</h4>
                      <p className="text-gray-400 text-sm">Investidor Profissional</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "A rapidez com que recebo informações relevantes no WhatsApp mudou completamente minha forma de investir. Consigo tomar decisões muito mais embasadas agora."
                  </p>
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl group-hover:animate-pulse">
                      A
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Ana P.</h4>
                      <p className="text-gray-400 text-sm">Analista de FIIs</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "A análise profunda dos FIIs é impressionante. A IA consegue identificar padrões e oportunidades que eu levaria dias para encontrar manualmente."
                  </p>
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl group-hover:animate-pulse">
                      M
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Marcos S.</h4>
                      <p className="text-gray-400 text-sm">Gestor de Carteira</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Economizo horas de análise com as informações centralizadas. A interpretação dos fatos relevantes pela IA é um diferencial incrível."
                  </p>
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                    <Star className="w-5 h-5 fill-current animate-pulse" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <TeamSection />

      {/* How it Works */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
                Como Funciona?
              </h2>
              <p className="text-xl text-gray-300 hover:text-gray-200 transition-colors duration-300">
                Simples, rápido e eficiente
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <ScrollReveal delay={200}>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:animate-pulse">1</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Conecte seus Interesses</h3>
                  <p className="text-gray-300">Nos conte quais ativos e setores você acompanha</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:animate-pulse">2</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Receba Insights da IA</h3>
                  <p className="text-gray-300">Nossa IA analisa e entrega informações personalizadas</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:animate-pulse">3</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Invista com Confiança</h3>
                  <p className="text-gray-300">Tome decisões embasadas em dados e IA</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Target Audience - Enhanced Section */}
      <ScrollReveal>
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
                  Para Quem é a Duop?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto hover:text-gray-200 transition-colors duration-300">
                  Desenvolvida especialmente para investidores que valorizam dados detalhados e análises profundas
                </p>
              </div>
              
              {/* Target audience cards are already included in the benefits section above */}

              <ScrollReveal delay={800}>
                <div className="text-center">
                  <p className="text-lg text-gray-300 mb-8 hover:text-gray-200 transition-colors duration-300">
                    <strong className="text-white">Reconhece seu perfil?</strong> A Duop foi criada pensando exatamente em você.
                  </p>
                  <Button 
                    onClick={() => handleButtonClick('target-audience')}
                    id="cta-target-audience"
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap group"
                  >
                    <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0 group-hover:animate-bounce" />
                    Quero Conhecer a Duop Agora
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <FinalCTASection onButtonClick={handleButtonClick} />
      <Footer />
    </div>
  );
};

export default Index;
