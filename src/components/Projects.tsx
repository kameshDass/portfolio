"use client";

import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">

          {/* Project Title */}

          <h3 className="text-3xl font-bold text-blue-400 mb-6">
            🚀 HQI Notes Portal
          </h3>

          {/* Project Overview */}

          <h4 className="text-2xl font-bold text-blue-300 mb-4">
            📌 Project Overview
          </h4>

          <p className="text-gray-300 leading-8">
            Developed an internal productivity portal using
            <span className="font-semibold text-white"> HTML</span>,
            <span className="font-semibold text-white"> CSS</span>, and
            <span className="font-semibold text-white"> JavaScript</span> to
            standardize Zendesk note templates for frequently occurring
            scenarios. The portal was designed to help support agents quickly
            access, copy, and use predefined templates, reducing manual effort
            while improving documentation consistency and operational
            efficiency.
          </p>

          {/* Problem Statement */}

          <h4 className="text-2xl font-bold text-blue-300 mt-10 mb-4">
            🚀 Problem Statement
          </h4>

          <p className="text-gray-300 mb-4">
            Before implementing the portal:
          </p>

          <div className="space-y-3 text-gray-300">

            <p>• Agents manually typed repetitive Zendesk notes.</p>

            <p>
              • Ticket resolution time increased due to repetitive
              documentation.
            </p>

            <p>
              • Documentation consistency varied across different agents.
            </p>

            <p>
              • Maintaining SLA targets became more challenging.
            </p>

          </div>
                    {/* Solution */}

          <h4 className="text-2xl font-bold text-blue-300 mt-10 mb-4">
            💡 Solution
          </h4>

          <p className="text-gray-300 mb-4">
            Developed a centralized web portal that allows support agents to:
          </p>

          <div className="space-y-3 text-gray-300">

            <p>• Select the required support scenario.</p>

            <p>• Instantly copy predefined Zendesk note templates.</p>

            <p>• Paste the notes directly into Zendesk.</p>

            <p>
              • Eliminate repetitive manual typing and improve workflow
              efficiency.
            </p>

          </div>

          <p className="text-gray-300 leading-8 mt-6">
            The portal was deployed using
            <span className="font-semibold text-white">
              {" "}GitHub Pages{" "}
            </span>
            allowing the entire team to access it through a web browser
            without requiring any software installation.
          </p>

          {/* Technologies */}

          <h4 className="text-2xl font-bold text-blue-300 mt-10 mb-5">
            🛠 Technologies Used
          </h4>

          <div className="flex flex-wrap gap-4">

            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "GitHub Pages",
              "Zendesk",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-xl bg-black/20 border border-white/10 px-5 py-3 text-gray-200 hover:scale-105 transition-all duration-300"
              >
                {tech}
              </div>
            ))}

          </div>

          {/* Business Impact */}

          <h4 className="text-2xl font-bold text-blue-300 mt-10 mb-5">
            📈 Business Impact
          </h4>

          <div className="space-y-3 text-gray-300">

            <p>✅ Reduced repetitive manual typing.</p>

            <p>✅ Improved documentation consistency across support teams.</p>

            <p>✅ Supported SLA compliance.</p>

            <p>✅ Helped reduce average ticket resolution time.</p>

            <p>✅ Improved overall operational efficiency.</p>

          </div>

          {/* Live Demo */}

          <h4 className="text-2xl font-bold text-blue-300 mt-10 mb-5">
            🌐 Live Demo
          </h4>

          <a
            href="https://dkamesh-dev.github.io/KameshGopal-Grid/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            🚀 View Live Project
          </a>

          {/* Screenshot */}

          <h4 className="text-2xl font-bold text-blue-300 mt-12 mb-6">
            📸 Project Screenshot
          </h4>

          <div className="overflow-hidden rounded-2xl border border-white/10">

            <Image
              src="/image/project-hqi.png"
              alt="HQI Notes Portal"
              width={1400}
              height={800}
              className="w-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}