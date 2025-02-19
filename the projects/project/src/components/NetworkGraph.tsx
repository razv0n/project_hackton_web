import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function NetworkGraph() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 400;
    const height = 300;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Sample data
    const nodes = Array.from({ length: 20 }, (_, i) => ({ id: i }));
    const links = Array.from({ length: 30 }, () => ({
      source: Math.floor(Math.random() * 20),
      target: Math.floor(Math.random() * 20)
    }));

    // Create simulation
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d: any) => d.id))
      .force("charge", d3.forceManyBody().strength(-30))
      .force("center", d3.forceCenter(width / 2, height / 2));

    // Draw links
    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#4A90E2")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 1);

    // Draw nodes
    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 3)
      .attr("fill", "#9B51E0");

    // Update positions
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("cx", (d: any) => d.x)
        .attr("cy", (d: any) => d.y);
    });

    return () => simulation.stop();
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <svg ref={svgRef} className="w-full h-[300px]" />
    </div>
  );
}