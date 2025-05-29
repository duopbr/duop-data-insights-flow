
export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Elementos flutuantes animados */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-ping"></div>
      <div className="absolute top-32 right-20 w-6 h-6 bg-emerald-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-10 w-5 h-5 bg-cyan-400/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-pink-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};
