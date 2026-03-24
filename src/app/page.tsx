export default function Home() {
  const games = [
    {
      title: "Foreclosure Time Mastery",
      subtitle: "How to Use Your Time for Foreclosure Deals",
      author: "Michael Franke",
      url: "https://tff.niche-mastermind.com",
      modes: ["54 Flashcards", "Number Crunch", "Funnel Doctor", "30-Q Quiz"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      accent: "from-[#E8705A] to-[#D4614B]",
      tag: "TIME",
    },
    {
      title: "KPI Mastery",
      subtitle: "KPI's & Funnel Fixes",
      author: "Michael Franke",
      url: "https://kpi.niche-mastermind.com",
      modes: ["Flashcard Blitz", "Number Crunch", "Funnel Doctor", "Operator Quiz"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      accent: "from-[#D4614B] to-[#C05040]",
      tag: "KPIs",
    },
    {
      title: "Marketing Systems Mastery",
      subtitle: "Marketing Systems & Strategy",
      author: "Michael Franke",
      url: "https://mss.niche-mastermind.com",
      modes: ["Flashcard Blitz", "Number Crunch", "Campaign Doctor", "Marketer Quiz"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      ),
      accent: "from-[#E8705A] to-[#D4614B]",
      tag: "MARKETING",
    },
    {
      title: "Sales Operating System Mastery",
      subtitle: "Sales OS & Pipeline Management",
      author: "Michael Franke",
      url: "https://sos.niche-mastermind.com",
      modes: ["Flashcard Blitz", "Number Crunch", "Pipeline Doctor", "Sales Rep Quiz"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
      accent: "from-[#D4614B] to-[#C05040]",
      tag: "SALES",
    },
    {
      title: "Acquisitions Mastery",
      subtitle: "Deal Sourcing & Acquisitions",
      author: "Michael Franke",
      url: "https://acq.niche-mastermind.com",
      modes: ["Flashcard Blitz", "Number Crunch", "Deal Doctor", "Acquisitions Quiz"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      accent: "from-[#E8705A] to-[#D4614B]",
      tag: "ACQUISITIONS",
    },
    {
      title: "Contract to Close Mastery",
      subtitle: "Closing Deals from Contract to Settlement",
      author: "Michael Franke",
      url: "https://cpc.niche-mastermind.com",
      modes: ["Flashcard Blitz", "Number Crunch", "Closing Doctor", "Closer Quiz"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      accent: "from-[#D4614B] to-[#C05040]",
      tag: "CLOSING",
    },
  ];

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8705A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Interactive Learning",
      desc: "4 game modes per book — flashcards, calculations, diagnostics, and quizzes.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8705A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        </svg>
      ),
      title: "Built from Real Books",
      desc: "Every question, scenario, and formula extracted directly from the source material.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8705A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: "Mastermind Community",
      desc: "Join a network of data-driven investors closing deals with proven systems.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8705A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: "Track Your Progress",
      desc: "Instant feedback, streak tracking, and score breakdowns across every mode.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ===== HERO ===== */}
      <section className="hero-section px-6 py-20 md:py-28">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Brand badge */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full bg-white/[0.07] border border-white/[0.1] backdrop-blur-sm">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E8705A] to-[#D4614B] flex items-center justify-center text-white font-bold text-sm">
              N
            </span>
            <span className="text-sm font-semibold tracking-wide text-white/90">
              NICHE MASTERMIND
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Master Every Book,{" "}
            <span className="gradient-text">One Game at a Time</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Interactive mastery games built from real books by Michael Franke.
            Flashcards, number crunching, funnel diagnosis, and quizzes — all designed
            for the data-driven investor.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#games" className="btn-coral text-base px-8 py-3.5">
              Explore Games
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
            <a
              href="https://www.getnichenow.com/meetup02"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white/20 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/30 text-base px-8 py-3.5"
            >
              Join the Mastermind
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 mt-14">
            <div className="stat-badge bg-white/[0.07] text-white/70">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
              </svg>
              6 Books
            </div>
            <div className="stat-badge bg-white/[0.07] text-white/70">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              24 Game Modes
            </div>
            <div className="stat-badge bg-white/[0.07] text-white/70">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              500+ Questions
            </div>
          </div>
        </div>
      </section>

      {/* ===== GAMES GRID (Windows-style tiles) ===== */}
      <section id="games" className="px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
              Choose Your Game
            </h2>
            <p className="text-[#666] text-lg">
              Click a tile to start mastering the material.
            </p>
          </div>

          {/* Windows-style tile grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <a
                key={game.title}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tile group p-8 flex flex-col gap-5 no-underline"
              >
                {/* Header row */}
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${game.accent} flex items-center justify-center text-white shadow-md`}>
                    {game.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#E8705A]/10 text-[#E8705A] text-xs font-bold font-[family-name:var(--font-geist-mono)] tracking-widest">
                    {game.tag}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-1 group-hover:text-[#E8705A] transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-sm text-[#999]">
                    {game.subtitle} — {game.author}
                  </p>
                </div>

                {/* Game modes */}
                <div className="flex flex-wrap gap-2">
                  {game.modes.map((mode) => (
                    <span
                      key={mode}
                      className="px-3 py-1.5 rounded-full bg-[#fdf0ec] text-[#E8705A] text-xs font-medium border border-[#E8705A]/10"
                    >
                      {mode}
                    </span>
                  ))}
                </div>

                {/* Play CTA */}
                <div className="flex items-center gap-2 text-[#E8705A] font-semibold text-sm mt-auto pt-2">
                  Play now
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </a>
            ))}

            {/* Coming soon tile */}
            <div className="tile p-8 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-[#E8705A]/20 bg-[#fdf0ec]/50 cursor-default hover:transform-none hover:shadow-none">
              <div className="w-14 h-14 rounded-2xl bg-[#E8705A]/10 flex items-center justify-center text-[#E8705A]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-[#1A1A1A]/50 mb-1">
                  More Books Coming
                </h3>
                <p className="text-sm text-[#999]">
                  New mastery games are in the works.
                </p>
              </div>
            </div>

            {/* Mastermind event tile */}
            <a
              href="https://www.getnichenow.com/meetup02"
              target="_blank"
              rel="noopener noreferrer"
              className="tile tile-accent group p-8 flex flex-col gap-5 no-underline"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold font-[family-name:var(--font-geist-mono)] tracking-widest">
                  LIVE EVENT
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Niche Mastermind — Kansas City
                </h3>
                <p className="text-sm text-white/70">
                  April 16–18, 2026 — Workshops, networking, and execution frameworks.
                </p>
              </div>

              <div className="flex items-center gap-2 text-white font-semibold text-sm mt-auto pt-2">
                Learn more
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </a>

            {/* Past events tile */}
            <a
              href="https://nichedata.ai/en/events/past-events"
              target="_blank"
              rel="noopener noreferrer"
              className="tile tile-dark group p-8 flex flex-col gap-5 no-underline"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-bold font-[family-name:var(--font-geist-mono)] tracking-widest">
                  ARCHIVE
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#F2A292] transition-colors">
                  Past Events
                </h3>
                <p className="text-sm text-white/50">
                  Browse recordings, recaps, and highlights from previous Niche Mastermind events.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#F2A292] font-semibold text-sm mt-auto pt-2">
                View past events
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col gap-3">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="text-base font-bold text-[#1A1A1A]">{f.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="mt-auto px-6 py-10 border-t border-[#E8705A]/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#E8705A] to-[#D4614B] flex items-center justify-center text-white font-bold text-xs">
              N
            </span>
            <span className="text-sm font-semibold text-[#1A1A1A]">
              Niche Mastermind
            </span>
          </div>

          <p className="text-sm text-[#999] text-center italic">
            &ldquo;Run the Math. Fill the Funnel. Fix the Leak. Repeat.&rdquo;
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.getnichenow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#999] hover:text-[#E8705A] transition-colors"
            >
              getnichenow.com
            </a>
            <a
              href="mailto:support@nichedata.ai"
              className="text-sm text-[#999] hover:text-[#E8705A] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
