import { CONTACT } from "../constants";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b text-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-widest uppercase text-center mb-10">Contact</h2>
        <p className="text-lg mb-8">Feel free to reach out!</p>
        <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-8">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-lg hover:text-indigo-300 transition duration-300"
            >
              {CONTACT.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-2xl" />
            <a
              href="http://www.linkedin.com/in/geoffrey-lee-525816236"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-indigo-300 transition duration-300"
            >
              linkedin.com/geoffreylee
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub className="text-2xl" />
            <a
              href="https://github.com/Geoffrey0953"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-indigo-300 transition duration-300"
            >
              github.com/Geoffrey0953
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
