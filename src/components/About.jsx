import professionalPhoto from "../assets/IMG_9655.jpg";
import serverIcon from "../assets/serverIcon.png";
import cursorIcon from "../assets/cursorIcon.png";
import uiIcon from "../assets/uiIcon.png";

const AboutComponent = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold uppercase tracking-wide mb-8">
          About
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Professional Photo */}
          <img
            src={professionalPhoto}
            alt="Professional Photo"
            className="w-full lg:w-1/3 rounded-lg shadow-lg"
          />

          {/* About Items */}
          <ul className="flex flex-col gap-8 lg:gap-10">
            {/* Software Engineering Student */}
            <li className="flex items-center gap-4 bg-gradient-to-r from-blue-400/30 via-transparent to-transparent p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:via-blue-200/30 hover:to-transparent">
              <img
                src={cursorIcon}
                alt="Cursor Icon"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Student @ UCI
                </h3>
                <p className="text-lg text-neutral-400">
                  I'm currently a 3rd year majoring in Software Engineering! My releveant courses are
                  Data Structures and Algorithm, Software Testing and Quality Assurance, Software Design, and much more!
                </p>
              </div>
            </li>

            {/* Aspiring Software Engineer */}
            <li className="flex items-center gap-4 bg-gradient-to-r from-green-400/30 via-transparent to-transparent p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-200/30 hover:to-transparent">
              <img
                src={serverIcon}
                alt="Server Icon"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Aspiring Software Engineer
                </h3>
                <p className="text-lg text-neutral-400">
                  I am committed to continuous learning and growth in the field of technology. 
                  Whether it's mastering new frameworks or tackling challenging projects, 
                  I strive to expand my skills and make a lasting impact.
                </p>
              </div>
            </li>

            {/* Hobbies */}
            <li className="flex items-center gap-4 bg-gradient-to-r from-pink-400/30 via-transparent to-transparent p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-400 hover:via-pink-200/30 hover:to-transparent">
              <img
                src={uiIcon}
                alt="UI Icon"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Hobbies
                </h3>
                <p className="text-lg text-neutral-400">
                In my free time, I enjoy to play games, experiment in the kitchen, 
                explore new cafes, watch Korean dramas, watch the NBA, and spend quality time 
                with friends. If any of these align with your interests, feel free to connect!     
                </p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default AboutComponent