import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-12rem)] text-white px-4 text-center">
      <div className="mt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome!</h1>
        <h2 className="text-3xl md:text-5xl font-light mb-12">I'm Jani Szlatenyi</h2>
      </div>
      
      {/* Company Buttons - moved to the bottom */}
      <div className="flex flex-col sm:flex-row gap-4 mb-20">
        <a 
          href="https://hermesfinances.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50 rounded-full px-8 py-3 transition-all duration-300"
        >
          Hermes Finances
        </a>
        <a 
          href="https://midasfinances.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50 rounded-full px-8 py-3 transition-all duration-300"
        >
          Midas Finances
        </a>
      </div>
    </div>
  );
} 