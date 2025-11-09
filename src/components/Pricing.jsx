import { BadgeDollarSign, Calendar, Smartphone, Bot } from "lucide-react";

export default function Pricing({ onJoinClick }) {
  return (
    <section id="pricing" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700">
            <BadgeDollarSign className="w-3.5 h-3.5 text-fuchsia-600" />
            Price List
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
            VIP RedFinger Android 10 & 12
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Harga ramah kantong, performa maksimal. Pesan cepat lewat Discord.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-sm text-fuchsia-700 bg-fuchsia-50 border border-fuchsia-200 rounded-full px-3 py-1">
            <Bot className="w-4 h-4" />
            Tersedia bot auto redeem code di store kami
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 7D Plan */}
          <div className="rounded-2xl border border-white/60 bg-white/60 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">VIP 7 Hari</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" /> 7D
                  <span className="mx-1">•</span>
                  <Smartphone className="w-4 h-4" /> Android 10 & 12
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-gray-900">Rp20.500</div>
              </div>
            </div>
            <button
              onClick={onJoinClick}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-semibold px-5 py-3 shadow-lg shadow-fuchsia-600/20 hover:shadow-fuchsia-600/30 transition-all"
            >
              Order via Discord
            </button>
          </div>

          {/* 30D Plan */}
          <div className="rounded-2xl border border-white/60 bg-white/60 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">VIP 30 Hari</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" /> 30D
                  <span className="mx-1">•</span>
                  <Smartphone className="w-4 h-4" /> Android 10 & 12
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-gray-900">Rp61.000</div>
              </div>
            </div>
            <button
              onClick={onJoinClick}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-semibold px-5 py-3 shadow-lg shadow-fuchsia-600/20 hover:shadow-fuchsia-600/30 transition-all"
            >
              Order via Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
