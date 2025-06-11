
import { Mail, Phone, MapPin, Linkedin, Github, Code, Database, Brain } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-glow text-cyber-cyan">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring innovation to your team. Let's connect and build something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="cyber-border rounded-lg p-6 bg-black/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyber-cyan mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-cyber-purple" size={20} />
                  <span className="text-gray-300">akshreddy112211@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="text-cyber-purple" size={20} />
                  <span className="text-gray-300">+91 6363735940</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="text-cyber-purple" size={20} />
                  <span className="text-gray-300">Bhadravathi, Shivamogga, Karnataka - 577201</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Linkedin className="text-cyber-purple" size={20} />
                  <a href="#" className="text-cyber-cyan hover:text-cyber-magenta transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="space-y-8">
            <div className="cyber-border rounded-lg p-6 bg-black/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyber-cyan mb-6">Technical Skills</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="text-cyber-purple" size={18} />
                    <h4 className="text-cyber-cyan font-semibold">Programming Languages</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'SQL'].map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="text-cyber-purple" size={18} />
                    <h4 className="text-cyber-cyan font-semibold">Technical Tools</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Visual Studio Code', 'Eclipse', 'Jupyter Notebook'].map((tool) => (
                      <span key={tool} className="px-3 py-1 text-sm bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/30 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="text-cyber-purple" size={18} />
                    <h4 className="text-cyber-cyan font-semibold">Specializations</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Data Science', 'Web Development', 'Cybersecurity'].map((spec) => (
                      <span key={spec} className="px-3 py-1 text-sm bg-cyber-magenta/20 text-cyber-magenta border border-cyber-magenta/30 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
