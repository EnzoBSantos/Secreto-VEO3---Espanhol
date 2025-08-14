
import React from 'react';
import { FaqItem } from './FaqItem';

const faqData = [
    {
        question: '¿Es fácil conseguir VEO 3?',
        answer: 'Sí, en menos de 5 minutos puedes aplicar uno de los métodos y ya puedes empezar a crear videos.',
    },
    {
        question: '¿Cómo recibiré lo que estoy comprando?',
        answer: '➡️ Por correo electrónico y también acceso inmediato al área de miembros.',
    },
    {
        question: '¿El pago es realmente único o hay mensualidad?',
        answer: '➡️ Pago único. Sin mensualidades, sin sorpresas.',
    },
    {
        question: '¿El acceso es inmediato?',
        answer: '➡️ ¡Sí! En cuanto se apruebe el pago, recibirás todo al instante.',
    },
    {
        question: '¿Y si necesito ayuda?',
        answer: '➡️ Tendrás soporte por correo electrónico y un canal de ayuda en el área de miembros.',
    },
];

export const Faq = () => {
    return (
        <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">❓ FAQ - Preguntas Frecuentes</h2>
            <div className="mt-8 space-y-4">
                {faqData.map((item, index) => (
                    <FaqItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </section>
    );
};
