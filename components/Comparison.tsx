
import React from 'react';

const NegativeIcon = () => (
    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-red-900/50 border border-red-500/30">
        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
);

const PositiveIcon = () => (
    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-900/50 border border-green-500/30">
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    </div>
);

const ComparisonListItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <li className="flex items-start space-x-3">
        {icon}
        <div>
            <h4 className="font-semibold text-white">{title}</h4>
            {description && <p className="text-sm text-gray-400">{description}</p>}
        </div>
    </li>
);

export const Comparison = () => {
    const cons = [
        { title: 'La competencia te superará', description: 'Mientras dudas, otros ya están dominando VEO3, Dreamina y otras tecnologías.' },
        { title: 'Gastas horas probando prompts sin resultados', description: '' },
        { title: 'Tus creativos tienen métricas pobres y un ROI bajo', description: '' },
        { title: 'Alto costo para crear tus videos', description: '' },
    ];

    const pros = [
        { title: 'Todo directamente en tu cuenta de Google', description: '' },
        { title: 'Recibe prompts listos y validados + aprende a crear los tuyos', description: '' },
        { title: 'Aplica los métodos cuantas veces quieras para crear sin límites', description: '' },
        { title: 'Cualquiera puede aplicar cada método en 5 minutos o menos', description: '' },
    ];

    return (
        <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Si te QUEDAS PARADO */}
                <div className="bg-[#1a1115]/60 border border-red-500/30 rounded-2xl p-6 md:p-8 flex flex-col h-full">
                    <h3 className="flex items-center text-xl font-bold text-red-400 mb-6">
                        <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17l-10-10M17 7v10H7"></path></svg>
                        Si te QUEDAS PARADO
                    </h3>
                    <ul className="space-y-5 flex-grow">
                        {cons.map((item, index) => (
                            <ComparisonListItem 
                                key={index} 
                                icon={<NegativeIcon />}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </ul>
                </div>

                {/* Si ACTÚAS AHORA */}
                <div className="bg-[#111a15]/60 border border-green-500/50 rounded-2xl p-6 md:p-8 flex flex-col h-full relative shadow-[0_0_25px_rgba(50,200,150,0.15)]">
                    <h3 className="flex items-center text-xl font-bold text-green-400 mb-6">
                        <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m-7 7l7-7 7 7"></path></svg>
                        Si ACTÚAS AHORA
                    </h3>
                    <ul className="space-y-5 flex-grow">
                        {pros.map((item, index) => (
                             <ComparisonListItem 
                                key={index}
                                icon={<PositiveIcon />}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
