
/**
 * 
 * @returns Components
 */
import {ButtonPrimary, ButtonOutline} from './button.jsx';
import { useState } from 'react';

const Hero = () => {
    const [isCvModalOpen, setIsCvModalOpen] = useState(false);

    const downloadCV = (type) => {
        const da = '/src/favicon/CV-DA-KieuTanAnhMinh.pdf';
        const de = '/src/favicon/CV-DE-KieuTanAnhMinh.pdf';
        const chosen = type === 'da' ? da : de;

        const a = document.createElement('a');
        a.href = chosen;
        a.download = '';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setIsCvModalOpen(false);
    };

    return (
        <section
            id="home"
            className="pt-28 lg:pt-36"   
        >
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="./src/favicon/kieuminh.png" width={40} height={40} alt="Kiều Tấn Anh Minh" className="img-cover" />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>

                            Available for work
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10" >
                        Turning Big Data into Scalable Insights
                    </h2>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label="Download CV"
                            icon="download"
                            onClick={() => setIsCvModalOpen(true)}
                        />

                        <ButtonOutline
                            href="#about"
                            label="Scroll Down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>


                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to 65% rounded-[60px] overflow-hidden">
                        <img 
                        src="./src/favicon/kieuminh.png" 
                        width={656}
                        height={800}
                        alt="Kiều Minh" 
                        className="w-full"
                        />
                    </figure>
                </div>
            </div>

            {isCvModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsCvModalOpen(false)}>
                    <div className="bg-zinc-900 rounded-2xl w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Download CV</h3>
                            <button onClick={() => setIsCvModalOpen(false)} className="text-zinc-400">✕</button>
                        </div>

                        <p className="text-zinc-400 mb-4">Choose the CV you want to download:</p>

                        <div className="flex gap-3">
                            <button onClick={() => downloadCV('da')} className="flex-1 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg">Data Analyst</button>
                            <button onClick={() => downloadCV('de')} className="flex-1 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg">Data Engineer</button>
                        </div>

                        <p className="text-xs text-zinc-500 mt-4">Replace the files in <code>/src/favicon/</code> with your actual PDFs.</p>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Hero;