
import React from 'react';

const Feature = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center space-x-3">
        {icon}
        <span className="font-semibold text-gray-300 text-sm">{text}</span>
    </div>
);

export const Bonus = () => {
    const iconCpu = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-blue-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5M19.5 8.25h1.5M19.5 12h1.5m-1.5 3.75h1.5M15.75 21v-1.5M12 4.5v15" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h9v9h-9z" />
        </svg>
    );

    const iconLightning = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    );

    const iconTarget = (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
    );

    const iconRibbon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );


    return (
        <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                BONUS EXCLUSIVO
            </h2>
            <p className="text-lg text-gray-400 mb-12">
                Quien adquiere VEO3 también recibe
            </p>

            <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-[#1a112a]/80 to-[#0f0b1e]/80 border border-blue-500/30 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_-15px_rgba(70,80,255,0.2)] backdrop-blur-md">
                <div 
                    className="absolute inset-0 -z-10 opacity-20"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(0, 112, 243, 0.4) 0%, rgba(0, 112, 243, 0) 60%)'
                    }}
                ></div>

                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-blue-900/40 border border-blue-500/50 rounded-full flex items-center justify-center">
                        {iconCpu}
                    </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    AGENTE DE IA EXCLUSIVO
                </h3>

                <div className="my-4">
                    <span className="inline-block text-xs font-semibold text-purple-300 bg-purple-900/50 border border-purple-500/30 rounded-full px-3 py-1">
                        ● EN FASE FINAL DE PRUEBAS
                    </span>
                </div>
                
                <h4 className="text-xl font-semibold text-blue-300 tracking-wider">
                    PARA GENERACIÓN DE PROMPTS
                </h4>

                <p className="mt-4 max-w-xl mx-auto text-gray-400">
                    Una inteligencia artificial entrenada específicamente para crear prompts perfectos para VEO 3. Simplemente describe tu idea y nuestra IA generará el prompt optimizado para resultados profesionales.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
                    <Feature icon={iconLightning} text="Generación Instantánea" />
                    <Feature icon={iconTarget} text="Prompts Optimizados" />
                    <Feature icon={iconRibbon} text="Resultados Profesionales" />
                </div>
            </div>
        </section>
    );
};
