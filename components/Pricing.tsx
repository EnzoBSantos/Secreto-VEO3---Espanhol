import React from 'react';

const CheckIcon = () => (
    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

const DiamondIcon = () => (
    <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 12l10 10 10-12L12 2z" />
    </svg>
);

const essentialFeatures = [
    'Ten Gemini Pro y VEO3 en tu cuenta',
    '100 Prompts para Veo3',
    'Acceso Vitalicio',
];

const completeFeatures = [
    'Ten Gemini Pro y VEO3 en tu cuenta',
    '+200 Prompts listos para usar',
    'Agente Exclusivo Especialista en Crear Prompts',
    'Módulo: Creando Prompts desde Cero',
    'Módulo: Consistencia de Personaje',
    'Módulo: Estructuras que Venden',
    'Acceso Vitalicio',
];

const PlanButton = ({ href, text, featured = false }: { href: string, text: string, featured?: boolean }) => {
    const commonClasses = "mt-10 w-full font-bold rounded-lg py-3.5 px-6 flex items-center justify-center gap-3 tracking-wider shadow-lg hover:scale-[1.03] transition-all duration-300";

    const featuredStyles = {
        button: "bg-gradient-to-r from-blue-600 to-red-600 text-white hover:shadow-blue-500/40",
        iconWrapper: "border-white/50",
        iconDot: "bg-white",
    };

    const normalStyles = {
        button: "bg-white/5 border border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30",
        iconWrapper: "border-gray-500",
        iconDot: "bg-gray-500",
    };

    const styles = featured ? featuredStyles : normalStyles;

    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${commonClasses} ${styles.button}`}
        >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${styles.iconWrapper}`}>
                <div className={`w-2.5 h-2.5 rounded-full ${styles.iconDot}`}></div>
            </div>
            <span>{text}</span>
        </a>
    );
};

export const Pricing = () => {
    return (
        <section id="pricing">
            <div className="max-w-lg mx-auto px-4">
                
                <div className="mb-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/40 rounded-2xl p-6 shadow-lg shadow-green-500/10">
                    <div className="flex flex-col items-center justify-center gap-3 text-center">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.502L16.5 21.75l-.398-1.248a3.375 3.375 0 00-2.455-2.456L12.75 18l1.248-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.248a3.375 3.375 0 002.456 2.456l1.248.398-1.248.398a3.375 3.375 0 00-2.456 2.456z" />
                        </svg>
                        <p className="font-bold text-lg text-green-200">
                            ¡Recibe Actualizaciones de Nuevos Métodos Sin Pagar Nada Adicional por ello!
                        </p>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">🛒 Garantiza Tu Acceso Completo:</h2>

                {/* Plano Essencial */}
                <div className="bg-gradient-to-br from-[#1E2A47] to-[#121827] border border-blue-500/20 rounded-2xl p-6 sm:p-8 text-white flex flex-col mb-8">
                    <div className="flex items-center gap-3">
                        <DiamondIcon />
                        <h3 className="text-xl font-bold uppercase tracking-wider text-white">PLAN ESENCIAL</h3>
                    </div>

                    <p className="mt-3 text-gray-400">Ideal para quien quiere empezar con toda la fuerza.</p>
                    
                    <div className="mt-6 flex items-baseline gap-2">
                        <p className="text-5xl font-extrabold text-white">6,99</p>
                        <p className="text-gray-400 text-sm">(pago único)</p>
                    </div>

                    <ul className="mt-8 space-y-4 text-left flex-grow">
                        {essentialFeatures.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckIcon />
                                <span className="text-gray-300">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <PlanButton href="https://buy.stripe.com/9B614naqOfTY60nfxR3ZK03" text="QUIERO ESTE PLAN" featured={false} />
                </div>
                
                {/* Plano Completo (Featured) */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#1E2A47] to-[#121827] border border-blue-500/30 rounded-2xl p-6 sm:p-8 text-white shadow-2xl shadow-blue-500/20 flex flex-col">
                     <div 
                        className="absolute top-0 right-0 -z-10 w-64 h-64 translate-x-1/4 -translate-y-1/4 opacity-25"
                        style={{
                            background: 'radial-gradient(circle at center, rgba(0, 112, 243, 0.5) 0%, rgba(0, 112, 243, 0) 70%)'
                        }}
                    ></div>
                    <div className="absolute top-4 right-4 text-xs font-bold text-blue-300 bg-blue-900/50 border border-blue-500/30 rounded-full px-3 py-1">MÁS POPULAR</div>

                    <div className="flex items-center gap-3">
                        <DiamondIcon />
                        <h3 className="text-xl font-bold uppercase tracking-wider text-white">PLAN COMPLETO</h3>
                    </div>

                    <p className="mt-3 text-gray-400">Todo lo que necesitas para crear videos que venden.</p>
                    
                    <div className="mt-6 flex items-baseline gap-2">
                        <p className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-400">9,99</p>
                        <p className="text-gray-400 text-sm">(pago único)</p>
                    </div>

                    <ul className="mt-8 space-y-4 text-left flex-grow">
                        {completeFeatures.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckIcon />
                                <span className="text-gray-300">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <PlanButton href="https://buy.stripe.com/fZueVd1Ui0Z41K7bhB3ZK04" text="QUIERO EL PLAN COMPLETO" featured={true} />
                </div>
            </div>
        </section>
    );
};