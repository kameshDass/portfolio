export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="text-gray-300 text-lg mb-8">
          I&apos;m open to new opportunities, collaborations, and professional connections.
        </p>

        <div className="card-hover bg-[#111827] rounded-3xl p-8 border border-white/10">
          <p className="text-gray-200 text-lg">📍 Chennai, Tamil Nadu, India - 601102</p>
          <p className="text-gray-200 text-lg">📞 +91 9597752296</p>
          <p className="text-gray-200 text-lg">📧 kameshdass90@gmail.com</p>
          <p className="text-gray-200 text-lg">
            🔗 LinkedIn:
            <br />
            <a
              href="https://www.linkedin.com/in/kamesh-dass-3a844524a/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/kamesh-dass-3a844524a
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
