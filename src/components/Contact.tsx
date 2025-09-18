import { Mail, MapPin, User, Linkedin } from "lucide-react";

const Contact = () => {
  

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Saya</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mari berkolaborasi! Saya terbuka untuk peluang kerja, proyek kolaborasi, dan diskusi tentang teknologi.
          </p>
        </div>

        <div className="grid gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mari Terhubung</h3>
              <p className="text-gray-600 mb-8">
                Saya senang mendengar dari Anda! Baik itu untuk kolaborasi proyek, 
                kesempatan kerja, atau sekadar berbagi ide tentang teknologi dan pengembangan web.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">rifqiabdan26@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Lokasi</h4>
                  <p className="text-gray-600">Jl. Semanggi Raya No.26, Kec. Kramat</p>
                  <p className="text-gray-600">Kab. Tegal, Indonesia</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Status</h4>
                  <p className="text-gray-600">Mahasiswa Aktif & Terbuka untuk Kolaborasi</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Koneksi Profesional</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a href="mailto:rifqiabdan26@gmail.com" className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                  <Mail size={20} />
                  Email
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;