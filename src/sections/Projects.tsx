
const Projects = () => {
  return (
    <section id="projects" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Projekte</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded shadow">
          <h3 className="font-bold text-xl">Mein Portfolio</h3>
          <p>React + Tailwind, gehostet auf GitHub Pages</p>
          <a href="#" className="text-blue-500 mt-2 inline-block">Live ansehen</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
