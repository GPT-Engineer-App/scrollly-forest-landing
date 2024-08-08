import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Tree, Code, Globe, Zap, Users } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a2f1a] text-[#e0e8e0]">
      <Header scrollY={scrollY} />
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Vision />
      <Footer />
    </div>
  );
};

const Header = ({ scrollY }) => (
  <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-[#1a2f1a] shadow-lg' : 'bg-transparent'}`}>
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-[#8bc34a]">Guillaume</div>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-[#8bc34a] transition-colors">About</a></li>
        <li><a href="#achievements" className="hover:text-[#8bc34a] transition-colors">Achievements</a></li>
        <li><a href="#projects" className="hover:text-[#8bc34a] transition-colors">Projects</a></li>
        <li><a href="#vision" className="hover:text-[#8bc34a] transition-colors">Vision</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[#1a2f1a] opacity-80"></div>
      <img src="https://images.unsplash.com/photo-1511497584788-876760111969" alt="Forest background" className="w-full h-full object-cover" />
    </div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.h1 
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Guillaume
      </motion.h1>
      <motion.p 
        className="text-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Founder of Vercel | Innovator | Tech Visionary
      </motion.p>
      <motion.a 
        href="#about"
        className="bg-[#8bc34a] text-[#1a2f1a] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#689f38] transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Discover More
      </motion.a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-[#2c4c2c]">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">About Guillaume</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg mb-6">
            Guillaume is the visionary founder of Vercel, a groundbreaking platform revolutionizing the way developers build and deploy web applications. With a passion for technology and a keen eye for innovation, Guillaume has led Vercel to become a leader in the JAMstack ecosystem.
          </p>
          <p className="text-lg">
            His journey in tech began at a young age, and his relentless pursuit of excellence has shaped him into one of the most influential figures in modern web development. Guillaume's philosophy centers around empowering developers and making the web faster, more efficient, and more accessible for everyone.
          </p>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a" alt="Guillaume" className="rounded-lg shadow-xl mx-auto object-cover w-full h-[400px]" />
          <div className="absolute -bottom-6 -right-6 bg-[#8bc34a] p-4 rounded-full">
            <Code size={32} className="text-[#1a2f1a]" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Achievements = () => (
  <section id="achievements" className="py-20 bg-[#1a2f1a]">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">Key Achievements</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Zap size={40} />, title: "Founded Vercel", description: "Created a game-changing platform for frontend developers" },
          { icon: <Globe size={40} />, title: "Next.js Innovation", description: "Spearheaded the development of Next.js, a popular React framework" },
          { icon: <Users size={40} />, title: "Community Builder", description: "Fostered a thriving developer community around Vercel and its technologies" }
        ].map((achievement, index) => (
          <motion.div 
            key={index}
            className="bg-[#2c4c2c] p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-[#8bc34a] mb-4">{achievement.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
            <p>{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-[#2c4c2c]">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">Notable Projects</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {[
          { title: "Vercel", description: "A cloud platform for static sites and Serverless Functions", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" },
          { title: "Next.js", description: "The React Framework for Production", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c" }
        ].map((project, index) => (
          <motion.div 
            key={index}
            className="bg-[#1a2f1a] rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[#b0c4b0]">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Vision = () => (
  <section id="vision" className="py-20 bg-[#1a2f1a] relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <Tree className="w-full h-full text-[#8bc34a]" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold mb-12 text-center">Guillaume's Vision</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl mb-8">
          "My vision is to create a world where every developer, regardless of their background or resources, can bring their ideas to life on the web. Through Vercel and our ecosystem of tools, we're not just building products; we're nurturing a future where creativity knows no bounds and innovation is accessible to all."
        </p>
        <motion.div 
          className="inline-block"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Leaf className="text-[#8bc34a] w-16 h-16 mx-auto" />
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1a2f1a] py-8">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; 2024 Guillaume | Vercel Founder. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="text-[#8bc34a] hover:text-[#689f38] transition-colors">Twitter</a>
        <a href="#" className="text-[#8bc34a] hover:text-[#689f38] transition-colors">LinkedIn</a>
        <a href="#" className="text-[#8bc34a] hover:text-[#689f38] transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

export default Index;
