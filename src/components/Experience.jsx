import React from "react";
import history from "../constants/history.json";

const Experience = () => {

  const getImageUrl = (imageName) => {
    try {
      return require(`../assets/${imageName}`);
    } catch (error) {
      console.error(`Image not found: ${imageName}`);
      return "";
    }
  };

  return (
    <section className="py-16 text-neutral-300">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-12">
        EXPERIENCE
      </h2>

      {/* Experience List */}
      <ul className="container mx-auto px-8 space-y-8">
        {history.map((historyItem, id) => (
          <li
            key={id}
            className="flex flex-col lg:flex-row gap-6 p-6 border border-neutral-700 rounded-lg shadow-lg"
          >
            {/* Organization Logo */}
            <div className="flex-shrink-0">
              <img
                src={getImageUrl(historyItem.imgSrc)}
                alt={`${historyItem.organization} Logo`}
                className="w-24 h-24 object-contain rounded-md"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                {historyItem.role}, {historyItem.organization}
              </h3>
              <p className="text-sm text-neutral-400 mb-4">
                {historyItem.startDate} - {historyItem.endDate}
              </p>
              <ul className="list-disc ml-5 space-y-2 text-neutral-400">
                {historyItem.experiences.map((experience, id) => (
                  <li key={id} className="text-lg">
                    {experience}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;