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
            🚀 HQI Smart Feedback Escalation System
          </h3>

          {/* Project Overview */}

          <h4 className="text-2xl font-bold text-blue-300 mb-4">
            📝 Project Overview
          </h4>

          <p className="text-gray-300 leading-8">
            HQI Smart Feedback Escalation System is an internal workflow
            automation solution designed to streamline customer feedback
            escalation and significantly reduce manual effort.

            <br />
            <br />

            Previously, whenever customer feedback was received, operations
            associates manually reviewed the request, performed due diligence,
            prepared escalation notes, identified the appropriate team, and
            submitted the escalation manually. This process increased response
            time and delayed customer issue resolution.

            <br />
            <br />

            To solve this challenge, I designed an automated workflow where
            agents simply validate the feedback and click the
            <span className="font-semibold text-white">
              {" "}Schedule{" "}
            </span>
            button. The system automatically generates standardized escalation
            notes and routes the request to the appropriate team instantly,
            enabling faster action, improving operational efficiency, and
            reducing customer resolution time.
          </p>

          {/* Problem Statement */}

          <h4 className="text-2xl font-bold text-blue-300 mt-10 mb-4">
            📌 Problem Statement
          </h4>

          <div className="space-y-3 text-gray-300">

            <p>
              • Customer feedback had to be manually reviewed before escalation.
            </p>

            <p>
              • Agents manually prepared escalation notes for every request.
            </p>

            <p>
              • Identifying the appropriate team consumed additional time.
            </p>

            <p>
              • Manual escalation delayed customer issue resolution.
            </p>

            <p>
              • Repetitive operational work reduced overall productivity.
            </p>

          </div>
                    {/* Solution */}

          <h4 className="text-2xl font-bold text-blue-300 mt-10 mb-4">
            💡 Solution
          </h4>

          <p className="text-gray-300 mb-4">
            The automation simplifies the complete feedback escalation process
            through a single action:
          </p>

          <div className="space-y-3 text-gray-300">

            <p>
              • Agents validate the customer feedback before escalation.
            </p>

            <p>
              • Click the
              <span className="font-semibold text-white">
                {" "}Schedule{" "}
              </span>
              button to initiate the workflow.
            </p>

            <p>
              • Standardized escalation notes are generated automatically.
            </p>

            <p>
              • The request is instantly routed to the appropriate operational team.
            </p>

            <p>
              • The responsible team receives the request immediately and can begin
              action without waiting for manual processing.
            </p>

          </div>

          <p className="text-gray-300 leading-8 mt-6">
            By automating repetitive operational tasks, the solution minimizes
            manual effort, improves communication consistency, accelerates
            customer response time, and enables teams to resolve customer
            feedback much faster while maintaining operational excellence.
          </p>

          {/* Key Features */}

          <h4 className="text-2xl font-bold text-blue-300 mt-10 mb-5">
            ✨ Key Features
          </h4>

          <div className="space-y-3 text-gray-300">

            <p>⚡ One-click automated feedback escalation.</p>

            <p>📝 Automatic generation of standardized escalation notes.</p>

            <p>🎯 Intelligent routing to the appropriate operational team.</p>

            <p>🚀 Faster customer response and issue resolution.</p>

            <p>🤝 Reduced manual effort for support associates.</p>

            <p>📊 Improved SLA compliance and workflow efficiency.</p>

          </div>
                    {/* Business Impact */}

          <h4 className="text-2xl font-bold text-blue-300 mt-10 mb-5">
            📈 Business Impact
          </h4>

          <div className="space-y-3 text-gray-300">

            <p>⚡ Reduced manual escalation effort and repetitive operational tasks.</p>

            <p>🚀 Improved customer issue resolution time.</p>

            <p>📊 Increased SLA compliance through faster processing.</p>

            <p>📝 Standardized escalation notes across all support agents.</p>

            <p>🤝 Improved collaboration between cross-functional teams.</p>

            <p>💼 Enhanced overall operational productivity and workflow efficiency.</p>

          </div>

          {/* Tools & Technologies Used */}

          <h4 className="text-2xl font-bold text-blue-300 mt-10 mb-5">
            🛠 Tools & Technologies Used
          </h4>

          <div className="flex flex-wrap gap-4">

            {[
              "Claude AI",
              "HTML5",
              "CSS3",
              "JavaScript",
              "GitHub",
              "Gumloop",
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

          {/* Internal Project */}

          <h4 className="text-2xl font-bold text-blue-300 mt-10 mb-5">
            🔒 Internal Project
          </h4>

          <p className="text-gray-300 leading-8">
            This workflow automation was developed exclusively for internal
            operational use to streamline customer feedback escalation and
            improve response efficiency. Due to organizational confidentiality,
            the application and source code cannot be shared publicly.
          </p>
                    {/* Project Screenshot */}

          <h4 className="text-2xl font-bold text-blue-300 mt-12 mb-6">
            📸 Project Screenshot
          </h4>

          <div className="overflow-hidden rounded-2xl border border-white/10">

            <Image
              src="/image/project-hqi.png"
              alt="HQI Smart Feedback Escalation System"
              width={1400}
              height={800}
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
            />

          </div>

        </div>

      </div>
    </section>
  );
}