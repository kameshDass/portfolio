export default function Skills() {
  const skillCategories = [
    {
      title: "Professional Skills",
      skills: [
        "Operations Management",
        "Work Order Management",
        "Vendor Management",
        "Stakeholder Management",
        "Cross-Functional Collaboration",
        "Escalation Management",
        "Process Improvement",
        "Root Cause Analysis",
        "Queue Management & Prioritization",
        "Case Management",
        "Documentation & SOP Management",
        "Performance Monitoring & Reporting",
        "Quality Assurance",
        "Problem Solving & Decision Making",
        "B2B & B2C Operations",
        "SLA & Quality Compliance",
      ],
    },

    {
      title: "Tools & Platforms",
      skills: [
        "Zendesk",
        "JIRA",
        "Salesforce",
        "CRM Platforms",
        "Internal Operations Tools",
      ],
    },

    {
      title: "Core Strengths",
      skills: [
        "Problem Solving",
        "Communication",
        "Team Collaboration",
        "Process Improvement",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Skills
        </h2>

        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                p-8
                backdrop-blur-2xl
                shadow-[0_0_35px_rgba(59,130,246,0.08)]
              "
            >
              <h3 className="mb-6 text-2xl font-bold text-blue-300">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.05]
                      px-6
                      py-5
                      text-center
                      text-gray-200
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      shadow-[0_0_25px_rgba(59,130,246,0.12)]
                      hover:-translate-y-1
                      hover:border-blue-400/40
                      hover:shadow-[0_0_45px_rgba(59,130,246,0.30)]
                    "
                  >
                    {/* Blue Ambient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 opacity-80"></div>

                    {/* Top Light */}
                    <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>

                    {/* Bottom Glow */}
                    <div className="absolute -bottom-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-blue-500/20 blur-2xl transition-all duration-300 group-hover:bg-blue-500/40"></div>

                    <span className="relative z-10 font-medium tracking-wide">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}