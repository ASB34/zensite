import { Link } from 'react-router-dom';
import { FileText, File } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-3xl font-light mb-8">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link 
          to="/admin/posts"
          className="bg-[#111] border border-white/10 p-6 rounded-xl hover:bg-[#1a1a1a] transition-all flex items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400">
             <FileText className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl mb-1">Manage Journal Posts</h3>
            <p className="text-sm text-gray-500">Add, edit, or delete articles in the Journal section.</p>
          </div>
        </Link>
        
        <Link 
          to="/admin/pages"
          className="bg-[#111] border border-white/10 p-6 rounded-xl hover:bg-[#1a1a1a] transition-all flex items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
             <File className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl mb-1">Edit Site Pages</h3>
            <p className="text-sm text-gray-500">Modify content for main pages like Home, Products, etc.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
