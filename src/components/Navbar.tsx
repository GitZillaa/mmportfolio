const Navbar = () => {
    return (
      <nav className="sticky top-0 bg-white shadow p-4 flex gap-4 justify-center z-50">
        <a href="#hero" className="hover:text-blue-500">Home</a>
        <a href="#about" className="hover:text-blue-500">Über mich</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#projects" className="hover:text-blue-500">Projekte</a>
        <a href="#contact" className="hover:text-blue-500">Kontakt</a>
      </nav>
    )
  }
  
  export default Navbar
  