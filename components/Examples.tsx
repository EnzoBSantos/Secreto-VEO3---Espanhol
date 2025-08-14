import React from 'react';

// This component handles rendering the YouTube video embed.
const VideoEmbed = ({ embedHtml }: { embedHtml: string }) => {
    // Add autoplay, mute, and loop parameters to the YouTube URL.
    // Loop requires the playlist parameter to be set to the video ID.
    const videoId = embedHtml.match(/embed\/([^"?]+)/)?.[1];
    const modifiedEmbed = embedHtml.replace(
        /src="([^"]+)"/,
        `src="$1?autoplay=1&mute=1&loop=1&playlist=${videoId}"`
    ).replace(/width="\d+"/, 'width="100%"').replace(/height="\d+"/, 'height="100%"');

    return (
        <div 
            className="aspect-video w-full rounded-lg overflow-hidden shadow-lg bg-black"
            dangerouslySetInnerHTML={{ __html: modifiedEmbed }}
        />
    );
};


const ExampleCard = ({ title, prompt, videoEmbed }: { title: string, prompt: string, videoEmbed: string }) => (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        
        {/* Video is now above the prompt */}
        <div className="mt-4">
            <VideoEmbed embedHtml={videoEmbed} />
        </div>

        <div className="mt-6 bg-black/50 p-4 rounded-md font-mono text-sm text-gray-400 flex-1 flex flex-col">
            <p className="font-bold text-gray-200 mb-2 flex-shrink-0">🧠 Prompt utilizado:</p>
            <pre className="whitespace-pre-wrap break-words overflow-y-auto text-xs flex-grow">
                <code>{prompt}</code>
            </pre>
        </div>
    </div>
);

export const Examples = () => {
    const example1 = {
        title: "📽️ Ejemplo 1 — Hincha del Corinthians",
        prompt: `A Brazilian man around 65 years old, with light brown skin, a short gray beard, and a weathered face, is sitting on a white plastic chair in front of a modest neighborhood bar at sunset. He is wearing a classic Corinthians soccer jersey and a faded black Corinthians cap. On the small table next to him is an almost empty beer bottle and a glass. He speaks directly to the camera, gesturing with his hands and visibly upset. His tone is nostalgic and his voice has a slight Rio de Janeiro (Carioca) accent. Background details: The bar is rustic, with peeling paint and a small TV inside showing a silent sports channel. A group of older men are playing dominoes nearby. The street is worn asphalt and a soft orange sunset bathes the scene in warm light. Occasionally, cars pass by slowly. Filming style: documentary style, slightly handheld camera to increase realism. Dialogue line (in Portuguese): "Porra, esse time de hoje é uma vergonha, cara! Na minha época tinha raça, irmão! O jogador corria, suava, se jogava no chão! Hoje em dia é só pose e firula, ninguém honra a camisa, não!"`,
        videoEmbed: `<iframe width="1368" height="775" src="https://www.youtube.com/embed/OswZeNzpeNo" title="Veo3 - Exemplo 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    };

    const example2 = {
        title: "📽️ Ejemplo 2 — Doctor Especialista",
        prompt: `A calm and professional doctor in a modern and well-lit medical office, speaking directly to the camera. He is holding a medicine bottle and explaining how the medication works, including benefits and common side effects. The doctor gestures naturally, occasionally pointing to a medical chart or a tablet with images. The background shows shelves with medical books and a stethoscope on the table. The camera slowly zooms in as he speaks clearly and reassuringly. Studio lighting, clean white coat, realistic voice and lip-sync.`,
        videoEmbed: `<iframe width="1368" height="775" src="https://www.youtube.com/embed/Rw2VlSnUGa0" title="Veo3 - Exemplo 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    };

    return (
        <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">🎯 Ejemplos Reales Creados con el Método Videos que Venden con IA</h2>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                <ExampleCard 
                    title={example1.title}
                    prompt={example1.prompt}
                    videoEmbed={example1.videoEmbed}
                />
                <ExampleCard 
                    title={example2.title}
                    prompt={example2.prompt}
                    videoEmbed={example2.videoEmbed}
                />
            </div>
        </section>
    );
};