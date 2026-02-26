import Link from "next/link";
import React from 'react';

export default function DecisionRoom() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between border-b border-primary/20 bg-background-light dark:bg-background-dark px-10 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-3 text-primary">
                        <span className="material-symbols-outlined text-3xl font-bold">restaurant_menu</span>
                        <h2 className="text-xl font-extrabold tracking-tight dark:text-slate-100">DineWise AI</h2>
                    </Link>
                    <div className="hidden lg:flex items-center gap-6">
                        <Link className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold" href="/">Dashboard</Link>
                        <Link className="text-primary border-b-2 border-primary pb-0.5 text-sm font-semibold" href="/decision-room">Decision Room</Link>
                        <a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold" href="#">History</a>
                        <a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold" href="#">Agents</a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative hidden sm:block">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                        <input className="bg-primary/5 border border-primary/20 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-64 dark:text-slate-200" placeholder="Search insights..." />
                    </div>
                    <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <div className="h-10 w-10 rounded-full border-2 border-primary/30 p-0.5">
                        <div className="w-full h-full rounded-full bg-primary/10"></div>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex overflow-hidden">
                {/* Sidebar Navigation */}
                <aside className="w-64 border-r border-primary/10 bg-background-light dark:bg-background-dark hidden xl:flex flex-col p-6 gap-8">
                    <div className="space-y-1">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Active Session</h3>
                        <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                            <p className="text-sm font-bold text-primary">Request #8291</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">"Find a quiet Italian spot for a business dinner"</p>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-2">
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 text-slate-600 dark:text-slate-300" href="#">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span className="text-sm font-bold">Overview</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/20" href="#">
                            <span className="material-symbols-outlined">hub</span>
                            <span className="text-sm font-bold">Live Orchestration</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 text-slate-600 dark:text-slate-300" href="#">
                            <span className="material-symbols-outlined">forum</span>
                            <span className="text-sm font-bold">Agent Debates</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 text-slate-600 dark:text-slate-300" href="#">
                            <span className="material-symbols-outlined">database</span>
                            <span className="text-sm font-bold">Data Sources</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 text-slate-600 dark:text-slate-300" href="#">
                            <span className="material-symbols-outlined">task_alt</span>
                            <span className="text-sm font-bold">Final Consensus</span>
                        </a>
                    </nav>

                    <div className="mt-auto p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl">
                        <p className="text-xs font-semibold text-slate-500 mb-2">System Health</p>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold">CPU Usage</span>
                            <span className="text-[10px] text-primary">24%</span>
                        </div>
                        <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="w-1/4 h-full bg-primary"></div>
                        </div>
                    </div>
                </aside>

                {/* Main Workspace */}
                <section className="flex-1 flex flex-col h-[calc(100vh-64px)] overflow-hidden">
                    {/* Workspace Header */}
                    <div className="px-8 py-6 flex items-center justify-between border-b border-primary/10">
                        <div>
                            <h1 className="text-2xl font-black tracking-tight flex items-center gap-3">
                                Multi-Agent Decision Room
                                <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Live</span>
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Orchestrating 3 specialist agents for current request</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-lg hover:bg-slate-300 transition-colors">
                                <span className="material-symbols-outlined text-lg">pause</span> Pause
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:brightness-110 transition-all">
                                <span className="material-symbols-outlined text-lg">bolt</span> Force Consensus
                            </button>
                        </div>
                    </div>

                    {/* Orchestration Content */}
                    <div className="flex-1 flex flex-col lg:flex-row overflow-hidden p-6 gap-6">
                        {/* Thinking Map */}
                        <div className="flex-[2] bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-primary/10 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #12aee2 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>

                            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                                <line className="opacity-30" stroke="#12aee2" strokeDasharray="8,4" strokeWidth="2" x1="20%" x2="50%" y1="50%" y2="25%"></line>
                                <line className="opacity-30" stroke="#12aee2" strokeDasharray="8,4" strokeWidth="2" x1="20%" x2="50%" y1="50%" y2="75%"></line>
                                <line className="opacity-30" stroke="#12aee2" strokeDasharray="8,4" strokeWidth="2" x1="50%" x2="80%" y1="25%" y2="50%"></line>
                                <line className="opacity-30" stroke="#12aee2" strokeDasharray="8,4" strokeWidth="2" x1="50%" x2="80%" y1="75%" y2="50%"></line>
                            </svg>

                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <div className="absolute left-[10%] top-1/2 -translate-y-1/2 text-center w-32">
                                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-2 shadow-xl shadow-primary/30">
                                        <span className="material-symbols-outlined text-white text-3xl">lightbulb</span>
                                    </div>
                                    <span className="text-xs font-black uppercase text-primary">Original Request</span>
                                </div>

                                <div className="absolute left-[40%] top-[15%] text-center w-40 p-4 bg-background-light dark:bg-background-dark border-2 border-primary rounded-2xl shadow-xl">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2 relative">
                                        {/* pseudo element agent-pulse can be simulated with an absolute div */}
                                        <div className="absolute inset-0 border-2 border-primary rounded-full opacity-40 animate-ping"></div>
                                        <span className="material-symbols-outlined relative z-10">restaurant</span>
                                    </div>
                                    <h4 className="text-sm font-bold">Foodie Critic</h4>
                                    <p className="text-[10px] text-slate-500 mt-1">Analyzing menu items &amp; recent reviews...</p>
                                </div>

                                <div className="absolute left-[40%] bottom-[15%] text-center w-40 p-4 bg-background-light dark:bg-background-dark border-2 border-primary rounded-2xl shadow-xl">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2 relative">
                                        <div className="absolute inset-0 border-2 border-primary rounded-full opacity-40 animate-ping"></div>
                                        <span className="material-symbols-outlined relative z-10">local_parking</span>
                                    </div>
                                    <h4 className="text-sm font-bold">Logistics Expert</h4>
                                    <p className="text-[10px] text-slate-500 mt-1">Checking traffic flow &amp; parking capacity...</p>
                                </div>

                                <div className="absolute left-[65%] top-1/2 -translate-y-1/2 text-center w-40 p-4 bg-background-light dark:bg-background-dark border-2 border-primary rounded-2xl shadow-xl">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2">
                                        <span className="material-symbols-outlined">volume_mute</span>
                                    </div>
                                    <h4 className="text-sm font-bold">Vibe Analyst</h4>
                                    <p className="text-[10px] text-slate-500 mt-1">Measuring decibel data &amp; atmosphere...</p>
                                </div>

                                <div className="absolute right-[5%] top-1/2 -translate-y-1/2 text-center w-32">
                                    <div className="w-16 h-16 rounded-full border-4 border-slate-300 dark:border-slate-700 flex items-center justify-center mx-auto mb-2 animate-pulse">
                                        <span className="material-symbols-outlined text-slate-400 text-3xl">pending</span>
                                    </div>
                                    <span className="text-xs font-black uppercase text-slate-400">Converging...</span>
                                </div>
                            </div>
                        </div>

                        {/* Agent Debate Log */}
                        <div className="w-full lg:w-96 flex flex-col gap-4">
                            <div className="flex-1 bg-background-light dark:bg-slate-900 border border-primary/10 rounded-2xl flex flex-col overflow-hidden">
                                <div className="p-4 border-b border-primary/10 bg-primary/5 flex items-center justify-between">
                                    <h3 className="text-sm font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">history_edu</span> Real-time Debate Log
                                    </h3>
                                    <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                                </div>

                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-primary uppercase">The Foodie Critic</span>
                                            <span className="text-[10px] text-slate-400">14:22:01</span>
                                        </div>
                                        <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg rounded-tl-none border-l-2 border-primary text-xs leading-relaxed">
                                            "La Lanterna" has a 4.9 rating for their Truffle Gnocchi. It's consistently top-rated for quality.
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 justify-end">
                                            <span className="text-[10px] text-slate-400">14:22:05</span>
                                            <span className="text-[10px] font-bold text-amber-500 uppercase">Logistics Expert</span>
                                        </div>
                                        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg rounded-tr-none border-r-2 border-amber-500 text-xs leading-relaxed text-right">
                                            But "La Lanterna" is in a construction zone. Parking is impossible at 7 PM. The client will be late.
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-primary uppercase">The Foodie Critic</span>
                                            <span className="text-[10px] text-slate-400">14:22:12</span>
                                        </div>
                                        <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg rounded-tl-none border-l-2 border-primary text-xs leading-relaxed">
                                            Understood. Moving "Osteria Del Sole" to priority. Menus are authentic.
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 justify-end">
                                            <span className="text-[10px] text-slate-400">14:22:18</span>
                                            <span className="text-[10px] font-bold text-emerald-500 uppercase">Vibe Analyst</span>
                                        </div>
                                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg rounded-tr-none border-r-2 border-emerald-500 text-xs leading-relaxed text-right">
                                            Checking decibel history for Osteria Del Sole... 55dB average. Perfect for a business dinner.
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-primary uppercase">The Foodie Critic</span>
                                            <span className="text-[10px] text-slate-400">14:22:25</span>
                                        </div>
                                        <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg rounded-tl-none border-l-2 border-primary text-xs leading-relaxed">
                                            Agreed. Osteria Del Sole is a strong candidate. Searching for a fallback now.
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 border-t border-primary/10">
                                    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-2 flex items-center gap-2">
                                        <div className="flex-1 text-[10px] text-slate-400 italic">Intervention restricted during live orchestration...</div>
                                        <span className="material-symbols-outlined text-slate-400 text-sm">lock</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Consensus Results */}
                    <div className="px-8 py-6 border-t border-primary/10 bg-slate-50/50 dark:bg-slate-900/50 overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-primary">
                                <span className="material-symbols-outlined text-lg">check_circle</span> Converging Recommendations
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-500 font-medium">Confidence: </span>
                                <div className="w-32 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                                    <div className="w-[88%] h-full bg-primary rounded-full"></div>
                                </div>
                                <span className="text-xs font-bold text-primary">88%</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-background-light dark:bg-background-dark border border-primary/20 rounded-xl p-4 shadow-sm hover:shadow-md transition-all border-l-4 border-l-primary group">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="font-bold group-hover:text-primary transition-colors">Osteria Del Sole</h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Quiet • Authentic Italian • Valet Parking</p>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded font-black">#1 MATCH</span>
                                </div>
                                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 mb-3">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">star</span> 4.8</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">volume_down</span> 52dB</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">distance</span> 2.1 mi</span>
                                </div>
                                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                    <span className="text-[10px] uppercase font-bold text-emerald-500">Unanimous Consensus</span>
                                    <button className="text-xs font-bold text-primary flex items-center gap-1">View Details <span className="material-symbols-outlined text-xs">chevron_right</span></button>
                                </div>
                            </div>

                            <div className="bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm opacity-80 hover:opacity-100 transition-all">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="font-bold">Il Posto</h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Boutique • Wine Bar • High-end</p>
                                    </div>
                                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] px-2 py-1 rounded font-black">#2 MATCH</span>
                                </div>
                                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 mb-3">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">star</span> 4.6</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">volume_down</span> 58dB</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">distance</span> 0.8 mi</span>
                                </div>
                                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                    <span className="text-[10px] uppercase font-bold text-amber-500">Partial Consensus (2/3)</span>
                                    <button className="text-xs font-bold text-primary flex items-center gap-1">View Details <span className="material-symbols-outlined text-xs">chevron_right</span></button>
                                </div>
                            </div>

                            <div className="bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm opacity-50 relative overflow-hidden">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="font-bold italic">Analyzing...</h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Awaiting Vibe Check</p>
                                    </div>
                                </div>
                                <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full mt-4 overflow-hidden">
                                    <div className="w-1/3 h-full bg-slate-400 animate-pulse"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
