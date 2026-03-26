import React from "react";

const TimelineItem = ({ role, company, date, logo, points }) => {
  return (
    <div className="flex gap-6 mb-12 max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4  border-white flex items-center justify-center bg-[#0B0F19] overflow-hidden" style={{
          
        }}>
          {logo ? (
            <img
              src={logo}
              alt={company}
              className="w-full h-full  object-cover"
            />
          ) : (
            <span className="font-bold text-sm text-white">
              {company[0]}
            </span>
          )}
        </div>
        <div className="h-full w-1 bg-white mt-2"></div>
      </div>

      {/* Content */}
      <div className="bg-[#111827] p-6 rounded-2xl shadow-lg flex-1 text-white">
        <p className="text-gray-400 mb-2">{date}</p>
        <h2 className="text-2xl font-bold">{role}</h2>
        <p className="text-blue-400 font-semibold mb-4">{company}</p>

        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experices = () => {
  const data = [
    {
      role: "React.js Developer",
      company: "People Maketh",
      date: "Oct 2024 - Apr 2025",
      logo:
        "https://media.licdn.com/dms/image/v2/D560BAQF02rB7FViWkw/company-logo_100_100/company-logo_100_100/0/1724225996638/people_maketh_logo?e=2147483647&v=beta&t=1A7D5FiKOnVlUbNFFFlKI5M-E8KY-9WPqHuR1yx6Xj8",
      points: [
        "Building and maintaining scalable web applications.",
        "Working with React.js, Node.js, and Typescript technologies.",
        "Creating responsive, user-friendly UI with Material UI.",
        "Ensuring performance optimization and cross-browser support.",
        "Developed a CRM platform for healthcare management.",
      ],
    },
    {
      role: "React.js Developer",
      company: "Dreamer Infotech",
      date: "Dec 2025 - Present",
      logo: "https://www.techstack.in/blog/wp-content/uploads/2022/10/DREAMER.png",
      points: [
        "Developing and maintaining web applications using React.js.",
        "Collaborating with designers and developers.",
        "Implementing responsive design.",
        "Participating in code reviews.",
        "Learning Backend development.",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen py-16 px-4">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-semibold text-gray-400">
          What I have done so far
        </h3>
        <h1 className="text-5xl font-bold text-white">
          Work Experience
        </h1>
      </div>

      {data.map((exp, index) => (
        <TimelineItem key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experices;