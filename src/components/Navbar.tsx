export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">

      <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">

        <a
          href="#home"
          className="px-5 py-2 rounded-full text-white hover:bg-blue-500/20 hover:text-blue-400 hover:border hover:border-blue-400 transition-all duration-300 hover:scale-105"
        >
          Home
        </a>

        <a
          href="#about"
          className="px-5 py-2 rounded-full text-white hover:bg-blue-500/20 hover:text-blue-400 hover:border hover:border-blue-400 transition-all duration-300 hover:scale-105"
        >
          About
        </a>

        <a
          href="#experience"
          className="px-5 py-2 rounded-full text-white hover:bg-blue-500/20 hover:text-blue-400 hover:border hover:border-blue-400 transition-all duration-300 hover:scale-105"
        >
          Experience
        </a>


        <a
          href="#skills"
          className="px-5 py-2 rounded-full text-white hover:bg-blue-500/20 hover:text-blue-400 hover:border hover:border-blue-400 transition-all duration-300 hover:scale-105"
        >
          Skills
        </a>

        <a
  href="#projects"
  className="px-5 py-2 rounded-full text-white hover:bg-blue-500/20 hover:text-blue-400 hover:border hover:border-blue-400 transition-all duration-300 hover:scale-105"
>
  Projects
</a>

        <a
  href="#achievements"
  className="px-5 py-2 rounded-full text-white hover:bg-blue-500/20 hover:text-blue-400 hover:border hover:border-blue-400 transition-all duration-300 hover:scale-105"
>
  Achievements
</a>


        <a
          href="#education"
          className="px-5 py-2 rounded-full text-white hover:bg-blue-500/20 hover:text-blue-400 hover:border hover:border-blue-400 transition-all duration-300 hover:scale-105"
        >
          Education
        </a>

<a
  href="#contact"
  className="px-5 py-2 rounded-full text-white hover:bg-blue-500/20 hover:text-blue-400 hover:border hover:border-blue-400 transition-all duration-300 hover:scale-105"
>
  Contact
</a>
      </div>

    </nav>
  );
}
