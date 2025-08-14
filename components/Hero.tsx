
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export const GradientButton: React.FC<ButtonProps> = ({ children, onClick }) => (
    <button
        onClick={onClick}
        className="w-full sm:w-auto text-white font-bold rounded-full bg-gradient-to-r from-[#0070f3] to-[#ff3b3b] p-1 shadow-lg transition-transform hover:scale-105">
        <span className="block bg-[#0A0F1A] hover:bg-transparent rounded-full px-8 py-3 text-sm tracking-wider">
            {children}
        </span>
    </button>
);
