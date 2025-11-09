export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} KaepBlox. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="#policy" className="hover:text-gray-900">Policy</a>
        </div>
      </div>
    </footer>
  );
}
