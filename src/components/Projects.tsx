import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import proyek1 from "./images/proyek1.jpg";
import proyek2 from "./images/proyek2.jpg";
import proyek3 from "./images/proyek3.jpg";

const Projects = () => {
  const certifications = [
    {
      title: "Warung Nusantara",
      description: "Landing page restoran bertema kuliner Indonesia dengan hero dinamis, navigasi rapi, dan CTA ke menu.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: proyek1,
      provider: "Personal Project",
      demoUrl: "https://restaurant-porto.vercel.app/"
    },
    {
      title: "Rimbawa 360",
      description: "Aplikasi web edukasi konservasi yang menyajikan direktori spesies, artikel, dan cerita pengguna, dilengkapi peta interaktif serta forum diskusi. Antarmuka responsif, cepat, dan dapat diakses offline (PWA) untuk pengalaman pengguna yang nyaman.",
      tech: ["HTML5", "CSS3","JavaScript","Webpack","Node.js","MySQL"],
      image: proyek2,
      provider: "Dicoding",
      demoUrl: "https://github.com/rifqiiabdan/rimbawa-360",
    },
    {
      title: "Eco Vision",
      description: "Memahami teknik-teknik fundamental dalam pemrosesan data, termasuk cleaning, transformation, dan analysis untuk menghasilkan data yang berkualitas.",
      tech: ["ReactJS +Tailwind","FastAPI","Python + Scikit-learn","GitHub + Colab"],
      image: proyek3,
      provider: "Dicoding",
      demoUrl: "https://ecovision-beta.vercel.app/",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyek</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berikut beberapa proyek terbaik yang telah saya kerjakan melalui pembelajaran formal maupun mandiri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {cert.provider}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Link
                    to={`/projects/${encodeURIComponent(cert.title.toLowerCase().replace(/\s+/g, '-'))}`}
                    state={{ project: cert }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    aria-label={`Lihat detail ${cert.title}`}
                  >
                    <ExternalLink size={16} />
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;