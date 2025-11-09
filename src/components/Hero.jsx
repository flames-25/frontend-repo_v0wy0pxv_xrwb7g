import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function Hero({ onJoinClick }) {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.25),transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 mb-4">
          <Rocket className="w-3.5 h-3.5 text-fuchsia-600" />
          Rawr! Power your cloud gaming
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
          KaepBlox | Cheapest RedFinger
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Cloud Android rental for Roblox and more. Fast performance, stable uptime, and prices that make your wallet purr.
        </p>

        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={onJoinClick}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-semibold px-6 py-3 shadow-lg shadow-fuchsia-600/20 hover:shadow-fuchsia-600/30 transition-all"
          >
            Join Discord
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        </div>
      </motion.div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-72 pointer-events-none">
        <div className="w-full h-full blur-3xl opacity-60 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500" />
      </div>
    </section>
  );
}
