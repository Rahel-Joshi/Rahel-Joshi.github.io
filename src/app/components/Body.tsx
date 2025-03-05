"use client";
import React from "react";

export const Body: React.FC = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="pt-20 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Hi, I'm Rahel</h2>
          <p className="mb-4">
            I'm a second year student at Caltech. I've just finished my SURF — check out my{" "}
            <a
              href="https://github.com/Rahel-Joshi/SURF2024"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              GitHub repository
            </a>{" "}
            and view the{" "}
            <a
              href="/SURF Slides.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              slides
            </a>
            . I'm passionate about quantitative trading, software engineering, and machine learning.
          </p>
          <p className="mb-4">Feel free to check out my social profiles or contact me:</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Rahel-Joshi"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/rahel-j-49a55a236"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              Instagram
            </a>
          </div>
          <p className="mt-4 text-white">
            Email: rrjoshi [at] caltech [dot] edu
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-6">
            {/* Experience Item 1 */}
            <div className="p-4 border border-gray-700 rounded-lg text-center">
              <h3 className="text-2xl font-semibold">
                Summer Undergrad Research Fellow (SURF) @ Caltech
              </h3>
              <p className="mt-2">ML to emulate black hole x-ray spectra</p>
              <p className="mt-1 text-sm text-gray-400">May 2024 - August 2024</p>
            </div>
            {/* Experience Item 2 */}
            <div className="p-4 border border-gray-700 rounded-lg text-center">
              <h3 className="text-2xl font-semibold">Anson L. Clark Scholar</h3>
              <p className="mt-2">
                ECG sonification development<br />
                1 of 12 scholars from 700+ applicants
              </p>
              <p className="mt-1 text-sm text-gray-400">Summer 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-[#1b1b1e] rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Physics Engine</h3>
              <div className="mb-4 relative" style={{ paddingBottom: "56.25%" }}>
                <video className="absolute top-0 left-0 w-full h-full" controls>
                  <source src="/physics_engine.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-gray-300 mb-3">
                Developed a custom physics engine in C from scratch for simulations and game development. Implemented forces, collisions, memory handling, and more. Created demos like N-Body, Frogger, Pacman, and Space Invaders.
              </p>
              <p className="text-sm text-gray-400">
                Tech Stack: C, GitLab, Emscripten, SDL2
              </p>
            </div>
            {/* Project 2 */}
            <div className="bg-[#1b1b1e] rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Path Finder App</h3>
              <div className="mb-4 relative" style={{ paddingBottom: "56.25%" }}>
                <video className="absolute top-0 left-0 w-full h-full" controls>
                  <source src="/Map.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-gray-300 mb-3">
                Designed a campus map app with real-time route visualization. Uses Dijkstra’s Algorithm, heaps, and hashmaps to find shortest paths between buildings. Interactive features include location search, zoom, and drag.
              </p>
              <p className="text-sm text-gray-400">
                Tech Stack: Java, GitLab, JavaScript, CSS, HTML, OpenStreetMap
              </p>
            </div>
            {/* Project 3 */}
            <div className="bg-[#1b1b1e] rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Movie Finder App</h3>
              <div className="mb-4 relative" style={{ paddingBottom: "56.25%" }}>
                <video className="absolute top-0 left-0 w-full h-full" controls>
                  <source src="/Movie.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-gray-300 mb-3">
                A movie search tool with title autocompletion using a custom Trie data structure. Displays summaries, cast, and ratings. Efficiently handles metadata for quick, accurate searches.
              </p>
              <p className="text-sm text-gray-400">
                Tech Stack: Java, GitLab, JavaScript, CSS, HTML, IMDb Dataset
              </p>
            </div>
            {/* Project 4 */}
            <div className="bg-[#1b1b1e] rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">ECG Sonification</h3>
              <div className="mb-4 relative" style={{ paddingBottom: "56.25%" }}>
                <video className="absolute top-0 left-0 w-full h-full" controls>
                  <source src="/ECG.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-gray-300 mb-3">
                Converts ECG signals into audio to detect heart irregularities in real time. Signals collected via AD8232 and Arduino, then processed (FFT, Wavelets) for noise reduction and wave amplification.
              </p>
              <p className="text-sm text-gray-400">
                Tech Stack: Python, NumPy, Matplotlib, Pandas, SciPy
              </p>
            </div>
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
        </div>
      </section>
    </>
  );
};
