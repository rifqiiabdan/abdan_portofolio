import { GraduationCap, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Saya</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passion untuk Web Development & Computer Networking
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Saya adalah mahasiswa lulusan di Universitas Mercu Buana Yogyakarta jurusan Teknik Informatika 
              dengan minat besar dalam bidang Web Development dan Computer Networking. Berbekal latar belakang 
              pendidikan teknik dan berbagai pelatihan mandiri, saya terus mengembangkan keterampilan di dunia 
              pemrograman, visualisasi data, serta pengembangan web front-end.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Saya percaya pada pentingnya pembelajaran berkelanjutan dan senang terlibat dalam proyek yang 
              memberikan dampak nyata. Dengan berbagai sertifikasi dari Dicoding dan Microsoft Azure, 
              saya terus memperdalam pengetahuan dalam teknologi terkini.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Portofolio ini saya susun sebagai bagian dari upaya membangun personal branding dan mencari 
              peluang kerja atau kolaborasi profesional di bidang teknologi, khususnya pengembangan web dan data.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Pendidikan</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 font-medium">S1 Informatika</p>
                  <p className="text-gray-600">Universitas Mercu Buana Yogyakarta</p>
                  <p className="text-sm text-gray-500">2021 - 2025</p>
                </div>
                <div className="pt-2 border-t border-blue-200">
                  <p className="text-gray-700 font-medium">SMK Negeri 3 Tegal</p>
                  <p className="text-gray-600">Desain Pemodelan dan Informasi Bangunan</p>
                  <p className="text-sm text-gray-500">2019 - 2021</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 p-3 rounded-lg mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Fokus Keahlian</h4>
              </div>
              <p className="text-gray-600">
                Web Development: HTML, CSS, JavaScript, React, Node.js<br></br>
                Machine Learning & Data: Python, TensorFlow, Data Visualization<br></br>
                Networking & Tools: Computer Networking, AutoCAD
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Alamat</h4>
              </div>
              <p className="text-gray-600">
                📍 Jl. Semanggi Raya No.26, Kec. Kramat, Kab. Tegal, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;