import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectCard } from './components/ProjectCard';
import { Controls } from './components/Controls';
import { TrackFilter } from './components/TrackFilter';
import { projects } from './data/projects';
import { SortKey, ViewMode, TrackVisibility } from './types';

function App() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('difficulty');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [trackVisibility, setTrackVisibility] = useState<TrackVisibility>({
    common: true,
    unix: true,
    algorithms: true,
    graphics: true,
    web: true,
  });

  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const toggleTrack = (track: string) => {
    setTrackVisibility(prev => ({
      ...prev,
      [track]: !prev[track]
    }));
  };

  const filteredProjects = projects
    .filter(project => 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      trackVisibility[project.track]
    )
    .sort((a, b) => {
      switch (sortKey) {
        case 'difficulty':
          return b.difficulty - a.difficulty;
        case 'duration':
          return b.duration - a.duration;
        case 'track':
          return a.track.localeCompare(b.track);
        case 'prerequisites':
          return b.prerequisites.length - a.prerequisites.length;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-white">
      <motion.header 
        ref={heroRef}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] opacity-10" />
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
            alt="Coding Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 text-center p-8">
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            1337 School Curriculum
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Master the art of coding through our comprehensive project-based curriculum
          </motion.p>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full relative">
            <div className="w-1 h-2 bg-gray-600 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2" />
          </div>
        </motion.div>
      </motion.header>

      <main className="container mx-auto px-4 py-8">
        <Controls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortKey={sortKey}
          onSortChange={setSortKey}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          zoomLevel={1}
          onZoomChange={() => {}}
        />

        <TrackFilter
          visibility={trackVisibility}
          onToggle={toggleTrack}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => {}}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;