import Image from 'next/image';
import { TrophyIcon, ArrowDownTrayIcon, ShareIcon } from '@heroicons/react/24/outline';

const certificates = [
  {
    id: 1,
    courseName: 'Complete Web Development Bootcamp',
    instructor: 'Sarah Johnson',
    completedDate: 'October 15, 2024',
    certificateId: 'CERT-2024-WD-001234',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    courseName: 'JavaScript Essentials',
    instructor: 'Michael Chen',
    completedDate: 'September 28, 2024',
    certificateId: 'CERT-2024-JS-005678',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    courseName: 'React Advanced Patterns',
    instructor: 'Emily Rodriguez',
    completedDate: 'August 12, 2024',
    certificateId: 'CERT-2024-RC-009012',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 4,
    courseName: 'UI/UX Design Fundamentals',
    instructor: 'David Kim',
    completedDate: 'July 5, 2024',
    certificateId: 'CERT-2024-UX-003456',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 5,
    courseName: 'Python for Data Science',
    instructor: 'Lisa Anderson',
    completedDate: 'June 20, 2024',
    certificateId: 'CERT-2024-PY-007890',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop',
  },
];

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <TrophyIcon className="h-8 w-8 text-yellow-500" />
            <h1 className="text-3xl font-bold text-gray-900">My Certificates</h1>
          </div>
          <p className="text-sm text-gray-600">
            View and download your earned certificates
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">Total Certificates</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{certificates.length}</dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">This Year</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">5</dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">Shared</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">3</dd>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
            >
              {/* Certificate Preview */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-indigo-500 to-purple-600 p-6">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-2 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      Certificate of Completion
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white line-clamp-2">
                      {certificate.courseName}
                    </h3>
                  </div>
                  <div className="space-y-1 text-sm text-white/90">
                    <p>Instructor: {certificate.instructor}</p>
                    <p>Completed: {certificate.completedDate}</p>
                    <p className="font-mono text-xs text-white/70">ID: {certificate.certificateId}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4">
                <div className="flex gap-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    Download
                  </button>
                  <button className="inline-flex items-center justify-center rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200">
                    <ShareIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no certificates) */}
        {certificates.length === 0 && (
          <div className="text-center py-12">
            <TrophyIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No certificates yet</h3>
            <p className="mt-1 text-sm text-gray-500">
              Complete courses to earn certificates and showcase your achievements.
            </p>
            <div className="mt-6">
              <a
                href="/courses"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Browse Courses
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
