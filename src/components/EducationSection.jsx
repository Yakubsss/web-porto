import React, { useState } from "react";

const EducationSection = () => {
  const [modalData, setModalData] = useState({ 
    isOpen: false, 
    imgSrc: "", 
    title: "", 
    desc: [] 
  });

  const openModal = (imgSrc, title, desc) => {
    setModalData({ isOpen: true, imgSrc, title, desc });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, imgSrc: "", title: "", desc: [] });
  };

  return (
    <div id="education" className="education scroll-mt-32 mt-32 py-16 px-6 lg:px-20 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-violet-400 to-amber-400 inline-block">
            Education
          </h1>
        </div>

        <div className="group relative overflow-hidden bg-zinc-900/40 backdrop-blur-md p-6 md:p-8 rounded-[2.5rem] border border-zinc-800 hover:border-violet-500/50 transition-all duration-500 shadow-2xl mb-8">
           
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-20 h-20 bg-linear-to-br from-violet-600 to-indigo-700 rounded-2xl flex items-center justify-center shrink-0 rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-xl shadow-violet-900/40">
              <i className="ri-graduation-cap-line text-4xl text-white"></i>
            </div>

            <div className="text-center md:text-left w-full">
              <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-1">Tidar University</h2>
              <div className="h-1 w-10 bg-amber-500 my-3 rounded-full mx-auto md:mx-0"></div>
              <p className="text-zinc-300 font-semibold text-lg">Electrical Engineering</p>
              <p className="text-zinc-500 text-sm mb-4">Bachelor of Engineering (S.T.) • 2021 - 2025</p>
              <div className="relative px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-700 flex items-center gap-2 w-fit mx-auto md:mx-0">
                <span className="text-zinc-400 text-[9px] font-bold uppercase">GPA</span>
                <span className="text-xl font-black text-white">3.47<span className="text-amber-500 text-sm">/4.00</span></span>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4 ml-1">
            <span className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
              <i className="ri-flask-line text-amber-500"></i>
            </span>
            Academic Contribution
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            
            <div className="group bg-zinc-900/30 p-5 rounded-2xl border border-zinc-800 hover:bg-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="flex items-start gap-4 relative z-10">
                <div className="text-zinc-500 group-hover:text-amber-500 transition-colors shrink-0">
                  <i className="ri-settings-5-line ri-lg animate-[spin_4s_linear_infinite]"></i>
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-base text-white group-hover:text-amber-400 leading-tight">Control Systems Lab</h3>
                  <p className="text-xs text-zinc-500 mb-3">Assistant • 2023</p>
                  <button
                    onClick={() => openModal(
                      "/assets/certifiMagang/CertifAsprak/cert1.jpg", 
                      "Control Systems Lab Assistant",
                      [
                        "Guided students in understanding and analyzing the working principles of PID controllers in control systems.",
                        "Explained the influence of Kp, Ki, and Kd parameters on system response (rise time, overshoot, settling time).",
                        "Assisted students in tuning PID parameters using trial-and-error and analytical methods.",
                        "Provided troubleshooting support for calculation errors and simulation issues.",
                        "Evaluated laboratory reports based on performance analysis accuracy."
                      ]
                    )}
                    className="px-4 py-1.5 rounded-lg bg-zinc-800 text-zinc-400 text-xs font-semibold hover:bg-amber-500 hover:text-black transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 bg-amber-500 w-0 group-hover:w-full transition-all duration-700"></div>
            </div>

            
            <div className="group bg-zinc-900/30 p-5 rounded-2xl border border-zinc-800 hover:bg-zinc-800/50 hover:border-violet-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="flex items-start gap-4 relative z-10">
                <div className="text-zinc-500 group-hover:text-violet-500 transition-colors shrink-0">
                  <i className="ri-flashlight-line ri-lg"></i>
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-base text-white group-hover:text-violet-400 leading-tight">Power System Analysis Lab</h3>
                  <p className="text-xs text-zinc-500 mb-3">Assistant • 2024</p>
                  <button
                    onClick={() => openModal(
                      "/assets/certifiMagang/CertifAsprak/cert2.jpg", 
                      "Power System Lab Assistant",
                      [
                        "Guided students in conducting power system analysis using GNU Octave, including power flow calculations.",
                        "Assisted in developing Octave scripts to calculate system parameters (voltage, power losses, power factor).",
                        "Explained fundamental power system concepts and three-phase load imbalance analysis.",
                        "Provided troubleshooting support for script errors and programming logic in Octave.",
                        "Prepared practicum modules to enhance students' understanding of computational analysis."
                      ]
                    )}
                    className="px-4 py-1.5 rounded-lg bg-zinc-800 text-zinc-400 text-xs font-semibold hover:bg-violet-600 hover:text-white transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 bg-violet-500 w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </div>

     
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${modalData.isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div onClick={closeModal} className="absolute inset-0 bg-black/95 backdrop-blur-md"></div>
        
        <div className={`relative bg-zinc-950 border border-zinc-800 rounded-4xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-500 custom-scrollbar ${modalData.isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10"}`}>
          
          <div className="sticky top-0 bg-zinc-950/90 backdrop-blur-md p-6 border-b border-zinc-900 flex justify-between items-center z-20">
            <h3 className="text-white font-bold text-lg">{modalData.title}</h3>
            <button onClick={closeModal} className="text-zinc-500 hover:text-white transition-colors">
              <i className="ri-close-circle-line text-3xl"></i>
            </button>
          </div>
          
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="order-2 lg:order-1">
              <h4 className="text-violet-400 font-bold text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-px bg-violet-500"></span> Job Responsibilities
              </h4>
              <div className="space-y-3">
                {modalData.desc.map((item, index) => (
                  <div key={index} className="flex gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    <i className="ri-check-line text-violet-500 font-bold"></i>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            
            <div className="order-1 lg:order-2">
              <h4 className="text-amber-400 font-bold text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-px bg-amber-500"></span> Certificate
              </h4>
              <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-inner">
                <img src={modalData.imgSrc} alt="Certificate" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;