import React from 'react';
import { TrackVisibility } from '../types';

interface TrackFilterProps {
  visibility: TrackVisibility;
  onToggle: (track: string) => void;
}

export function TrackFilter({ visibility, onToggle }: TrackFilterProps) {
  const tracks = [
    { id: 'common', name: 'Common Core' },
    { id: 'unix', name: 'Unix' },
    { id: 'algorithms', name: 'Algorithms' },
    { id: 'graphics', name: 'Graphics' },
    { id: 'web', name: 'Web' },
  ];

  return (
    <div className="flex flex-wrap gap-3 p-4">
      {tracks.map((track) => (
        <button
          key={track.id}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            visibility[track.id]
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
          }`}
          onClick={() => onToggle(track.id)}
        >
          {track.name}
        </button>
      ))}
    </div>
  );
}