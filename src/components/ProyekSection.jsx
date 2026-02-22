import { listProyek } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProyekSection = () => {
  return (
    <section
      id="proyek"
      className="scroll-mt-32 mt-40 py-24 px-6 lg:px-20 relative overflow-hidden"
    >
      {/* Background Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-violet-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter bg-linear-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text inline-block">
          PROJECT
        </h1>
      </div>

      <div
        className="max-w-4xl mx-auto relative group"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {/* Arrow kiri */}
        <div className="absolute inset-y-0 -left-4 lg:-left-16 flex items-center z-20">
          <button className="swiper-prev bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 hover:bg-violet-600 transition p-3 rounded-full shadow-lg">
            <i className="ri-arrow-left-s-line text-xl text-white"></i>
          </button>
        </div>

        {/* Arrow kanan */}
        <div className="absolute inset-y-0 -right-4 lg:-right-16 flex items-center z-20">
          <button className="swiper-next bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 hover:bg-violet-600 transition p-3 rounded-full shadow-lg">
            <i className="ri-arrow-right-s-line text-xl text-white"></i>
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {listProyek.map((proyek, i) => (
            <SwiperSlide key={proyek.id}>
              <div
                data-aos="zoom-in"
                data-aos-delay={200 + i * 100}
                className="group relative bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-4xl overflow-hidden hover:border-violet-500/50 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row items-center">
                  
                  {/* Gambar */}
                  <div
                    className="w-full md:w-2/5 p-6"
                    data-aos="fade-right"
                    data-aos-delay="300"
                  >
                    <div className="flex items-center justify-center bg-zinc-950/40 rounded-4xl h-52 md:h-64">
                      <img
                        src={proyek.gambar}
                        alt={proyek.nama}
                        className="max-h-[80%] max-w-[80%] object-contain transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Konten */}
                  <div
                    className="w-full md:w-3/5 p-8 flex flex-col justify-center"
                    data-aos="fade-left"
                    data-aos-delay="350"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-0.5 bg-violet-500"></span>
                      <span className="text-xs font-bold tracking-[0.2em] text-violet-400 uppercase">
                        Project
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                      {proyek.nama}
                    </h2>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {proyek.desk}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {proyek.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-bold text-white hover:text-violet-400 transition-colors gap-2 group/link"
                    >
                      View Details
                      <i className="ri-arrow-right-line group-hover/link:translate-x-2 transition-transform"></i>
                    </a>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx="true">{`
        .swiper-pagination-bullet {
          background: #3f3f46 !important;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #a78bfa !important;
          width: 20px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default ProyekSection;