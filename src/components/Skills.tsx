const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "JavaScript", level: "Mahir", years: 3 },
        { name: "Front-End Development", level: "Mahir", years: 3 },
        { name: "HTML/CSS", level: "Mahir", years: 4 },
        { name: "Responsive Design", level: "Menengah", years: 3 }
      ],
      badge: "blue"
    },
    {
      title: "Data & Programming", 
      skills: [
        { name: "Data Visualization", level: "Menengah", years: 2 },
        { name: "Data Processing", level: "Menengah", years: 2 },
        { name: "Algorithm & Logic", level: "Mahir", years: 3 },
        { name: "Problem Solving", level: "Mahir", years: 4 }
      ],
      badge: "green"
    },
    {
      title: "Network & Cloud",
      skills: [
        { name: "Computer Networking", level: "Menengah", years: 2 },
        { name: "Microsoft Azure", level: "Menengah", years: 1 },
        { name: "Cloud Fundamentals", level: "Menengah", years: 2 },
        { name: "AI Fundamentals", level: "Pemula", years: 1 }
      ],
      badge: "purple"
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "AutoCAD", level: "Mahir", years: 3 },
        { name: "Technical Drawing", level: "Mahir", years: 3 },
        { name: "Building Information Modeling", level: "Menengah", years: 2 },
        { name: "Project Documentation", level: "Mahir", years: 3 }
      ],
      badge: "orange"
    }
  ];

  const levelStyles = (level: string) => {
    switch (level) {
      case "Ahli":
        return "bg-gray-900 text-white";
      case "Mahir":
        return "bg-gray-800 text-white";
      case "Menengah":
        return "bg-gray-200 text-gray-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Keahlian Utama</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teknologi dan skills yang saya kuasai berdasarkan pendidikan formal dan sertifikasi profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill: any, skillIndex: number) => (
                  <div key={skillIndex} className="flex items-center justify-between gap-4 py-2 px-3 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${levelStyles(skill.level)}`}>
                        {skill.level}
                      </span>
                      <span className="text-xs text-gray-500">{skill.years}+ tahun</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sertifikasi Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Sertifikasi Profesional</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Belajar Dasar Pemrograman JavaScript (Dicoding)",
              "Belajar Dasar Visualisasi Data (Dicoding)", 
              "Belajar Fundamental Front-End Web Development (Dicoding)",
              "Microsoft Azure AI Fundamentals",
              "Belajar Fundamental Pemrosesan Data (Dicoding)"
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 p-4 rounded-lg font-medium hover:from-indigo-200 hover:to-blue-200 transition-all duration-300 cursor-default text-sm"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;