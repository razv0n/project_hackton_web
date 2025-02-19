import React from 'react';
import { Search, SlidersHorizontal, ZoomIn, ZoomOut } from 'lucide-react';
import { SortKey, ViewMode } from '../types';

interface ControlsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortKey: SortKey;
  onSortChange: (key: SortKey) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  zoomLevel: number;
  onZoomChange: (level: number) => void;
}

export function Controls({
  searchQuery,
  onSearchChange,
  sortKey,
  onSortChange,
  viewMode,
  onViewModeChange,
  zoomLevel,
  onZoomChange,
}: ControlsProps) {
  return (
    <div className="sticky top-0 z-10 bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-2">
          <SlidersHorizontal className="text-blue-400" />
          <select
            value={sortKey}
            onChange={(e) => onSortChange(e.target.value as SortKey)}
            className="rounded-lg border border-gray-200 py-2 px-3 focus:ring-2 focus:ring-blue-500"
          >
            <option value="difficulty">Difficulty</option>
            <option value="duration">Duration</option>
            <option value="track">Track</option>
            <option value="prerequisites">Prerequisites</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onZoomChange(Math.max(0.5, zoomLevel - 0.1))}
            className="p-2 rounded-lg hover:bg-blue-50"
            aria-label="Zoom out"
          >
            <ZoomOut className="text-blue-600" />
          </button>
          <button
            onClick={() => onZoomChange(Math.min(1.5, zoomLevel + 0.1))}
            className="p-2 rounded-lg hover:bg-blue-50"
            aria-label="Zoom in"
          >
            <ZoomIn className="text-blue-600" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewModeChange(viewMode === 'grid' ? 'overview' : 'grid')}
            className={`px-4 py-2 rounded-lg ${
              viewMode === 'grid'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
            }`}
          >
            {viewMode === 'grid' ? 'Grid View' : 'Overview'}
          </button>
        </div>
      </div>
    </div>
  );
}