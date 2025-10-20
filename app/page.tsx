import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
        <Image 
          src="/profile.jpeg" 
          alt="Alex Naveh"
          width={128}
          height={128}
          className="rounded-full mx-auto mb-6 object-cover"
        />
          <h1 className="text-5xl font-bold mb-4">Alex Naveh</h1>
          <p className="text-2xl text-gray-600 mb-8">Fullstack Developer</p>
          {/* Social Links with Icons */}
          <div className="flex gap-6 justify-center mb-8">
            <a 
              href="https://www.github.com/alexnaveh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-all hover:scale-120"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/alexzhivot/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-all hover:scale-120"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
            <a 
              href="mailto:alexnaveh7@gmail.com"
              className="text-gray-700 hover:text-red-600 transition-all hover:scale-120"
              aria-label="Email"
            >
              <MdEmail size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I&apos;m a web developer passionate about creating clean, efficient, and user-friendly applications. 
            With a focus on modern web technologies, I enjoy turning ideas into functional and visually 
            appealing digital experiences.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I&apos;m not coding, I&apos;m exploring new frameworks and tools to continuously improve my craft 
            and stay up-to-date with industry best practices.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="font-semibold">React</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="font-semibold">Next.js</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="font-semibold">TypeScript</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="font-semibold">Tailwind CSS</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="font-semibold">JavaScript</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="font-semibold">HTML/CSS</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="font-semibold">Git</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="font-semibold">Node.js</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Project Name</h3>
              <p className="text-gray-700 mb-4">
                A brief description of your project. Explain what it does, what technologies 
                you used, and what problems it solves. Keep it concise but informative.
              </p>
              <div className="flex gap-3 mb-4">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Tailwind</span>
              </div>
              <div className="flex gap-4">
                <a 
                  href="PROJECT_GITHUB_URL" 
                  target="_blank"
                  className="text-gray-900 hover:underline font-semibold"
                >
                  View Code →
                </a>
                <a 
                  href="PROJECT_LIVE_URL" 
                  target="_blank"
                  className="text-gray-900 hover:underline font-semibold"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Im always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="mailto:alexnaveh7@gmail.com"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition text-lg font-semibold"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Alex Naveh. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <a 
              href="https://www.github.com/alexnaveh" 
              target="_blank"
              className="hover:text-gray-300 transition"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/alexzhivot/" 
              target="_blank"
              className="hover:text-gray-300 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}