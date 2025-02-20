// =============================
// Curriculum Roadmap Data
// =============================
const curriculumData = {
  milestones: [
    {
      id: 1,
      title: "Common Core 01 (M1)",
      start: "2024-11-07",
      end: "2024-12-19",
      description: "Introduction to C programming and fundamental concepts.",
      projects: [
        {
          id: "libft",
          name: "Libft",
          status: "mandatory",
          difficulty: 3,
          description: "Your first custom C library for basic functions.",
          keyTopics: [
            "String manipulation",
            "Memory functions",
            "Linked list construction",
            "Character checks",
          ],
          resources: ["man 3 malloc", "man 3 free"],
          tools: ["gcc", "make", "valgrind"],
        },
      ],
    },
    {
      id: 2,
      title: "Common Core 02 (M2)",
      start: "2024-12-19",
      end: "2025-02-18",
      description: "Advanced I/O projects and system basics.",
      projects: [
        {
          id: "ft_printf",
          name: "ft_printf",
          status: "mandatory",
          difficulty: 4,
          description: "Recreate the printf function. Master variadic functions.",
        },
        {
          id: "gnl",
          name: "get_next_line",
          status: "mandatory",
          difficulty: 4,
          description: "Read a line from a file descriptor. Manage buffer and static variables.",
        },
        {
          id: "born2beroot",
          name: "Born2beRoot",
          status: "mandatory",
          difficulty: 5,
          description: "System administration and virtualization basics.",
        },
      ],
    },
    {
      id: 3,
      title: "Common Core 03 (M3)",
      start: "2025-02-18",
      end: "2025-05-09",
      description: "Algorithmic thinking and game logic with basic 2D graphics.",
      projects: [
        {
          id: "so_long",
          name: "so_long",
          status: "mandatory",
          difficulty: 5,
          description: "Create a small 2D game using event-driven programming.",
        },
        {
          id: "pipex",
          name: "pipex",
          status: "mandatory",
          difficulty: 6,
          description: "Implement UNIX pipes to connect processes and practice IPC.",
        },
        {
          id: "minitalk",
          name: "minitalk",
          status: "mandatory",
          difficulty: 5,
          description: "Exchange data between processes using signals.",
        },
        {
          id: "push_swap",
          name: "push_swap",
          status: "mandatory",
          difficulty: 7,
          description: "Implement sorting algorithms on stack-based data structures.",
        },
      ],
    },
    {
      id: 4,
      title: "Common Core 04 (M4)",
      start: "2025-05-09",
      end: "2025-09-01",
      description: "Advanced graphics, concurrency and basic shell creation.",
      projects: [
        {
          id: "fdf",
          name: "FdF",
          status: "mandatory",
          difficulty: 6,
          description: "Draw 3D maps in 2D using MiniLibX.",
        },
        {
          id: "philosophers",
          name: "Philosophers",
          status: "mandatory",
          difficulty: 7,
          description: "Solve the dining philosophers problem using concurrency.",
        },
        {
          id: "minishell",
          name: "Minishell",
          status: "mandatory",
          difficulty: 8,
          description: "Build a simple shell handling command parsing and signals.",
        },
      ],
    },
    {
      id: 5,
      title: "Common Core 05 (M5)",
      start: "2025-09-01",
      end: "2026-02-10",
      description: "Introduction to C++ modules, networking and advanced system topics.",
      projects: [
        {
          id: "cpp00_04",
          name: "CPP Modules 00 - 04",
          status: "in-progress",
          difficulty: 6,
          description: "Learn object-oriented programming with C++ classes and inheritance.",
        },
        {
          id: "netpractice",
          name: "NetPractice",
          status: "mandatory",
          difficulty: 7,
          description: "Configure and troubleshoot networks with a focus on subnets.",
        },
        {
          id: "miniRT",
          name: "MiniRT",
          status: "optional",
          difficulty: 8,
          description: "Build a basic ray tracer to render 3D scenes using geometry and lighting.",
        },
      ],
    },
  ],
};

// =============================
// Pace Distribution Data
// =============================
// Non-accumulative distribution per milestone for different pace systems.
const paceDistribution = [
  { milestone: 0, days: [8, 13, 18, 24, 30, 45] },
  { milestone: 1, days: [24, 35, 42, 48, 58, 73] },
  { milestone: 2, days: [22, 33, 41, 49, 60, 60] },
  { milestone: 3, days: [36, 53, 67, 80, 98, 128] },
  { milestone: 4, days: [51, 77, 96, 115, 141, 141] },
  { milestone: 5, days: [71, 107, 134, 162, 197, 197] },
  { milestone: 6, days: [32, 47, 59, 70, 86, 86] },
];

// Accumulative distribution (cumulative deadlines)
const paceAccumulative = [
  { milestone: 0, days: [8, 13, 18, 24, 30, 45] },
  { milestone: 1, days: [32, 48, 60, 72, 88, 118] },
  { milestone: 2, days: [54, 81, 101, 121, 148, 178] },
  { milestone: 3, days: [90, 134, 168, 201, 246, 306] },
  { milestone: 4, days: [141, 211, 264, 316, 387, 447] },
  { milestone: 5, days: [212, 318, 398, 478, 584, 644] },
  { milestone: 6, days: [244, 365, 457, 548, 670, 730] },
];

// Column labels for pace speeds
const paceLabels = [
  "8 mths",
  "12 mths",
  "15 mths",
  "18 mths",
  "22 mths",
  "24 mths",
];