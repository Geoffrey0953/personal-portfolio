import Navbar from "../components/Navbar";
import AboutComponent from "../components/About";
import Experience from "../components/Experience";


const About = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      {/* Navbar */}
      <div className="container mx-auto px-8">
        <Navbar />
      </div>

      {/* About Section ( MAYBE ADD bg-black bg-opacity-60 ) */}
      <div className="relative rounded-lg p-10 mt-5 mx-10 lg:mx-20">
        <AboutComponent />
      </div>

      <Experience />
    </div>
  );
};

export default About;
