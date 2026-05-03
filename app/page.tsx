export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For engineering managers &amp; team leads
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Turn chaotic Slack threads into{" "}
          <span className="text-[#58a6ff]">structured standup summaries</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Slack workspace, pick your channels, and get AI-generated daily or weekly summaries with action items and blockers — delivered automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get started for $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="text-xs text-[#8b949e] mb-3 uppercase tracking-wider"># engineering — standup summary · Today</div>
          <div className="space-y-3">
            <div>
              <span className="text-[#58a6ff] font-semibold">✅ Completed</span>
              <p className="text-sm mt-1 text-[#c9d1d9]">Deployed auth service to staging, fixed pagination bug in dashboard, reviewed 3 PRs.</p>
            </div>
            <div>
              <span className="text-[#f0883e] font-semibold">🚧 In Progress</span>
              <p className="text-sm mt-1 text-[#c9d1d9]">Migrating legacy API endpoints, writing unit tests for billing module.</p>
            </div>
            <div>
              <span className="text-[#f85149] font-semibold">🔴 Blockers</span>
              <p className="text-sm mt-1 text-[#c9d1d9]">Waiting on design approval for onboarding flow. Need DB access for prod migration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Slack channels monitored",
              "Daily & weekly AI summaries",
              "Action items & blockers extracted",
              "Email delivery of summaries",
              "Slack bot notifications",
              "Up to 10 team members"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-center"
          >
            Start free trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to Slack?",
              a: "You install the Standup AI Slack app via OAuth. It requests read access to the channels you choose — no write permissions needed unless you want bot notifications."
            },
            {
              q: "How are summaries generated?",
              a: "Messages from your selected channels are analyzed by OpenAI GPT-4. The AI extracts completed work, in-progress tasks, and blockers into a clean structured format."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Standup AI. All rights reserved.
      </footer>
    </main>
  );
}
