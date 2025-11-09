import { ShieldCheck, Zap, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: <BadgeDollarSign className="w-5 h-5 text-fuchsia-600" />,
    title: "Cheapest Prices",
    desc: "Transparent and fair. Get more playtime for less."
  },
  {
    icon: <Zap className="w-5 h-5 text-blue-600" />,
    title: "Fast Performance",
    desc: "Low latency sessions tuned for Roblox and heavy apps."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
    title: "Trusted & Secure",
    desc: "Stable uptime, protected accounts, and friendly support."
  }
];

export default function Features() {
  return (
    <section className="py-14">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/60 bg-white/60 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="shrink-0 rounded-xl bg-white border border-white/60 p-2">
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{f.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
