export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#0B1120] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Education</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            My academic journey and educational background.
          </p>
        </div>
``
        {/* Education Card */}
        <div className="card-hover bg-[#111827] border border-white/10 rounded-3xl p-10">

          <p className="text-blue-500 font-semibold">
            2015 – 2019
          </p>

          <h3 className="text-3xl font-bold mt-3">
            Bachelor of Engineering (B.E)
          </h3>

          <h4 className="text-xl text-gray-300 mt-2">
            Mechanical Engineering
          </h4>

          <p className="text-gray-400 mt-3">
            Anna University
          </p>

          <div className="mt-8">
            <h5 className="text-xl font-semibold text-white mb-4">
              Highlights
            </h5>

            <ul className="space-y-3 text-gray-300 leading-8">
              <li>✔ Completed Bachelor of Engineering in Mechanical Engineering.</li>

              <li>✔ Built strong analytical and problem-solving skills.</li>

              <li>✔ Developed teamwork, communication and project coordination abilities.</li>

              <li>✔ Learned engineering principles, quality standards and process improvement concepts.</li>

              <li>✔ Participated in academic projects and technical activities.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
