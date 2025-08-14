
import React from 'react';

export const Cost = () => {
    return (
        <section className="max-w-3xl mx-auto text-center">
            <div className="bg-[#111827]/60 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    Deja de Gastar en Créditos.<br />El Ahorro es Absurdo.
                </h2>
                
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Custo com créditos */}
                    <div className="bg-black/30 p-6 rounded-xl">
                        <p className="text-base font-semibold text-gray-300">Costo por 200 Videos</p>
                        <p className="mt-1 text-sm text-gray-400">En el modelo de créditos</p>
                        <p className="mt-2 text-5xl font-extrabold text-red-500 line-through">
                            R$375,50
                        </p>
                         <p className="mt-2 text-xs text-gray-400">Un costo que impide la escala y las pruebas.</p>
                    </div>

                    {/* Nossa Oferta */}
                    <div className="bg-black/30 p-6 rounded-xl">
                        <p className="text-base font-semibold text-gray-300">Videos que Venden con IA</p>
                        <p className="mt-1 text-sm text-gray-400">Crea cuantos quieras directamente en tu cuenta por:</p>
                        <p className="mt-2 text-5xl font-extrabold text-green-400">
                            R$ 0
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
