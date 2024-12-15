import projects from "../constants/projects.json";

const Projects = () => {
  return (
    <section className="mt-20 text-white mx-10">
      <h2 className="text-4xl font-bold tracking-widest uppercase text-center mb-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, id) => (
          <div
            key={id}
            className="rounded-2xl bg-gradient-to-br from-[#4c3f94] to-[#201f3f] shadow-lg shadow-indigo-900/50 hover:shadow-indigo-400/50 transition-all duration-300 p-6 flex flex-col h-full"
          >
            <div className="mb-4">
            </div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 flex-grow">
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
                className="text-sm font-semibold rounded-full bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 transition duration-300"
              >
                Demo
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold rounded-full bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 transition duration-300"
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
