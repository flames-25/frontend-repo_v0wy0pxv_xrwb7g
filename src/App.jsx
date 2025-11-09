import { useCallback } from "react";
import StoreLogo from "./components/StoreLogo";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  const handleJoin = useCallback(() => {
    // Replace with your Discord invite link
    window.open("https://discord.com/invite/your-invite", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-white to-blue-50 text-gray-900">
      <header className="sticky top-0 z-20">
        <div className="backdrop-blur bg-white/70 border-b border-white/60">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <StoreLogo />
            <button
              onClick={handleJoin}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 font-medium hover:bg-gray-800 transition-colors"
            >
              Join Discord
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero onJoinClick={handleJoin} />
        <Features />
        <Pricing onJoinClick={handleJoin} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
