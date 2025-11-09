import { Box } from "lucide-react";

export default function StoreLogo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="relative">
        <div className="absolute inset-0 blur-md bg-gradient-to-tr from-fuchsia-500/50 to-blue-500/50 rounded-xl" />
        <div className="relative bg-white/90 backdrop-blur border border-white/60 shadow-sm rounded-xl p-2">
          <Box className="w-6 h-6 text-fuchsia-600" />
        </div>
      </div>
      <div>
        <p className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600">
          KaepBlox Store
        </p>
        <p className="text-xs text-gray-500 -mt-1">Cheapest RedFinger</p>
      </div>
    </div>
  );
}
