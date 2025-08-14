
import React from 'react';

const Step = ({ number, title, description }: { number: string, title: string, description: string }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center font-extrabold text-white text-xl">
            {number}
        </div>
        <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="mt-1 text-gray-400">{description}</p>
        </div>
    </div>
);

export const HowItWorks = () => {
    return (
        <section className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">🔓 Cómo Funciona (en 3 Pasos):</h2>
            <div className="mt-10 space-y-8">
                <Step 
                    number="1" 
                    title="Realiza el pago"
                    description="Y se aprueba al instante."
                />
                <Step 
                    number="2" 
                    title="Recibe tu acceso"
                    description="Acceso inmediato al área de miembros por correo electrónico."
                />
                <Step 
                    number="3" 
                    title="Comienza a crear"
                    description="Crea creativos con VEO 3 que convierten en ventas."
                />
            </div>
        </section>
    );
};
