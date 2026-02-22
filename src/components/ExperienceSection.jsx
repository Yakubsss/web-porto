import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { listexperience } from "../data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ExperienceSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewerImg, setViewerImg] = useState(null);

  const exp = listexperience[0];
  if (!exp) return null;

  /* ESC close modal */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setViewerImg(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const jobIcons = [
    "ri-leaf-line",
    "ri-customer-service-2-line",
    "ri-flashlight-line",
    "ri-dashboard-3-line",
    "ri-file-list-3-line"
  ];

  return (
    <section className="scroll-mt-20 py-16 px-4 sm:px-6 lg:px-20 relative" id="experience">

      {/* Glow */}
      <div className="absolute inset-0 bg-violet-600/5 blur-[120px] -z-10"></div>

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-linear-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">
          EXPERIENCE
        </h1>
      </div>

      {/* Card */}
      <div className="max-w-2xl mx-auto bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-4xl p-7 hover:border-violet-500/40 transition-all duration-500 shadow-xl">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-violet-400">
            {exp.company}
          </h2>
          <p className="text-zinc-300 mt-2 text-sm">{exp.location}</p>
          <p className="text-xs text-zinc-500 italic mt-1">{exp.role}</p>
        </div>

        <div className="w-full h-px bg-zinc-800 my-6"></div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-violet-600 hover:bg-violet-700 py-3.5 rounded-2xl text-white font-bold text-sm transition active:scale-95"
        >
          View Detail
        </button>
      </div>

     
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 transition-all duration-500 ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        
        {/* backdrop */}
        <div onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/95 backdrop-blur-md"></div>

        {/* panel */}
        <div className={`relative bg-zinc-950 border border-zinc-800 rounded-4xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col transition-all duration-500 ${isModalOpen ? "scale-100" : "scale-95"}`}>

          {/* header */}
          <div className="p-6 border-b border-zinc-900 flex justify-between items-center">
            <div>
              <h3 className="text-white font-bold text-lg">{exp.company}</h3>
              <p className="text-violet-400 text-xs uppercase tracking-widest">{exp.role}</p>
            </div>
            <button onClick={() => setIsModalOpen(false)} className="text-zinc-500 hover:text-white">
              <i className="ri-close-circle-fill text-3xl"></i>
            </button>
          </div>

          {/* body */}
          <div className="overflow-y-auto p-8 md:p-10">
            <div className="grid lg:grid-cols-12 gap-10">

              {/* LEFT */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-white font-bold text-sm">Responsibilities</h4>

                {[
                  "Performed vegetation clearance along distribution lines.",
                  "Handled customer installation complaints & MCB troubleshooting.",
                  "Corrected improper service connections causing voltage drops.",
                  "Measured transformer load using clamp & amp meters.",
                  "Prepared field documentation & technical reports."
                ].map((job, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-violet-500/30 transition">
                    <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400">
                      <i className={`${jobIcons[i]} text-lg`}></i>
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed">{job}</p>
                  </div>
                ))}
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-5 space-y-8">

                {/* certificate */}
                <div>
                  <h4 className="text-zinc-500 text-xs uppercase tracking-widest mb-2">
                    Certificate
                  </h4>
                  <img
                    src={exp.certificate}
                    onClick={() => setViewerImg(exp.certificate)}
                    className="rounded-2xl border border-zinc-800 cursor-zoom-in hover:scale-[1.02] transition"
                  />
                </div>

                {/* docs */}
                <div>
                  <h4 className="text-zinc-500 text-xs uppercase tracking-widest mb-2">
                    Documentation
                  </h4>

                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500 }}
                  >
                    {exp.documentation.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="aspect-4/3 bg-zinc-900">
                          <img
                            src={img}
                            onClick={() => setViewerImg(img)}
                            className="w-full h-full object-cover cursor-zoom-in"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-6 transition ${viewerImg ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div onClick={() => setViewerImg(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md"></div>

        <img
          src={viewerImg}
          className="relative max-h-[90vh] rounded-2xl border border-zinc-800 shadow-2xl animate-[fadeIn_.35s_ease]"
        />
      </div>
    </section>
  );
};


export default ExperienceSection;
