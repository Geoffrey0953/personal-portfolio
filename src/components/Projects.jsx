import projects from "../constants/projects.json";

const Projects = () => {
  const cardColors = [
    { from: "#FF6F61", to: "#D7263D" }, // Warm gradient
    { from: "#6A0572", to: "#A6036D" }, // Purple gradient
    { from: "#0078AA", to: "#00A7E1" }, // Blue gradient
    { from: "#F7B801", to: "#FD5E53" }, // Yellow-Orange gradient
  ];

  return (
    <section className="mt-20 text-white mx-10">
      <h2 className="text-4xl font-bold tracking-widest uppercase text-center mb-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, id) => (
          <div
            key={id}
            className={`rounded-2xl bg-gradient-to-br from-[${cardColors[id % cardColors.length].from}] to-[${cardColors[id % cardColors.length].to}] shadow-lg shadow-indigo-900/50 hover:shadow-indigo-400/50 transition-all duration-300 p-6 flex flex-col h-full border border-gray-700/50 hover:border-indigo-400`}
          >
            <div className="mb-4">
            </div>
            <h3 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-6">{project.title}</h3>
            <p className="text-sm text-slate-200 flex-grow">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.skills.map((skill, skillId) => (
                <li
                  key={skillId}
                  className="text-xs font-semibold rounded-full bg-gray-800 px-4 py-1 text-white"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold rounded-full bg-indigo-500 px-6 py-2 text-white hover:bg-[#7A9AF2] transition duration-300"
              >
                Demo
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold rounded-full bg-indigo-500 px-6 py-2 text-white hover:bg-[#7A9AF2] transition duration-300"
              >
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
