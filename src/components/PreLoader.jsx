import { useState, useEffect } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const name = "YAKUB VEBRIAN";

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), 2200);
    const finalTimer = setTimeout(() => setLoading(false), 3200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finalTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center bg-[#02010a] z-50 transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExiting ? "translate-y-full" : "translate-y-0"
      }`}
    >
     
      <div className="relative overflow-hidden flex flex-col items-center">
        
        
        <div className="flex space-x-2">
          {name.split("").map((char, index) => (
            <span
              key={index}
              className={`text-white text-xl md:text-3xl font-light tracking-tighter transition-all duration-800 ease-out ${
                isExiting ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
                display: char === " " ? "inline-block" : "block",
                minWidth: char === " " ? "10px" : "auto"
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <div className="mt-4 w-full max-w-37.5 h-px bg-white/10 relative overflow-hidden">
          <div 
            className={`absolute inset-0 bg-linear-to-r from-transparent via-purple-500 to-transparent transition-transform duration-2000 ease-in-out ${
              isExiting ? "translate-x-full" : "-translate-x-full"
            }`}
            style={{ animation: !isExiting ? "shimmer 2s infinite" : "none" }}
          ></div>
        </div>
      </div>

      <div 
        className={`absolute w-1/2 h-1/2 bg-purple-600/5 blur-[120px] rounded-full transition-opacity duration-1000 ${
          isExiting ? "opacity-0" : "opacity-100"
        }`}
      ></div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default PreLoader;