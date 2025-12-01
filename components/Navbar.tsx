import React, { useState, useEffect } from 'react';
import { PROGRAMS_DATA, FACULTY_DATA, EVENTS_DATA } from '../constants';

import logo from '../assets/main-logo2.png';

interface NavbarProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Derived search results
    const results = searchQuery.length < 2 ? [] : [
        ...PROGRAMS_DATA.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).map(p => ({ ...p, type: 'Program', link: 'programs' })),
        ...FACULTY_DATA.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).map(p => ({ ...p, title: p.name, desc: p.title, type: 'Faculty', link: 'faculties' })),
        ...EVENTS_DATA.filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase())).map(e => ({ ...e, desc: e.time, type: 'Event', link: 'events' }))
    ];

    const handleNavigate = (page: string) => {
        onNavigate(page);
        setIsMenuOpen(false);
        setIsSearchOpen(false);
        setSearchQuery("");
    };

    // Prevent body scroll when menu/search is open
    useEffect(() => {
        if (isMenuOpen || isSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen, isSearchOpen]);

    const isApplyPage = currentPage === 'apply';

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/95 backdrop-blur-sm shadow-sm border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between whitespace-nowrap py-3">
                        <div className="flex items-center gap-8">
                            <button onClick={() => handleNavigate('home')} className="flex items-center gap-3 text-slate-800 dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
                                <img src={logo} alt="Tejgaon College Logo" className="h-16 w-auto" />
                                {/* <h2 className="text-xl font-bold tracking-tighter">BBA -Tejgaon College</h2> */}
                            </button>
                        </div>

                        <nav className="hidden items-center gap-8 lg:flex absolute left-1/2 -translate-x-1/2">
                            {['home', 'admission', 'campus-life', 'faculties', 'notice'].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handleNavigate(page)}
                                    className={`text-sm font-bold capitalize transition-colors ${currentPage === page
                                        ? 'text-secondary'
                                        : 'text-slate-700 hover:text-secondary dark:text-gray-200 dark:hover:text-secondary'
                                        }`}
                                >
                                    {page === 'home' ? 'Home' : page === 'campus-life' ? 'Campus Life' : page}
                                </button>
                            ))}
                        </nav>

                        <div className="flex items-center justify-end gap-2">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                            >
                                <span className="material-symbols-outlined text-2xl">search</span>
                            </button>
                            <button
                                onClick={() => handleNavigate(isApplyPage ? 'login' : 'apply')}
                                className="hidden min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-gradient-to-r from-secondary to-primary  text-white text-sm font-bold tracking-wide hover:scale-105 transition-all duration-200 md:flex"
                            >
                                <span>{isApplyPage ? "Applicant's Login" : "Apply Now"}</span>
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                aria-label="Toggle menu"
                            >
                                <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {isMenuOpen && (
                        <div className="lg:hidden py-4 border-t border-gray-100 dark:border-gray-800">
                            <nav className="flex flex-col gap-2">
                                {['home', 'admission', 'campus-life', 'faculties', 'notice'].map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handleNavigate(page)}
                                        className={`flex items-center w-full px-4 py-3 text-sm font-bold capitalize rounded-lg transition-colors ${currentPage === page
                                            ? 'bg-secondary/10 text-secondary'
                                            : 'text-slate-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        {page === 'home' ? 'Home' : page === 'campus-life' ? 'Campus Life' : page}
                                    </button>
                                ))}
                                <button
                                    onClick={() => handleNavigate(isApplyPage ? 'login' : 'apply')}
                                    className="mt-2 w-full flex items-center justify-center rounded-lg h-12 bg-gradient-to-r from-secondary to-primary text-white text-sm font-bold tracking-wide transition-colors hover:bg-secondary/90"
                                >
                                    <span>{isApplyPage ? "Applicant's Login" : "Apply Now"}</span>
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Global Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-[60] flex flex-col bg-white dark:bg-background-dark animate-fade-in">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <span className="material-symbols-outlined text-3xl text-slate-400">search</span>
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search programs, faculty, events..."
                                className="flex-1 text-xl md:text-2xl font-medium bg-transparent border-none focus:ring-0 placeholder-slate-300 dark:placeholder-slate-600 dark:text-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-500"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>

                        <div className="mt-8 overflow-y-auto max-h-[calc(100vh-120px)]">
                            {searchQuery.length > 0 && results.length === 0 && (
                                <p className="text-center text-slate-500 mt-10">No results found for "{searchQuery}"</p>
                            )}

                            {results.length > 0 && (
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider">Results</h3>
                                    {results.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleNavigate(item.link)}
                                            className="w-full text-left flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                                        >
                                            <div className="bg-secondary/10 text-secondary p-2 rounded-lg">
                                                <span className="material-symbols-outlined">
                                                    {item.type === 'Program' ? 'school' : item.type === 'Faculty' ? 'person' : 'event'}
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">{item.desc}</p>
                                                <span className="text-xs font-medium text-secondary mt-1 inline-block">{item.type}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {searchQuery.length === 0 && (
                                <div className="text-center mt-20">
                                    <span className="material-symbols-outlined text-6xl text-slate-200 dark:text-slate-700 mb-4">search</span>
                                    <p className="text-slate-500 dark:text-slate-400">Start typing to search across the university...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;