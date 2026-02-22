import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // efek blur saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-900/80 backdrop-blur-md border-b border-zinc-700 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-white"><i className="ri-account-box-fill text-amber-400"></i>
          Porto<span className="text-violet-500">folio.</span>
        </h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#beranda" className="hover:text-violet-400 transition">Beranda</a>
          <a href="#tentang" className="hover:text-violet-400 transition">Tentang</a>
          <a href="#education" className="hover:text-violet-400 transition">Education</a>
          <a href="#experience" className="hover:text-violet-400 transition">Experience</a>
          <a href="#skill" className="hover:text-violet-400 transition">Skill</a>
          <a href="#proyek" className="hover:text-violet-400 transition">Proyek</a>
          <a href="#kontak" className="hover:text-violet-400 transition">Kontak</a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          <i className="ri-menu-search-fill "></i>
        </button>
      </div>

     
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-4" : "max-h-0"
        } bg-zinc-900/95 backdrop-blur-md`}
      >
        <div className="flex flex-col items-center gap-5 text-white font-medium">
          <a onClick={()=>setOpen(false)} href="#beranda">Beranda</a>
          <a onClick={()=>setOpen(false)} href="#tentang">Tentang</a>
          <a onClick={()=>setOpen(false)} href="#education">Education</a>
          <a onClick={()=>setOpen(false)} href="#experience">Experience</a>
          <a onClick={()=>setOpen(false)} href="#skill">Skill</a>
          <a onClick={()=>setOpen(false)} href="#proyek">Proyek</a>
          <a onClick={()=>setOpen(false)} href="#kontak">Kontak</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
