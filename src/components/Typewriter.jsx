import { useEffect, useState } from "react";

const Typewriter = ({ text, delay = 50 }) => {
  const [output, setOutput] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setOutput(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, delay, text]);

  return (
    <span>
      {output}
      <span className="inline-block w-2 h-5 bg-[#00ffd5] ml-1 animate-pulse" />
    </span>
  );
};

export default Typewriter;
