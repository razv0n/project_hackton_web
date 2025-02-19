import React from 'react';
import { Code2, Terminal, GitBranch, Binary, Network, Database, Globe, File as Mobile, Brain, Shield, Trophy, Users, ArrowRight, BookOpen, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-['Poppins'] pb-20">
      {/* Hero Section */}
      <header className="bg-[#144ee3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">42 School Roadmap</h1>
          <p className="text-xl max-w-2xl">
            Your comprehensive guide through the 42 curriculum. Follow this path from beginner to professional developer through our unique peer-learning approach.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-[#144ee3]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-[#144ee3]" />
              </div>
              <div>
                <h2 className="text-[35px] font-bold text-black mb-4">Your Journey at 42</h2>
                <p className="text-[20px] font-medium text-gray-600 mb-6">
                  The 42 curriculum follows a gamified approach where each level unlocks new challenges. 
                  Progress at your own pace and choose your specialization as you advance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Level 1: Foundation */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-[#144ee3] text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <h2 className="text-[35px] font-bold text-black">Foundation</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "C Programming Basics",
                description: "Master fundamental programming concepts through C language",
                duration: "4-6 weeks"
              },
              {
                icon: <Terminal className="w-6 h-6" />,
                title: "Unix Commands",
                description: "Learn essential command-line operations and shell scripting",
                duration: "2-3 weeks"
              },
              {
                icon: <GitBranch className="w-6 h-6" />,
                title: "Git Version Control",
                description: "Understand version control and collaborative development",
                duration: "1-2 weeks"
              },
              {
                icon: <Binary className="w-6 h-6" />,
                title: "Algorithm Fundamentals",
                description: "Study basic algorithms and problem-solving techniques",
                duration: "3-4 weeks"
              }
            ].map((module, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-[#144ee3]/10 rounded-full flex items-center justify-center mb-4 text-[#144ee3] group-hover:bg-[#144ee3] group-hover:text-white transition-colors duration-300">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="flex items-center text-sm text-[#144ee3]">
                  <Clock className="w-4 h-4 mr-2" />
                  {module.duration}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Level 2: Core Development */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-[#144ee3] text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <h2 className="text-[35px] font-bold text-black">Core Development</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Advanced C Programming",
                description: "Deep dive into memory management and system programming",
                duration: "8-10 weeks"
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Data Structures",
                description: "Implement and understand complex data structures",
                duration: "6-8 weeks"
              },
              {
                icon: <Network className="w-6 h-6" />,
                title: "Network Programming",
                description: "Build networked applications and understand protocols",
                duration: "5-6 weeks"
              },
              {
                icon: <Terminal className="w-6 h-6" />,
                title: "System Administration",
                description: "Learn to manage and configure Unix-like systems",
                duration: "4-5 weeks"
              }
            ].map((module, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-[#144ee3]/10 rounded-full flex items-center justify-center mb-4 text-[#144ee3] group-hover:bg-[#144ee3] group-hover:text-white transition-colors duration-300">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="flex items-center text-sm text-[#144ee3]">
                  <Clock className="w-4 h-4 mr-2" />
                  {module.duration}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Level 3: Specialization */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-[#144ee3] text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <h2 className="text-[35px] font-bold text-black">Specialization Tracks</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Web Development",
                description: "Master modern web technologies and frameworks",
                skills: ["JavaScript", "React", "Node.js", "Databases"]
              },
              {
                icon: <Mobile className="w-6 h-6" />,
                title: "Mobile Development",
                description: "Create native and cross-platform mobile applications",
                skills: ["Swift", "Kotlin", "React Native", "Mobile UX"]
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Artificial Intelligence",
                description: "Explore machine learning and AI applications",
                skills: ["Python", "TensorFlow", "Neural Networks", "Data Science"]
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Cybersecurity",
                description: "Learn to protect systems and networks from threats",
                skills: ["Network Security", "Cryptography", "Ethical Hacking", "Security Tools"]
              }
            ].map((track, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl group"
              >
                <div className="w-16 h-16 bg-[#144ee3]/10 rounded-full flex items-center justify-center mb-6 text-[#144ee3] group-hover:bg-[#144ee3] group-hover:text-white transition-colors duration-300">
                  {track.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{track.title}</h3>
                <p className="text-gray-600 mb-6">{track.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#144ee3] mb-2">Key Skills:</h4>
                  {track.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#144ee3]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Milestones */}
        <section>
          <h2 className="text-[35px] font-bold text-black mb-8">Key Milestones</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Complete Piscine",
                    description: "Intensive basic training to build your foundation"
                  },
                  {
                    icon: <Code2 className="w-6 h-6" />,
                    title: "Master Core Projects",
                    description: "Complete essential programming challenges"
                  },
                  {
                    icon: <GitBranch className="w-6 h-6" />,
                    title: "Choose Specialization",
                    description: "Select and excel in your preferred track"
                  },
                  {
                    icon: <Trophy className="w-6 h-6" />,
                    title: "Final Project",
                    description: "Demonstrate your expertise through a comprehensive project"
                  }
                ].map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#144ee3]/10 rounded-full flex items-center justify-center text-[#144ee3]">
                      {milestone.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#144ee3]/5 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4">Remember</h3>
                <p className="text-[20px] font-medium text-gray-600 mb-6">
                  Your journey is unique, and our community is here to support your learning adventure. Progress through each level at your own pace, with peer-to-peer learning and hands-on projects.
                </p>
                <div className="flex items-center gap-3 text-[#144ee3]">
                  <Users className="w-6 h-6" />
                  <span className="font-semibold">Join our learning community</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;