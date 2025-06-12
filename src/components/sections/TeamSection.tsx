
import { ScrollReveal } from '@/components/ScrollReveal';

export const TeamSection = () => {
  return (
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
  );
};
