import React from 'react';
import { IMAGES } from '../constants';

const Apply: React.FC = () => {
    const APPLICATION_URL = "http://app55.nu.edu.bd/nu-web/application/profApplicationForm";
    const displayUrl = new URL(APPLICATION_URL).hostname;

    return (
        <div className="w-full flex-grow flex flex-col bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${IMAGES.HERO}')`,
                        backgroundPosition: 'center 30%'
                    }}
                />
                <div className="absolute inset-0 bg-slate-900/70" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-white dark:to-gray-900" />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    {/* <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-md text-secondary text-xs font-bold uppercase tracking-wider mb-4 animate-fade-in-up">
                        Admission Process
                    </span> */}
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 drop-shadow-lg animate-fade-in-up delay-100">
                        Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-300">Journey</span>
                    </h1>
                    <p className="text-md text-slate-200 max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Take the first step towards a brilliant career. Apply now to join our vibrant academic community.
                    </p>
                </div>
            </section>

            {/* Application Steps */}
            <section className="py-12 px-4 max-w-7xl mx-auto w-full -mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { icon: "edit_document", title: "1. Fill Application", desc: "Complete the online form with your personal and academic details." },
                        { icon: "upload_file", title: "2. Submit Documents", desc: "Upload necessary transcripts and identification documents." },
                        { icon: "payments", title: "3. Pay Fee", desc: "Pay the application fee securely through our payment gateway." }
                    ].map((step, idx) => (
                        <div key={idx} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700 flex items-start gap-4 transition-transform hover:-translate-y-1">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 text-secondary">
                                <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{step.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Application Form Container */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-gray-700">
                    <div className="bg-slate-50 dark:bg-gray-900/50 border-b border-slate-200 dark:border-gray-700 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="ml-4 px-3 py-1 bg-white dark:bg-gray-800 rounded-md text-xs text-slate-500 font-mono border border-slate-200 dark:border-gray-700 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[10px]">lock</span>
                                {displayUrl}
                            </div>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Portal</span>
                    </div>

                    <div className="relative w-full h-[800px] bg-slate-50 dark:bg-gray-900">
                        <iframe
                            src={APPLICATION_URL}
                            className="absolute inset-0 w-full h-full border-0"
                            title="Application Form"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Apply;