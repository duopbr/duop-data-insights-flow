
export const Footer = () => {
  return (
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
  );
};
