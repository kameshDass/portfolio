export default function Achievements() {
  const achievements = [

 {
      title: "Process Improvement",
      description:
        "Received “Best Performer award for being involved in Process Improvement plans,minimising errors and ensuring the achievement of the defined metrics.."
    },

    {
      title: "Operational Excellence",
      description:
        "Consistently maintained SLA compliance and quality standards while managing customer and operational cases."
    },

    {
      title: "Customer Satisfaction",
      description:
        "Successfully handled customer escalations and collaborated with teams to deliver timely resolutions."
    },

   
  ];


  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center justify-center px-6"
    >

      <div className="max-w-5xl w-full">

        <h2 className="text-4xl font-bold text-center mb-12">
          Achievements & Awards
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {achievements.map((achievement, index) => (

            <div
              key={index}
              className="card-hover bg-[#111827] rounded-3xl p-8 border border-white/10"
            >

              <h3 className="text-xl font-bold text-blue-300">
                {achievement.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {achievement.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}