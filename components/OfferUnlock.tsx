
import React from 'react';

export const OfferUnlock = () => {
    return (
        <section className="text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">🚀 Descubre el Secreto VEO3</h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-400">
                Ten acceso ilimitado a IAs para crear creativos que venden, pagando menos que un almuerzo.
            </p>

            <div className="mt-10 w-full max-w-4xl">
                 <h3 className="text-2xl md:text-3xl font-bold text-white">🎥 Mira lo que desbloquearás con el Secreto VEO3</h3>
                 <p className="mt-3 text-gray-400">Acceso vitalicio, videos ilimitados y un método probado para escalar tus campañas con creativos de alta conversión.</p>
                <div className="mt-6 aspect-video w-full bg-black/50 border border-white/10 rounded-xl shadow-2xl shadow-blue-500/10 flex items-center justify-center">
                    <div className="text-center p-4">
                        <p className="font-semibold text-gray-300">[VIDEO EXPLICANDO LA OFERTA Y LO QUE RECIBIRÁS]</p>
                        <div className="mt-4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <p className="text-xl animate-bounce">👇</p>
                <button className="mt-2 font-semibold text-lg bg-gradient-to-r from-blue-600 to-red-600 text-white px-10 py-4 rounded-lg shadow-lg transition-transform hover:scale-105">
                    🔘 QUIERO MI ACCESO AHORA
                </button>
            </div>
        </section>
    );
};
