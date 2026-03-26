import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code with best practices and modern patterns.",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description:
        "Creating stunning user interfaces that provide excellent user experience.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Building fast, optimized applications with attention to performance metrics.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate React.js developer with expertise in modern web
            technologies. I love creating beautiful, functional applications
            that solve real-world problems.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              As a dedicated frontend developer, I specialize in the React.js
              ecosystem and modern web development. My passion lies in creating
              seamless user experiences through clean code and thoughtful
              design.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              I have hands-on experience with React.js, Redux, Tailwind CSS,
              Node.js, Express.js, and MongoDB. I build full-stack applications
              with complete CRUD functionality and RESTful APIs.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              I am continuously learning new technologies and improving my
              skills to stay updated with modern development standards.
            </p>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-3 rounded-xl">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;