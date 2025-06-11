import { ArrowDown, ArrowUp, TrendingUp, BarChart3, Zap, Target, Clock, Brain, MessageCircle, CheckCircle, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ScrollReveal } from '@/components/ScrollReveal';
import { FloatingElements } from '@/components/FloatingElements';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const Index = () => {
  const whatsappLink = "https://wa.me/5521998883771?text=Olá! Gostaria de saber mais sobre a IA da Duop para investimentos.";

  const handleWhatsAppClick = (section: string) => {
    // Enviar evento para o GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'whatsapp_click',
      button_section: section,
      button_id: `cta-${section}`,
      button_text: 'WhatsApp',
      button_url: whatsappLink
    });
    
    console.log(`WhatsApp CTA clicked from: ${section}`);
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
      <FloatingElements />
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => handleWhatsAppClick('floating')}
          id="cta-floating-whatsapp"
          size="lg"
          className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 sm:w-auto sm:h-auto sm:px-6 sm:py-3 group"
        >
          <MessageCircle className="w-8 h-8 sm:w-5 sm:h-5 sm:mr-2 animate-bounce" />
          <span className="hidden sm:inline">Fale Conosco</span>
          {/* Tooltip para mobile */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:hidden">
            Fale Conosco
          </span>
        </Button>
      </div>

      {/* Hero Section */}
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
                  onClick={() => handleWhatsAppClick('hero-primary')}
                  id="cta-hero-primary"
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 whitespace-normal sm:whitespace-nowrap group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0 group-hover:animate-bounce" />
                  Falar com Especialista no WhatsApp
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

      {/* Problem Section */}
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

      {/* Solution Section */}
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
              {/* Feedback 1 */}
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

              {/* Feedback 2 */}
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

              {/* Feedback 3 */}
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

      {/* Quem Somos Section */}
      <ScrollReveal>
        <section className="py-12 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
                Quem Somos
              </h2>
              <p className="text-xl text-gray-300 hover:text-gray-200 transition-colors duration-300">
                Conheça os sócios por trás da Duop
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Rodrigo Lamas */}
              <ScrollReveal delay={200}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                  <div className="aspect-[4/5] mb-4 overflow-hidden rounded-xl max-w-[240px] mx-auto">
                    <img 
                      src="/Lamas.png" 
                      alt="Rodrigo Lamas" 
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Rodrigo Lamas</h3>
                  <p className="text-blue-400 font-medium mb-3">Sócio Fundador</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Engenheiro pelo ITA e matemática pela UFJF. Mestre em Economia e finanças pela FGV EPGE e doutor em Administração pela FGV EBAPE. Sócio fundador da Rede de Ensino Apogeu, responsável pela M&A entre o Grupo PENSI de Ensino e Gera Venture Capital que criou a Holding Eleva de Educação.
                  </p>
                </div>
              </ScrollReveal>

              {/* Philippe Drevon */}
              <ScrollReveal delay={400}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                  <div className="aspect-[4/5] mb-4 overflow-hidden rounded-xl max-w-[240px] mx-auto">
                    <img 
                      src="/Lipe.png" 
                      alt="Philippe Drevon" 
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Philippe Drevon</h3>
                  <p className="text-emerald-400 font-medium mb-3">Sócio</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Engenheiro pela Puc RJ. Mestre em Economia e finanças pela EPGE FGV. 12 anos no mercado financeiro, 9 anos na gestão de fundos multimercados.
                  </p>
                </div>
              </ScrollReveal>

              {/* Gustavo Teixeira */}
              <ScrollReveal delay={600}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                  <div className="aspect-[4/5] mb-4 overflow-hidden rounded-xl max-w-[240px] mx-auto">
                    <img 
                      src="/Teix.png" 
                      alt="Gustavo Teixeira" 
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Gustavo Teixeira, CFA</h3>
                  <p className="text-purple-400 font-medium mb-3">Sócio</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Engenheiro pela Puc RJ. 14 anos no mercado financeiro, 9 anos na gestão de fundos multimercados e 5 anos em assessoria de investimentos.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <ScrollReveal delay={200}>
                  <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 border-blue-500/30 p-8 hover:from-blue-500/30 hover:to-blue-600/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                    <div className="text-center">
                      <div className="bg-blue-500/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                        <BarChart3 className="w-10 h-10 text-blue-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Investidores que Amam Dados</h3>
                      <p className="text-white text-base mb-6 leading-relaxed">
                        Você busca informações detalhadas antes de investir e não se satisfaz com análises superficiais
                      </p>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center text-white text-base">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-300 animate-pulse" />
                          <span>Analisa múltiplos indicadores</span>
                        </div>
                        <div className="flex items-center text-white text-base">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-300 animate-pulse" />
                          <span>Compara ativos em detalhes</span>
                        </div>
                        <div className="flex items-center text-white text-base">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-300 animate-pulse" />
                          <span>Acompanha fatos relevantes</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
                
                <ScrollReveal delay={400}>
                  <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 border-emerald-500/30 p-8 hover:from-emerald-500/30 hover:to-emerald-600/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                    <div className="text-center">
                      <div className="bg-emerald-500/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                        <Clock className="w-10 h-10 text-emerald-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Analistas Eficientes</h3>
                      <p className="text-white text-base mb-6 leading-relaxed">
                        Profissionais que querem otimizar seu tempo de análise sem perder qualidade nas decisões
                      </p>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center text-white text-base">
                          <CheckCircle className="w-5 h-5 mr-2 text-emerald-300 animate-pulse" />
                          <span>Economiza horas de pesquisa</span>
                        </div>
                        <div className="flex items-center text-white text-base">
                          <CheckCircle className="w-5 h-5 mr-2 text-emerald-300 animate-pulse" />
                          <span>Centraliza informações</span>
                        </div>
                        <div className="flex items-center text-white text-base">
                          <CheckCircle className="w-5 h-5 mr-2 text-emerald-300 animate-pulse" />
                          <span>Automatiza relatórios</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
                
                <ScrollReveal delay={600}>
                  <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/30 border-purple-500/30 p-8 hover:from-purple-500/30 hover:to-purple-600/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                    <div className="text-center">
                      <div className="bg-purple-500/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                        <TrendingUp className="w-10 h-10 text-purple-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Entusiastas de FIIs</h3>
                      <p className="text-white text-base mb-6 leading-relaxed">
                        Especialistas em renda fixa que querem expandir horizontes com inteligência artificial
                      </p>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center text-white text-base">
                          <CheckCircle className="w-5 h-5 mr-2 text-purple-300 animate-pulse" />
                          <span>Análise profunda de FIIs</span>
                        </div>
                        <div className="flex items-center text-white text-base">
                          <CheckCircle className="w-5 h-5 mr-2 text-purple-300 animate-pulse" />
                          <span>Segmentação automática</span>
                        </div>
                        <div className="flex items-center text-white text-base">
                          <CheckCircle className="w-5 h-5 mr-2 text-purple-300 animate-pulse" />
                          <span>Tendências do setor</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={800}>
                <div className="text-center">
                  <p className="text-lg text-gray-300 mb-8 hover:text-gray-200 transition-colors duration-300">
                    <strong className="text-white">Reconhece seu perfil?</strong> A Duop foi criada pensando exatamente em você.
                  </p>
                  <Button 
                    onClick={() => handleWhatsAppClick('target-audience')}
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

      {/* Final CTA */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
                Pronto para Revolucionar seus Investimentos?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
                Seja um dos primeiros a experimentar a IA da Duop. Conversação gratuita no WhatsApp.
              </p>
              
              <Button 
                onClick={() => handleWhatsAppClick('final-cta')}
                id="cta-final"
                size="lg" 
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-4 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 mb-4 whitespace-normal sm:whitespace-nowrap group"
              >
                <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0 group-hover:animate-bounce" />
                Quero uma Demonstração da IA (WhatsApp)
              </Button>
              
              <p className="text-blue-100 text-sm hover:text-white transition-colors duration-300">
                💬 Resposta em menos de 1 hora | ✨ Demonstração personalizada | 🚀 Acesso early adopter
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="py-8 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <img src="/duop-logo.png" alt="Duop" className="w-auto h-8 hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-gray-400 mb-4 hover:text-gray-300 transition-colors duration-300">Inteligência Artificial para Decisões de Investimento</p>
            <p className="text-gray-500 text-sm">© 2024 Duop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
