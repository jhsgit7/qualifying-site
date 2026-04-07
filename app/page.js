export default function QualifyingSite() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleAuditRequest = () => {
    scrollToSection("lead-capture");
  };

  const handleServicesView = () => {
    scrollToSection("services");
  };

  const handlePackagesView = () => {
    scrollToSection("offers");
  };

  const handleStrategyCall = () => {
    const subject = encodeURIComponent("Strategy Call Request - QUALIFYING");
    const body = encodeURIComponent(
      "Hi QUALIFYING,%0D%0A%0D%0AI'd like to book a strategy call.%0D%0A%0D%0ABrand / Company:%0D%0AGoal:%0D%0ACurrent content channels:%0D%0A%0D%0AThanks."
    );
    window.location.href = `mailto:hello@qualifying.studio?subject=${subject}&body=${body}`;
  };

  const handleProposalRequest = (offerName) => {
    const subject = encodeURIComponent(`Proposal Request - ${offerName}`);
    const body = encodeURIComponent(
      `Hi QUALIFYING,%0D%0A%0D%0AI'd like a proposal for the ${offerName} package.%0D%0A%0D%0ABrand / Company:%0D%0AGoal:%0D%0ABudget range:%0D%0A%0D%0AThanks.`
    );
    window.location.href = `mailto:hello@qualifying.studio?subject=${subject}&body=${body}`;
  };

  const handlePricingDeck = () => {
    const subject = encodeURIComponent("Pricing Deck Request - QUALIFYING");
    const body = encodeURIComponent(
      "Hi QUALIFYING,%0D%0A%0D%0APlease send me your pricing deck.%0D%0A%0D%0ABrand / Company:%0D%0AUse case:%0D%0A%0D%0AThanks."
    );
    window.location.href = `mailto:hello@qualifying.studio?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") || "";
    const company = form.get("company") || "";
    const email = form.get("email") || "";
    const service = form.get("service") || "";
    const message = form.get("message") || "";

    const subject = encodeURIComponent(`Lead Inquiry from ${name || "Website Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}%0D%0ACompany: ${company}%0D%0AEmail: ${email}%0D%0AService Needed: ${service}%0D%0A%0D%0AGoals / Notes:%0D%0A${message}`
    );

    window.location.href = `mailto:hello@qualifying.studio?subject=${subject}&body=${body}`;
  };
  const services = [
    {
      title: "Short-Form Content Engine",
      desc: "High-conversion TikTok, Shorts, and Reels production using AI-assisted scripting, visual generation, editing, captions, and publishing workflows.",
      points: ["Hook-first scripting", "Platform-native edits", "Fast weekly output"],
    },
    {
      title: "UGC + Ad Creative System",
      desc: "Performance-oriented ad creatives, product explainers, and creator-style content built to test angles fast and scale what converts.",
      points: ["Testing-ready concepts", "Paid social creative", "Offer-focused messaging"],
    },
    {
      title: "Content Automation Setup",
      desc: "We build repeatable AI pipelines for research, ideation, repurposing, thumbnail generation, localization, and content ops.",
      points: ["Workflow design", "AI tool stack", "Scalable publishing"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Offer & audience mapping",
      desc: "We identify the audience, the buying trigger, and the content angle that can actually produce leads or sales.",
    },
    {
      step: "02",
      title: "Creative system design",
      desc: "We structure repeatable formats for organic content, UGC, and ad creatives so output stays consistent.",
    },
    {
      step: "03",
      title: "AI-assisted production",
      desc: "Scripts, visuals, voice, editing, subtitles, hooks, and repurposing are executed through a fast content pipeline.",
    },
    {
      step: "04",
      title: "Launch, test, optimize",
      desc: "Top concepts are scaled, low-performing angles are replaced, and the content system gets sharper each cycle.",
    },
  ];

  const metrics = [
    { value: "3x", label: "Faster production cycles" },
    { value: "10+", label: "Short-form content formats" },
    { value: "24/7", label: "Idea generation workflow" },
  ];

  const offers = [
    {
      name: "Starter",
      price: "$1.5k+",
      desc: "For brands that need a clean AI content system and weekly short-form output.",
      items: ["Strategy kickoff", "Short-form production", "Caption + packaging", "Monthly reporting"],
    },
    {
      name: "Growth",
      price: "$3k+",
      desc: "For brands testing multiple content angles and scaling organic + paid creative.",
      items: ["Creative testing system", "UGC/ad concepts", "Repurposing workflow", "Weekly optimization"],
      featured: true,
    },
    {
      name: "Custom",
      price: "Custom",
      desc: "For teams that need a tailored AI production stack, internal workflow buildout, or launch campaign.",
      items: ["Custom pipeline build", "Ops consulting", "Team training", "Advanced integration"],
    },
  ];

  const faqs = [
    {
      q: "What kind of companies do you work with?",
      a: "Typically brands, founders, agencies, and growth teams that want short-form content tied to reach, leads, or revenue.",
    },
    {
      q: "Do you only use AI?",
      a: "No. We combine AI-assisted production with human creative direction so the output feels sharp, branded, and commercially usable.",
    },
    {
      q: "Can this be used for ads too?",
      a: "Yes. The same system can produce organic content, creator-style assets, landing page creatives, and paid social variations.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-300 selection:text-black">
      <style>{`
        .glass-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 30px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04);
          backdrop-filter: blur(18px);
        }
        .apple-button {
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease, background 0.28s ease;
        }
        .apple-button::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: linear-gradient(120deg, rgba(255,255,255,0.06), rgba(255,255,255,0), rgba(255,255,255,0.1));
          opacity: 0;
          transition: opacity 0.28s ease;
          pointer-events: none;
        }
        .apple-button:hover {
          transform: translateY(-3px) scale(1.01);
          border-color: rgba(255,255,255,0.7);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.35), 0 0 24px rgba(255,255,255,0.22), 0 18px 40px rgba(0,0,0,0.45);
        }
        .apple-button:hover::before {
          opacity: 1;
        }
        .glow-line {
          background: linear-gradient(90deg, rgba(255,255,255,0), rgba(122,255,242,0.9), rgba(255,255,255,0));
        }
      `}</style>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(84,255,233,0.20),transparent_24%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(0,120,255,0.12),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent,rgba(255,255,255,0.02))]" />
        <div className="absolute left-0 right-0 top-24 h-px glow-line" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
              QUALIFYING · AI Content Operating System
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 md:block">
              Built for brands that want reach, leads, and speed
            </div>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                We design AI-powered content systems that help brands grow faster.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                QUALIFYING builds short-form content engines for TikTok, Shorts, Reels, UGC, and ad creatives so brands can produce faster, test smarter, and scale what actually works.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={handleStrategyCall}
                  className="apple-button rounded-2xl border border-cyan-300/30 bg-cyan-300 px-6 py-3 font-semibold text-black shadow-[0_10px_35px_rgba(91,255,236,0.22)]"
                >
                  Book a Strategy Call
                </button>
                <button
                  onClick={handleServicesView}
                  className="apple-button rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white"
                >
                  See Revenue-Focused Services
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="glass-card rounded-3xl p-5">
                    <div className="text-3xl font-black text-cyan-300">{metric.value}</div>
                    <div className="mt-2 text-sm text-zinc-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.24em] text-zinc-400">Core outcome</div>
                  <div className="mt-2 text-2xl font-bold">Make content a growth system</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-cyan-300">
                  Conversion-minded
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Short-form content for reach and brand growth",
                  "UGC and ad creative for testing offers faster",
                  "Automation workflows that reduce production friction",
                  "Content systems built for repeatable output, not one-off posts",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(123,255,242,0.9)]" />
                    <div className="text-zinc-300">{item}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="text-sm text-zinc-400">Best for</div>
                  <div className="mt-2 font-semibold">Founders, brands, growth teams</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="text-sm text-zinc-400">Use cases</div>
                  <div className="mt-2 font-semibold">Organic, paid social, product content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built around revenue-facing content production</h2>
          </div>
          <p className="max-w-2xl text-zinc-400">
            This is not generic content support. We help structure content production around traffic, creative testing, conversion, and scalable output.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="glass-card group rounded-[2rem] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_30px_80px_rgba(65,255,236,0.12)]">
              <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-white via-cyan-300 to-transparent" />
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{service.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <span key={point} className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-sm text-zinc-300">
                    {point}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Process</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A practical workflow from idea to performance</h2>
            </div>
            <p className="max-w-2xl text-zinc-400">
              Every stage is designed to reduce wasted creative effort and increase output quality, speed, and testing volume.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {process.map((item) => (
              <div key={item.step} className="glass-card rounded-[2rem] p-6">
                <div className="text-sm font-semibold tracking-[0.3em] text-cyan-300">{item.step}</div>
                <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Offers</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Simple packages that can turn into real deals</h2>
          </div>
          <p className="max-w-2xl text-zinc-400">
            Clear offer structure improves conversion. Prospects should understand what they can buy and what result it is tied to.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`rounded-[2rem] p-8 ${offer.featured ? "border border-cyan-300/30 bg-gradient-to-b from-cyan-300/10 to-white/5 shadow-[0_30px_80px_rgba(59,255,229,0.12)]" : "glass-card"}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-2xl font-bold">{offer.name}</div>
                  <div className="mt-3 text-4xl font-black text-cyan-300">{offer.price}</div>
                </div>
                {offer.featured ? (
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-300">Most Popular</span>
                ) : null}
              </div>
              <p className="mt-5 leading-7 text-zinc-400">{offer.desc}</p>
              <div className="mt-6 space-y-3">
                {offer.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-zinc-300">
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleProposalRequest(offer.name)}
                className="apple-button mt-8 w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white"
              >
                Request Proposal
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="lead-capture" className="border-y border-white/10 bg-zinc-950/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-card rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Monetization Logic</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A landing structure designed to convert better</h2>
              <p className="mt-5 leading-8 text-zinc-400">
                The site now has clearer offers, stronger revenue language, more concrete service framing, and more visible calls to action. This is the kind of structure that can support inbound leads better than a generic studio page.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Clear pricing anchors",
                  "Outcome-based service language",
                  "High-intent CTA placement",
                  "More trust-building sections",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-zinc-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Lead Capture</p>
              <h3 className="mt-3 text-3xl font-bold">Let’s build your content engine</h3>
              <p className="mt-4 text-zinc-400">
                Use this section as your inquiry form, audit request CTA, or strategy-call funnel entry point.
              </p>
              <form onSubmit={handleFormSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                <input name="name" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-cyan-300" placeholder="Your name" />
                <input name="company" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-cyan-300" placeholder="Brand / company" />
                <input name="email" type="email" className="sm:col-span-2 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-cyan-300" placeholder="Email" />
                <select name="service" className="sm:col-span-2 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-zinc-400 outline-none focus:border-cyan-300">
                  <option>What do you need help with?</option>
                  <option>Short-form content</option>
                  <option>UGC / ad creative</option>
                  <option>Automation / workflow build</option>
                  <option>Full content system</option>
                </select>
                <textarea name="message" className="sm:col-span-2 min-h-[140px] rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-cyan-300" placeholder="Tell us your goal, audience, and current content problem" />
              </form>
              <div className="mt-5 flex flex-wrap gap-4">
                <button
                  onClick={handleAuditRequest}
                  className="apple-button rounded-2xl border border-cyan-300/30 bg-cyan-300 px-6 py-3 font-semibold text-black shadow-[0_10px_35px_rgba(91,255,236,0.22)]"
                >
                  Request Free Audit
                </button>
                <button
                  onClick={handlePricingDeck}
                  className="apple-button rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white"
                >
                  Get Pricing Deck
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Questions prospects usually ask before buying</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {faqs.map((item) => (
            <div key={item.q} className="glass-card rounded-[2rem] p-6">
              <h3 className="text-xl font-bold">{item.q}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/6 via-cyan-300/10 to-white/6 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Final CTA</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Build a content system that can actually sell</h2>
              <p className="mt-4 max-w-2xl text-zinc-300">
                If your goal is not just posting more content but building a content machine that drives attention and qualified demand, QUALIFYING is built for that.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleAuditRequest}
                className="apple-button rounded-2xl border border-cyan-300/30 bg-cyan-300 px-6 py-3 font-semibold text-black shadow-[0_10px_35px_rgba(91,255,236,0.22)]"
              >
                Start With a Free Audit
              </button>
              <button
                onClick={handlePackagesView}
                className="apple-button rounded-2xl border border-white/15 bg-black/40 px-6 py-3 font-semibold text-white"
              >
                View Service Packages
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
