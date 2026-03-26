
import { motion } from 'framer-motion';
// import {  Github, Code, Palette, ShoppingCart, Users } from 'lucide-react';

const Backend = () => {
  const projects = [
    {
      title: 'Chatting Ai',
      description: 'I built a full-stack Chat AI application where React.js handles the frontend UI and Node.js with Express.js manages the backend APIs. MongoDB is used to store and manage chat history.',
  
      image: 'chatting.png',
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
      source:"https://github.com/sudarshan1pass/ChatAI-Assistant.git",
    //   icon: ShoppingCart,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Employee App',
      description: "Developed a Mern-stack  Employee Management Application using React.js and Redux for efficient state management. Built RESTful APIs with Node.js and Express.js, and integrated MongoDB for secure data storage. Implemented CRUD operations (Create, Read, Update, Delete) with a responsive and user-friendly interface.",
      image: 'Employee.png',
      technologies: ['React.js', 'Redux','Express.js','Node.js','MongoDB'],
    //   icon: Users,
      gradient: 'from-emerald-500 to-cyan-600',
       source:"https://github.com/sudarshan1pass/Employee.git",
    },
    {
      title: 'BlogApp',
   description: "Developed the backend of a Blog Application using Node.js and Express.js. Implemented complete CRUD (Create, Read, Update, Delete) functionality for blog posts and integrated MongoDB for efficient data storage and management. Designed RESTful APIs to handle blog operations securely and efficiently.",
      image: 'BlogApp.png',
      technologies: ['Express','Node.js','MongoDB'],
    //   icon: Code,
      gradient: 'from-orange-500 to-red-600',
       source:"",
    },
    {
  title: 'Tic Tac Toe',
  description: `Developed a full-stack Tic Tac Toe application with an AI-based opponent. Built the frontend using React.js with dynamic UI updates and smooth user interactions. Implemented backend services using Node.js and Express.js, and integrated MongoDB Atlas for storing game data.

Designed and tested RESTful APIs using Postman, and performed API integration on the frontend to handle game logic and data flow efficiently.

Implemented an AI opponent using basic decision-making logic, allowing users to play against the computer. The application supports real-time game state updates, winner detection, and responsive design for multiple devices.`,
  image: 'tictactoe.png',
  technologies: ['React.js','Node.js','Express.js','MongoDB'],
  gradient: 'from-pink-500 to-violet-600',
  source: "https://github.com/sudarshan1pass/Tic-Tac-Toe-mern-stack-project.git"
}
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16" 
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4"> Backend           Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing web experiences
          </p>
        </motion.div>

        {/* <div className="grid lg:grid-cols-3 gap-8 w-[80%]"> */}
          <div className="grid  sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                /> 
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="absolute top-4 left-4">
                  <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-lg shadow-lg`}>
                    {/* <project.icon size={24} className="text-white" /> */}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {/* <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a> */} 
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.source ?project.source:'#'} 
                    className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    {/* <Github size={18} /> */}
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Backend;
