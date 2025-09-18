import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const certifications = [
    {
      title: "Belajar Fundamental Front-End Web Development",
      description: "Pembelajaran mendalam tentang pengembangan front-end modern, termasuk HTML5, CSS3, responsive design, dan best practices dalam web development.",
      tech: ["HTML5", "CSS3", "Responsive Design", "Web Standards"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      provider: "Dicoding",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Belajar Fundamental Pemrosesan Data",
      description: "Memahami teknik-teknik fundamental dalam pemrosesan data, termasuk cleaning, transformation, dan analysis untuk menghasilkan data yang berkualitas.",
      tech: ["Data Processing", "Data Cleaning", "ETL", "Analysis"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=300&fit=crop",
      provider: "Dicoding",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "AutoCAD & Building Information Modeling",
      description: "Keahlian dalam desain teknik dan pemodelan informasi bangunan dari latar belakang pendidikan SMK dengan fokus pada teknologi konstruksi modern.",
      tech: ["AutoCAD", "BIM", "Technical Drawing", "3D Modeling"],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop",
      provider: "SMK Negeri 3 Tegal",
      demoUrl: "#",
      codeUrl: "#"
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
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
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