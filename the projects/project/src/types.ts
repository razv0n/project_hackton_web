export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'mandatory' | 'optional';
  duration: number; // in hours
  difficulty: 1 | 2 | 3 | 4 | 5;
  track: 'common' | 'unix' | 'algorithms' | 'graphics' | 'web';
  techStack: string[];
  skills: string[];
  prerequisites: string[];
}

export type SortKey = 'difficulty' | 'duration' | 'track' | 'prerequisites';
export type ViewMode = 'grid' | 'overview';
export type TrackVisibility = Record<string, boolean>;