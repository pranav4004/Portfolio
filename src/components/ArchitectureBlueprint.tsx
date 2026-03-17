import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Node {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  type: "input" | "process" | "storage" | "output";
}

const nodes: Node[] = [
  {
    id: "user",
    label: "User Interface",
    description: "React-based frontend capturing user interactions and data inputs.",
    x: 10,
    y: 50,
    type: "input",
  },
  {
    id: "api",
    label: "API Gateway",
    description: "Express.js server handling authentication and request routing.",
    x: 35,
    y: 50,
    type: "process",
  },
  {
    id: "ai",
    label: "AI Processing Layer",
    description: "OpenAI API integration for context-aware data processing and generation.",
    x: 60,
    y: 30,
    type: "process",
  },
  {
    id: "automation",
    label: "Automation Engine",
    description: "n8n/Make.com webhooks triggering complex background workflows.",
    x: 60,
    y: 70,
    type: "process",
  },
  {
    id: "db",
    label: "Primary Database",
    description: "PostgreSQL storage for persistent application data and user states.",
    x: 85,
    y: 50,
    type: "storage",
  },
];

const connections = [
  { from: "user", to: "api" },
  { from: "api", to: "ai" },
  { from: "api", to: "automation" },
  { from: "ai", to: "db" },
  { from: "automation", to: "db" },
];

export default function ArchitectureBlueprint() {
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  return (
    <div className="relative w-full aspect-[16/9] bg-charcoal/30 rounded-2xl border border-border-gray overflow-hidden p-8">
      <div className="absolute top-8 left-8">
        <span className="font-mono text-[10px] text-border-gray uppercase tracking-widest">
          System Architecture
        </span>
        <h3 className="font-display text-xl text-bone mt-2">Interactive Blueprint</h3>
      </div>

      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Connections */}
        {connections.map((conn, i) => {
          const from = nodes.find((n) => n.id === conn.from)!;
          const to = nodes.find((n) => n.id === conn.to)!;
          return (
            <motion.line
              key={`${conn.from}-${conn.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="currentColor"
              className="text-border-gray/30"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g
            key={node.id}
            onMouseEnter={() => setHoveredNode(node)}
            onMouseLeave={() => setHoveredNode(null)}
            className="cursor-crosshair"
          >
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="1.5"
              fill="currentColor"
              className={
                hoveredNode?.id === node.id ? "text-bone" : "text-border-gray"
              }
              animate={{
                r: hoveredNode?.id === node.id ? 2.5 : 1.5,
                opacity: hoveredNode?.id === node.id ? 1 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Pulsing effect for active nodes */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="2"
              fill="none"
              stroke="currentColor"
              className="text-industrial-blue/40"
              strokeWidth="0.2"
              animate={{ r: [1.5, 4], opacity: [0.8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-10 bg-bone text-obsidian p-6 rounded-lg shadow-2xl max-w-xs pointer-events-none"
            style={{
              left: `${hoveredNode.x}%`,
              top: `${hoveredNode.y}%`,
              transform: "translate(-50%, -120%)",
            }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 block mb-2">
              {hoveredNode.type}
            </span>
            <h4 className="font-display text-lg font-medium mb-2">
              {hoveredNode.label}
            </h4>
            <p className="font-sans text-sm leading-relaxed opacity-80">
              {hoveredNode.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-8 right-8 flex gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-border-gray"></div>
          <span className="font-mono text-[10px] text-border-gray uppercase tracking-widest">
            Idle
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-industrial-blue animate-pulse"></div>
          <span className="font-mono text-[10px] text-border-gray uppercase tracking-widest">
            Processing
          </span>
        </div>
      </div>
    </div>
  );
}
