import React from 'react';
import { IMAGES } from '../constants';

const Login: React.FC = () => {
    const LOGIN_URL = "http://app55.nu.edu.bd/nu-web/applicantLogin.action?degreeName=Professional";
    const displayUrl = new URL(LOGIN_URL).hostname;

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
                        Student Portal
                    </span> */}
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 drop-shadow-lg animate-fade-in-up delay-100">
                        Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-300">Back</span>
                    </h1>
                    <p className="text-md text-slate-200 max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Access your student dashboard, check results, and manage your academic profile.
                    </p>
                </div>
            </section>

            {/* Login Form Container */}
            <section className="py-12 px-4 max-w-7xl mx-auto w-full -mt-16 relative z-20">
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
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Secure Login</span>
                    </div>

                    <div className="relative w-full h-[600px] bg-slate-50 dark:bg-gray-900">
                        <iframe
                            src={LOGIN_URL}
                            className="absolute inset-0 w-full h-full border-0"
                            title="Applicant Login"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;