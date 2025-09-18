import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Moh Rifqi Abdan</h3>
            <p className="text-gray-400 mb-4">
              Web Development Enthusiast | Mahasiswa Informatika di Universitas Mercu Buana Yogyakarta.
              Passionate dalam pembelajaran berkelanjutan dan pengembangan solusi teknologi yang memberikan dampak nyata.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Beranda
              </a>
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Tentang
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Sertifikasi
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Keahlian
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Kontak
              </a>
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Keahlian Utama</h4>
            <div className="space-y-2 text-gray-400">
              <p>JavaScript Programming</p>
              <p>Front-End Web Development</p>
              <p>Data Visualization</p>
              <p>Computer Networking</p>
              <p>Microsoft Azure AI</p>
              <p>AutoCAD & BIM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Moh Rifqi Abdan. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart className="text-red-500 mx-2" size={16} />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;