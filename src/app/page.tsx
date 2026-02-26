"use client";

import Link from "next/link";
import React, { useState } from 'react';

export default function ConciergeDashboard() {
  const [instruction, setInstruction] = useState("Find me a quiet dinner spot for tonight. I'm meeting a client who likes Italian but is sensitive to loud music. Needs to be within 15 mins of Downtown...");
  const [isProcessing, setIsProcessing] = useState(false);
  const [response, setResponse] = useState<{ reply: string, confidence: number, agents_involved: string[] } | null>(null);

  const sendInstruction = async () => {
    if (!instruction.trim()) return;
    setIsProcessing(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: instruction }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error connecting to backend:", error);
      setResponse({
        reply: "Error connecting to AI backend. Please ensure the FastAPI server is running.",
        confidence: 0,
        agents_involved: []
      });
    } finally {
      setIsProcessing(false);
    }
  };
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 bg-white dark:bg-slate-950">
        <div className="p-6 flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
            <span className="material-symbols-outlined text-white font-bold">restaurant_menu</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">DineWise<span className="text-primary">AI</span></h1>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">Main Menu</div>
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium transition-colors">
            <span className="material-symbols-outlined">dashboard</span> Dashboard
          </Link>
          <Link href="/decision-room" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined">smart_toy</span> Agentic Engine
          </Link>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">history</span> Dining History
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">favorite</span> Preferences
          </a>

          <div className="pt-8 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">Active Agents</div>
          <div className="space-y-3 px-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="size-2 rounded-full bg-primary absolute -top-0.5 -right-0.5 ring-2 ring-white dark:ring-slate-950"></div>
                <span className="material-symbols-outlined text-slate-400">psychology</span>
              </div>
              <span className="text-sm font-medium">Gastronomy Pro</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="size-2 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5 ring-2 ring-white dark:ring-slate-950"></div>
                <span className="material-symbols-outlined text-slate-400">table_bar</span>
              </div>
              <span className="text-sm font-medium">Reservation Bot</span>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-4 flex items-center gap-3">
            <div className="size-10 rounded-full bg-gradient-to-tr from-primary to-blue-400"></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">Alex Chen</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Premium Plan</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <span className="material-symbols-outlined text-xl">settings</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950 overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 z-10">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Search experiences, history, or agents..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-950"></span>
            </button>
            <div className="h-6 w-px bg-slate-200 dark:border-slate-800"></div>
            <p className="text-sm font-semibold dark:text-slate-300">Monday, Oct 23rd</p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
          {/* Morning Briefing Card */}
          <section>
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-8 group">
              <div className="absolute top-0 right-0 -mt-12 -mr-12 size-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary fill-1">verified</span>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight">Morning Briefing</h2>
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">"Based on your Monday patterns, you usually crave light salads."</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                    Ive scouted 3 Mediterranean spots with outdoor seating available today. The weather is a crisp 72°F—perfect for that patio seating you love. One spot, <span className="text-primary font-semibold italic">Olive &amp; Ivy</span>, has your favorite corner table open for 12:30 PM.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-transform active:scale-95">
                      View Recommendations <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold px-6 py-3 rounded-lg transition-colors">
                      Dismiss
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-1/3 flex flex-col gap-4">
                  <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase">Agent Confidence</span>
                      <span className="text-xs font-bold text-primary">94%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[94%]"></div>
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Linked Data</p>
                    <div className="flex gap-2">
                      <div className="size-8 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-slate-500">
                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                      </div>
                      <div className="size-8 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-slate-500">
                        <span className="material-symbols-outlined text-sm">cloud</span>
                      </div>
                      <div className="size-8 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-slate-500">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Command Center */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Command Center</h2>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <span className="size-1.5 bg-primary rounded-full"></span> AI Processing Active
              </span>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg p-1 overflow-hidden">
              <textarea
                className="w-full min-h-[120px] p-6 text-xl font-medium text-slate-800 dark:text-slate-200 focus:outline-none bg-transparent resize-none placeholder:text-slate-300 dark:placeholder:text-slate-700"
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                placeholder="Type your dining request here..."
              ></textarea>
              <div className="bg-slate-50 dark:bg-slate-950 px-4 py-3 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors">
                    <span className="material-symbols-outlined">mic</span>
                  </button>
                  <button className="p-2 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors">
                    <span className="material-symbols-outlined">attach_file</span>
                  </button>
                  <button className="p-2 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors">
                    <span className="material-symbols-outlined">image</span>
                  </button>
                </div>
                <button
                  onClick={sendInstruction}
                  disabled={isProcessing}
                  className="bg-primary hover:bg-primary/90 text-background-dark font-bold px-8 py-2 rounded-lg transition-transform active:scale-95 shadow-md shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isProcessing ? "Processing..." : "Send Instruction"}
                </button>
              </div>
            </div>
          </section>

          {response && (
            <section className="bg-primary/5 rounded-2xl p-6 border border-primary/20 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Contextual Engine Response</h3>
              </div>
              <p className="text-slate-800 dark:text-slate-200 text-xl font-medium mb-6 leading-relaxed">{response.reply}</p>

              <div className="flex items-center gap-6 text-sm flex-wrap">
                <div className="flex bg-white dark:bg-slate-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                  <span className="text-slate-500 font-bold mr-2 uppercase text-xs tracking-wider">Confidence</span>
                  <span className="text-primary font-black">{response.confidence}%</span>
                </div>
                {response.agents_involved && response.agents_involved.length > 0 && (
                  <div className="flex bg-white dark:bg-slate-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm items-center gap-2">
                    <span className="text-slate-500 font-bold uppercase text-xs tracking-wider">Agents Involved:</span>
                    <div className="flex gap-2">
                      {response.agents_involved.map((agent: string, idx: number) => (
                        <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded text-xs font-bold">
                          {agent}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="ml-auto">
                  <Link href="/decision-room" className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                    View Decision Room <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* Grid Layout for Additional Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Upcoming Bookings</h3>
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                  <div className="size-12 rounded-lg bg-center bg-cover bg-slate-300"></div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900 dark:text-white">Takumi Sushi</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Wednesday • 7:00 PM • 2 Guests</p>
                  </div>
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded uppercase">Confirmed</span>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 opacity-70">
                  <div className="size-12 rounded-lg bg-center bg-cover bg-slate-300"></div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900 dark:text-white">The Grind Coffee</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Friday • 10:00 AM • 1 Guest</p>
                  </div>
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded uppercase">Draft</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Recommended for Weekend</h3>
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group">
                <div className="h-32 bg-slate-300 bg-cover bg-center"></div>
                <div className="p-4">
                  <p className="font-bold text-slate-900 dark:text-white">The Glass House</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-1">New rooftop opening in West Side with curated wine pairings.</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-primary">
                      <span className="material-symbols-outlined text-sm fill-1">star</span>
                      <span className="material-symbols-outlined text-sm fill-1">star</span>
                      <span className="material-symbols-outlined text-sm fill-1">star</span>
                      <span className="material-symbols-outlined text-sm fill-1">star</span>
                      <span className="material-symbols-outlined text-sm fill-1">star_half</span>
                    </div>
                    <button className="text-xs font-bold text-primary hover:underline">Learn more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contextual Memory Panel */}
      <aside className="w-80 border-l border-slate-200 dark:border-slate-800 flex flex-col shrink-0 bg-white dark:bg-slate-950 overflow-y-auto custom-scrollbar">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">memory</span> Contextual Memory
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Preferences</h3>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">deck</span>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Favorite: Outdoor seating</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Prefers patios even in cooler weather (if heaters are present).</p>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">wine_bar</span>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Vibe: Intimate &amp; Low-Lit</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">For evening dining, prefers acoustic music or no music.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-red-500/80 uppercase tracking-widest mb-4">Health &amp; Restrictions</h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-500/5 dark:bg-red-500/10 rounded-lg border border-red-500/20 flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-lg">warning</span>
                  <div>
                    <p className="text-sm font-bold text-red-600 dark:text-red-400">Restriction: Shellfish allergy</p>
                    <p className="text-xs text-red-600/70 dark:text-red-400/70">Severe reaction. AI automatically filters all seafood-focused menus.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Recent Learnings</h3>
              <div className="relative pl-4 space-y-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
                <div className="relative">
                  <div className="absolute -left-[18px] top-1 size-2 rounded-full bg-primary ring-4 ring-white dark:ring-slate-950"></div>
                  <p className="text-xs text-slate-400 mb-1">Oct 21</p>
                  <p className="text-sm font-medium">Disliked <span className="italic text-primary">Le Petit Bistro</span> due to table crowding.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[18px] top-1 size-2 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-white dark:ring-slate-950"></div>
                  <p className="text-xs text-slate-400 mb-1">Oct 19</p>
                  <p className="text-sm font-medium">Added "Natural Wine" to interest list.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[18px] top-1 size-2 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-white dark:ring-slate-950"></div>
                  <p className="text-xs text-slate-400 mb-1">Oct 15</p>
                  <p className="text-sm font-medium">Prefers reservations before 8:00 PM on weekdays.</p>
                </div>
              </div>
            </div>

          </div>
          <div className="mt-8 bg-primary/10 rounded-xl p-6 text-center">
            <p className="text-xs font-bold text-primary uppercase mb-2">Memory Strength</p>
            <p className="text-2xl font-black text-slate-900 dark:text-white">88%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">DineWise knows you well! The more you interact, the better the insights.</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
