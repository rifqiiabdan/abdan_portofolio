import { useLocation, useNavigate, useParams, Link as RouterLink } from "react-router-dom";

const ProjectDetail = () => {
  const { slug } = useParams();
  const location = useLocation() as { state?: { project?: any } };
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center animate-[fadeIn_400ms_ease-out]">
            <h1 className="text-2xl font-semibold mb-2">Proyek tidak ditemukan</h1>
            <p className="text-gray-600 mb-6">Tidak ada data untuk slug "{slug}".</p>
            <RouterLink to="/" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Kembali ke beranda</RouterLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-gray-600 hover:text-blue-600 transition-colors"
        >
          ← Kembali
        </button>

        <div className="grid lg:grid-cols-2 gap-8 items-start animate-[fadeIn_420ms_ease-out]">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
              <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{project.provider}</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>

            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-900 mb-2">Teknologi</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t: string, i: number) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">{t}</span>
                ))}
              </div>
            </div>

            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Lihat Demo</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
