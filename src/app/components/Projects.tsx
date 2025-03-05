// Projects.tsx
import React from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string;
  videoUrl?: string;
  links?: { label: string; url: string }[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Physics Engine",
    description:
      "Developed a custom physics engine in C from scratch for simulations and game development. Implemented forces, collisions, memory handling, and more. Created demos like N-Body, Frogger, Pacman, and Space Invaders.",
    techStack: "C, GitLab, Emscripten, SDL2",
    videoUrl: "/physics_engine.mp4",
    links: [
      {
        label: "Source Code",
        url: "https://github.com/Rahel-Joshi/Physics-Engine/tree/main",
      },
    ],
  },
  {
    id: "2",
    title: "Path Finder App",
    description:
      "Designed a campus map app with real-time route visualization. Uses Dijkstra’s Algorithm, heaps, and hashmaps to find shortest paths between buildings. Interactive features include location search, zoom, and drag.",
    techStack: "Java, GitLab, JavaScript, CSS, HTML, OpenStreetMap",
    videoUrl: "/Map.mp4",
  },
  {
    id: "3",
    title: "Movie Finder App",
    description:
      "A movie search tool with title autocompletion using a custom Trie data structure. Displays summaries, cast, and ratings. Efficiently handles metadata for quick, accurate searches.",
    techStack: "Java, GitLab, JavaScript, CSS, HTML, IMDb Dataset",
    videoUrl: "/Movie.mp4",
  },
  {
    id: "4",
    title: "ECG Sonification",
    description:
      "Converts ECG signals into audio to detect heart irregularities in real time. Signals collected via AD8232 and Arduino, then processed (FFT, Wavelets) for noise reduction and wave amplification.",
    techStack: "Python, NumPy, Matplotlib, Pandas, SciPy",
    videoUrl: "/ECG.mp4",
    links: [
      { label: "Paper", url: "/ECG_Sonification.pdf" },
      { label: "Poster", url: "/ECG Slides.pdf" },
    ],
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1b1b1e] rounded-lg p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            {project.videoUrl && (
              <div
                className="mb-4 relative"
                style={{ paddingBottom: "56.25%" }}
              >
                <video className="absolute top-0 left-0 w-full h-full" controls>
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <p className="text-gray-300 mb-3">{project.description}</p>
            <p className="text-sm text-gray-400">
              Tech Stack: {project.techStack}
            </p>
            {project.links && project.links.length > 0 && (
              <div className="mt-3 flex gap-4">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-500 text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          className="text-blue-400 hover:text-blue-500"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Rahel-Joshi/Rahel-Joshi.github.io"
        >
          Website Source Code
        </a>
      </div>
    </section>
  );
};
