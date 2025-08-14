
import React from 'react';
import { GradientButton } from './components/Hero';
import { Comparison } from './components/Comparison';
import { Cost } from './components/Cost';
import { Examples } from './components/Examples';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Bonus } from './components/Bonus';
import { Faq } from './components/Faq';


function App() {
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0A0F1A] text-gray-300 antialiased">
      <div className="relative isolate overflow-hidden">
        {/* Background gradient and decorative elements */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#111827] via-[#0A0F1A] to-[#0A0F1A]"></div>
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff3b3b] to-[#0070f3] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <header className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
              ¡Crea Vídeos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Ilimitados</span> con el Secreto VEO 3!
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
              Métodos de acceso a VEO3 y Gemini Pro para crear creativos que venden, pagando menos que un almuerzo.
            </p>
            
            <div className="mt-10 w-full max-w-3xl">
              <div className="aspect-video w-full bg-black/50 border border-white/10 rounded-xl shadow-2xl shadow-blue-500/10 overflow-hidden">
                <iframe 
                    className="w-full h-full" 
                    src="https://www.youtube.com/embed/tFEctvEAsck" 
                    title="Descubra o Hack por Trás dos Vídeos de IA Mais Virais e Realistas do Momento | VEO3" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
              </div>
            </div>
            
            <div className="mt-10">
              <GradientButton onClick={handleScrollToPricing}>QUIERO MI ACCESO AHORA</GradientButton>
            </div>
        </header>

        <main className="container mx-auto px-6 pb-24 md:pb-32 space-y-20 md:space-y-28">
          <Comparison />
          <Cost />
          <Examples />
          <HowItWorks />
          <Pricing />
          <Bonus />
          <Faq />
        </main>
        
        <footer className="text-center py-8 border-t border-white/10">
            <p className="text-gray-500">&copy; 2025 Secreto VEO3. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
