export default function QualifyingSite() {
  const services = [
    {
      title: "AI Short-Form Production",
      desc: "From idea generation to scripting, voice, editing, captions, and platform-ready export for Shorts, Reels, and TikTok.",
    },
    {
      title: "Brand Content Systems",
      desc: "We build repeatable AI workflows so your team can produce consistent content faster without losing tone or quality.",
    },
    {
      title: "Creative Automation",
      desc: "Automate research, hooks, thumbnails, repurposing, and multi-platform adaptation with a practical production stack.",
    },
  ];

  const steps = [
    "Strategy and audience mapping",
    "Content concept development",
    "AI-assisted production pipeline",
    "Editing, packaging, and launch",
  ];

  const stats = [
    { label: "Content formats", value: "10+" },
    { label: "Production speed", value: "Faster" },
    { label: "Workflow focus", value: "Scalable" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-teal-300 selection:text-black">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,210,190,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent,rgba(255,255,255,0.02))]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-teal-400/30 bg-white/5 px-4 py-2 text-sm text-teal-300 backdrop-blur">
                QUALIFYING · AI Content Studio
              </div>
              <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                We build AI content systems that move faster than traditional teams.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                QUALIFYING helps brands, creators, and companies turn ideas into scalable short-form and campaign content using practical AI production workflows.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-teal-400 px-6 py-3 font-semibold text-black shadow-lg shadow-teal-400/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-400/30">
                  Start a Project
                </button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-teal-300/40 hover:bg-white/10">
                  View Services
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-black/30"
                >
                  <div className="text-3xl font-black text-teal-300">{stat.value}</div>
                  <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
              <div className="sm:col-span-3 rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 shadow-2xl shadow-teal-500/10">
                <div className="text-sm uppercase tracking-[0.24em] text-zinc-400">Built for</div>
                <div className="mt-4 grid gap-3 text-lg font-semibold text-white sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">Short-form brands</div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">Growth teams</div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">Founders</div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">Creative studios</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">What we actually do</h2>
          </div>
          <p className="max-w-xl text-right text-zinc-400">
            We focus on content execution, not vague AI hype. Strategy, production, and repeatable systems.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-teal-300/40 hover:shadow-2xl hover:shadow-teal-500/10"
            >
              <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-white to-teal-300" />
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Process</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A production workflow designed for speed and consistency
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              We combine human creative direction with AI-assisted execution so content can scale without turning generic.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 px-5 py-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-400 font-black text-black">
                  {index + 1}
                </div>
                <div className="text-lg font-medium text-white">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30">
            <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Why QUALIFYING</p>
            <h3 className="mt-4 text-3xl font-bold">Built for companies using AI seriously</h3>
            <p className="mt-5 leading-8 text-zinc-400">
              We are not just making visuals with AI. We design full content operations that support brand growth, campaign output, and scalable publishing.
            </p>
          </div>

          <div className="rounded-[2rem] border border-teal-300/20 bg-gradient-to-br from-teal-400/10 to-white/5 p-8 shadow-2xl shadow-teal-500/10">
            <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Contact</p>
            <h3 className="mt-4 text-3xl font-bold">Let’s build your AI content engine</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0 placeholder:text-zinc-500 focus:border-teal-300"
                placeholder="Your name"
              />
              <input
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0 placeholder:text-zinc-500 focus:border-teal-300"
                placeholder="Company"
              />
              <input
                className="sm:col-span-2 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0 placeholder:text-zinc-500 focus:border-teal-300"
                placeholder="Email"
              />
              <textarea
                className="sm:col-span-2 min-h-[120px] rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0 placeholder:text-zinc-500 focus:border-teal-300"
                placeholder="Tell us about your content goals"
              />
            </div>
            <button className="mt-5 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-teal-300">
              Send Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
