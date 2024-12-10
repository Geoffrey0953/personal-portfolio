const Navbar = () => {  return (
    <nav className="flex flex-wrap items-center justify-between py-6 px-8 bg-black">
      {/* Left: Name */}
      <div className="flex items-center gap-2">
        <a 
				className="text-white text-xl font-bold"
				href="/">
					Geoffrey Lee
				</a>
        <span className="text-gray-400">/</span>
        <a 
				className="text-gray-400 text-lg"
				href="/">
					이태민
				</a>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-12">
				<a href="about" 
				className="relative bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text 
				text-transparent text-xl font-bold py-2 px-4 border border-transparent 
				rounded-lg hover:border-blue-600 transition-all duration-300 shadow-md 
				hover:shadow-lg hover:scale-105">
					About
				</a>
        <a href="https://linkedin.com/in/geoffrey-lee-525816236"
				className="relative bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text 
				text-transparent text-xl font-bold py-2 px-4 border border-transparent 
				rounded-lg hover:border-blue-600 transition-all duration-300 shadow-md 
				hover:shadow-lg hover:scale-105">
					Linkedin
        </a>
        <a href="https://github.com/Geoffrey0953"
				className="relative bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text 
				text-transparent text-xl font-bold py-2 px-4 border border-transparent 
				rounded-lg hover:border-blue-600 transition-all duration-300 shadow-md 
				hover:shadow-lg hover:scale-105">
          Github
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
