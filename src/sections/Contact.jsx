import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="p-4 rounded-full bg-[#00ffd5]/10 mb-4">
            <Mail className="w-7 h-7 text-[#00ffd5]" />
          </div>

          <h2 className="text-3xl font-bold text-white font-mono mb-4">
            <span className="text-[#00ffd5]">04.</span> CONTACT
          </h2>

          <p className="text-gray-400 max-w-xl">
            I’m actively looking for ML / Data internships and learning
            opportunities. If you’d like to connect or discuss a project,
            feel free to reach out.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-left">

          <p className="text-gray-400 text-sm mb-6">
            You can reach me directly at:
          </p>

          <a
            href="mailto:singhnarayan0866@gmail.com"
            className="block text-lg font-mono text-[#00ffd5] hover:underline mb-8"
          >
            singhnarayan0866@gmail.com
          </a>

          <div className="flex gap-6">
            <a
              href="https://github.com/Narayan1006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#00ffd5] transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/singhnarayan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#00ffd5] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
