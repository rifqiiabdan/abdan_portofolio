import { Code, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="src/components/images/profile.png" 
                  alt="Moh Rifqi Abdan"
                  className="w-full h-full object-cover"
                />
                </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Code size={32} className="text-blue-600" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Halo, Saya
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Moh Rifqi Abdan
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Web Developer | Machine Learning | Informatics Graduate
            </p>
            <p className="text-lg text-gray-500 mb-8">
              📍 Tegal, Indonesia
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Mahasiswa aktif Teknik Informatika di Universitas Mercu Buana Yogyakarta dengan minat besar 
              dalam Web Development dan Computer Networking. Passionate dalam pembelajaran berkelanjutan 
              dan pengembangan solusi teknologi yang memberikan dampak nyata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Lihat Sertifikasi
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Hubungi Saya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;