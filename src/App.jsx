import DataImage from "./data";
import { listTools } from "./data";
import "./index.css";
import ProyekSection from "./components/ProyekSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";

function App() {
  return (
    <>
      <div
        id="beranda"
        className="hero min-h-screen flex items-center pt-6 xl:gap-0 gap-6 grid-cols-1 scroll-mt-32 mt-20 px-6 lg:px-20"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-2s w-full lg:w-1/2">
          <div className="flex items-center gap-3 mb-8 bg-zinc-800/50 w-fit p-3 pr-6 rounded-full border border-zinc-700 backdrop-blur-sm shadow-lg">
            <img
              src={DataImage.HeroImage}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-purple-500"
              loading="lazy"
            />
            <q className="text-sm text-zinc-300  font-bold">
              Keinginan yang diusahakan pasti akan terwujud 😊
            </q>
          </div>

          {/* Judul Utama */}
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white">
            I'm
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500">
              Yakub Vebrian
            </span>
          </h1>
          <p className="text-lg lg:text-xl mb-8 opacity-70 text-justify max-w-xl text-zinc-400 leading-relaxed border-l-4 border-purple-600 pl-4">
            Passionate in Electrical Power Systems, with focus on distribution
            transformer load analysis, phase balancing, and improving
            reliability of distribution networks through technical evaluation
            and practical field experience.
          </p>
          <div className="flex sm:gap-4 flex-wrap gap-3 mb-10">
            <a
              href="#"
              className="group bg-purple-600 px-7 py-3.5 rounded-xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-900/50 flex items-center gap-2 font-semibold"
            >
              Download CV
              <i className="ri-download-2-fill ri-lg group-hover:-translate-y-1 transition-transform"></i>
            </a>
            <a
              href="#kontak"
              className="group bg-zinc-800 px-7 py-3.5 rounded-xl hover:bg-zinc-700 border border-zinc-700 hover:border-purple-500 transition-all flex items-center gap-2 font-semibold text-white"
            >
              Lets Talk
              <i className="ri-arrow-right-fill ri-lg group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-zinc-800"></div>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-3s w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-purple-600/30 rounded-full blur-[100px] -z-10"></div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

            <div className="relative rounded-3xl overflow-hidden p-1 bg-zinc-900">
              <img
                src={DataImage.HeroImage}
                alt="Hero"
                className="w-full max-w-md lg:max-w-full rounded-3xl aspect-square object-cover grayscale group-hover:grayscale-0 transition duration-500 shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* --- TENTANG SECTION --- */}
      <div id="tentang" className="tentang scroll-mt-32 mt-32 px-6 lg:px-20">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto">
          <div className="flex items-center gap-4 mb-8" data-aos="fade-up">
            <div className="h-px bg-zinc-700 flex-1"></div>
            <h1 className="text-lg font-semibold tracking-wide bg-violet-700 px-6 py-2 rounded-xl text-white shadow-lg shadow-violet-900/50">
              About Me
            </h1>
            <div className="h-px bg-zinc-700 flex-1"></div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <div
              className="text-base/loose text-justify 
        bg-linear-to-br from-zinc-700/40 to-zinc-800/30 
        p-8 rounded-2xl leading-relaxed 
        border border-zinc-600/40 shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <p className="relative z-10 text-zinc-300">
                Bachelor of Engineering with experience in 
                technical services for power distribution systems, 
                including network maintenance, transformer load analysis, fault investigation, and 
                distribution transformer load evaluation. Also experienced in developing tools for transformer load 
                analysis and web development, demonstrating a structured, 
                analytical, and solution-oriented mindset, with strong adaptability in dynamic environments.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* --- EDUCATION --- */}
      <EducationSection />

      {/* Experience */}
      <ExperienceSection />

      {/* --- SKILL SECTION --- */}
      <div
        id="skill"
        className="tools scroll-mt-32 mt-32 px-6 lg:px-20 relative"
      >
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-purple-600/10 blur-[120px] -z-10"></div>

        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-violet-500 via-purple-400 to-indigo-500 inline-block tracking-tight">
            Skills
          </h1>
        </div>

        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listTools.map((tool, index) => (
            <div
              key={tool.id}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="group relative flex items-center gap-4 p-5 
          bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 
          rounded-2xl transition-all duration-500 
          hover:border-purple-500/50 hover:bg-zinc-800/60 hover:-translate-y-2 
          hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.3)] cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative shrink-0">
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-14 h-14 object-contain p-2 bg-zinc-800 
              border border-zinc-700 rounded-xl transition-all duration-500
              group-hover:scale-110 group-hover:bg-zinc-900 group-hover:border-purple-500"
                  loading="lazy"
                />

                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-zinc-900 group-hover:animate-ping"></div>
              </div>

              <div className="relative">
                <h4 className="font-bold text-zinc-100 group-hover:text-purple-400 transition-colors duration-300">
                  {tool.nama}
                </h4>
                <p className="text-[11px] text-zinc-500 uppercase tracking-widest mt-1 group-hover:text-zinc-300 transition-colors">
                  {tool.ket}
                </p>

                <div className="w-12 h-px bg-zinc-800 mt-3 rounded-full overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-purple-500 transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* proyek */}
      <ProyekSection />

      {/* kontak */}
      <div className="text-center mb-12" data-aos="fade-up">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px bg-zinc-700 w-16"></div>
          <h1 className="text-4xl  font-bold text-white">Kontak</h1>
          <div className="h-px bg-zinc-700 w-16"></div>
        </div>
        <p className="text-base/loose text-zinc-400">
          Mari terhubung dengan saya
        </p>
      </div>
      <div
        className="grid lg:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-violet-500 transition-colors">
            <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-violet-500 mb-4">
              <i className="ri-mail-fill ri-xl"></i>
            </div>
            <h3 className="text-white font-bold mb-1">Email</h3>
            <p className="text-zinc-400 text-sm">yakubvebrian@gmail.com</p>
          </div>

          <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-violet-500 transition-colors">
            <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-violet-500 mb-4">
              <i className="ri-map-pin-user-fill ri-xl"></i>
            </div>
            <h3 className="text-white font-bold mb-1">Lokasi</h3>
            <p className="text-zinc-400 text-sm">
              Magelang, Jawa Tengah, Indonesia
            </p>
          </div>

          <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-violet-500 transition-colors">
            <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-violet-500 mb-4">
              <i className="ri-links-fill ri-xl"></i>
            </div>
            <h3 className="text-white font-bold mb-3">Sosial Media</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/yakubuss_/"
                className="w-10 h-10 bg-zinc-700 rounded-lg flex items-center justify-center text-white hover:bg-violet-600 transition"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://linkedin.com/in/yakub-vebrian-817443394"
                className="w-10 h-10 bg-zinc-700 rounded-lg flex items-center justify-center text-white hover:bg-violet-600 transition"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
              <a
                href="https://github.com/dashboard"
                className="w-10 h-10 bg-zinc-700 rounded-lg flex items-center justify-center text-white hover:bg-violet-600 transition"
              >
                <i className="ri-github-line"></i>
              </a>
               <a
                href="https://wa.me/6287705354212"
                className="w-10 h-10 bg-zinc-700 rounded-lg flex items-center justify-center text-white hover:bg-violet-600 transition"
              >
                <i class="ri-whatsapp-fill"></i>
              </a>
            </div>
          </div>
        </div>

        {/* pesan */}
        <div
          className="lg:col-span-2"
          id="kontak"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <form
            action="https://formsubmit.co/yakubvebrian@gmail.com"
            method="POST"
            className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 shadow-xl"
            autoComplete="off"
          >
            <input
              type="hidden"
              name="_subject"
              value="Pesan baru dari Portfolio"
            />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid sm:grid-cols-2 gap-6 mb-6 ">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-300">
                  Masukan nama...
                </label>
                <div className="relative">
                  <i className="ri-user-line absolute left-3 top-3 text-zinc-500"></i>
                  <input
                    type="text"
                    name="nama"
                    placeholder="Nama kamu..."
                    className="w-full bg-zinc-900 border border-zinc-600 text-white pl-10 p-3 rounded-lg focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-300">
                  Email
                </label>
                <div className="relative">
                  <i className="ri-mail-line absolute left-3 top-3 text-zinc-500"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Masukan email..."
                    className="w-full bg-zinc-900 border border-zinc-600 text-white pl-10 p-3 rounded-lg focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-sm font-semibold text-zinc-300">
                Pesan
              </label>
              <div className="relative">
                <i className="ri-message-3-line absolute left-3 top-3 text-zinc-500"></i>
                <textarea
                  name="pesan"
                  placeholder="Masukan pesan..."
                  rows="5"
                  className="w-full bg-zinc-900 border border-zinc-600 text-white pl-10 p-3 rounded-lg focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition resize-none"
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-linear
        -to-r from-violet-600 to-purple-600 p-4 rounded-lg cursor-pointer font-bold text-white hover:from-violet-500 hover:to-purple-500 transition-all transform hover:scale-[1.02] shadow-lg shadow-violet-900/50 flex items-center justify-center gap-2"
            >
              <i className="ri-send-plane-fill"></i>
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default App;
