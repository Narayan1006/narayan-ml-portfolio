import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">

        <p className="font-mono">
          © {new Date().getFullYear()} Narayan Singh • ML Portfolio
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/NarayanSingh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ffd5] transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ffd5] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="mailto:narayansingh@example.com"
            className="hover:text-[#00ffd5] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
