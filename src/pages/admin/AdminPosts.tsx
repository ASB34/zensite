import React, { useState, useEffect } from 'react';
import { collection, query, doc, setDoc, deleteDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Edit2, Trash2, Plus, X } from 'lucide-react';

export default function AdminPosts() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<any>(null);

  useEffect(() => {
    const q = query(collection(db, 'posts'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const p: any[] = [];
      snapshot.forEach(doc => {
        p.push({ id: doc.id, ...doc.data() });
      });
      // Sort by date manually or if using timestamp
      p.sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
      setPosts(p);
      setLoading(false);
    }, (error) => {
       console.error("Error fetching posts: ", error);
       setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleEdit = (post: any) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      await deleteDoc(doc(db, 'posts', id));
    }
  };

  const handleCreate = () => {
    setCurrentPost({
      title: '',
      category: '',
      excerpt: '',
      content: '',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }),
      image: 'from-[#1a1a1a] to-[#0A0A0A]',
      lang: 'en'
    });
    setIsEditing(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const postId = currentPost.id || doc(collection(db, 'posts')).id;
      
      const postData = {
        title: currentPost.title || "",
        category: currentPost.category || "",
        excerpt: currentPost.excerpt || "",
        content: currentPost.content || "",
        date: currentPost.date || "",
        image: currentPost.image || "",
        lang: currentPost.lang || "en",
        updatedAt: serverTimestamp(),
      };

      if (!currentPost.id) {
         (postData as any).createdAt = serverTimestamp();
      }

      await setDoc(doc(db, 'posts', postId), postData, { merge: true });
      setIsEditing(false);
      setCurrentPost(null);
    } catch(err) {
      console.error(err);
      alert('Error saving post.');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-light">Manage Posts</h2>
        <button 
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black text-xs font-bold uppercase tracking-widest rounded hover:bg-cyan-300 transition-colors"
        >
          <Plus className="w-4 h-4" /> New Post
        </button>
      </div>

      {isEditing ? (
        <div className="bg-[#111] border border-white/10 p-6 rounded-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl">{currentPost.id ? 'Edit Post' : 'New Post'}</h3>
            <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-white"><X className="w-5 h-5"/></button>
          </div>
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase text-gray-400">Language</label>
                <select 
                  value={currentPost.lang}
                  onChange={(e) => setCurrentPost({...currentPost, lang: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded p-2 text-white"
                >
                  <option value="en">English</option>
                  <option value="tr">Türkçe</option>
                  <option value="de">Deutsch</option>
                  <option value="it">Italiano</option>
                  <option value="ar">العربية</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase text-gray-400">Category</label>
                <input 
                  type="text" value={currentPost.category} onChange={(e) => setCurrentPost({...currentPost, category: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded p-2 text-white" required
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase text-gray-400">Title</label>
              <input 
                type="text" value={currentPost.title} onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
                className="bg-white/5 border border-white/10 rounded p-2 text-white" required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase text-gray-400">Excerpt / Short Description</label>
              <textarea 
                value={currentPost.excerpt} onChange={(e) => setCurrentPost({...currentPost, excerpt: e.target.value})}
                className="bg-white/5 border border-white/10 rounded p-2 text-white h-20" required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase text-gray-400">Full Content (Markdown/HTML)</label>
              <textarea 
                value={currentPost.content} onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
                className="bg-white/5 border border-white/10 rounded p-2 text-white h-48" required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase text-gray-400">Date String (e.g. Oct 12)</label>
                <input 
                  type="text" value={currentPost.date} onChange={(e) => setCurrentPost({...currentPost, date: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded p-2 text-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase text-gray-400">Image Gradient Class</label>
                <input 
                  type="text" value={currentPost.image} onChange={(e) => setCurrentPost({...currentPost, image: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded p-2 text-white"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
               <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-2 border border-white/20 rounded hover:bg-white/5">Cancel</button>
               <button type="submit" className="px-6 py-2 bg-cyan-400 text-black font-bold uppercase text-xs rounded hover:bg-cyan-300">Save Post</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#1a1a1a] border-b border-white/10">
              <tr>
                <th className="p-4 text-xs uppercase tracking-widest text-gray-400">Title</th>
                <th className="p-4 text-xs uppercase tracking-widest text-gray-400">Category</th>
                <th className="p-4 text-xs uppercase tracking-widest text-gray-400">Lang</th>
                <th className="p-4 text-xs uppercase tracking-widest text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.length === 0 ? (
                <tr><td colSpan={4} className="p-8 text-center text-gray-500">No posts found.</td></tr>
              ) : posts.map(post => (
                <tr key={post.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4">{post.title}</td>
                  <td className="p-4 text-sm text-gray-400">{post.category}</td>
                  <td className="p-4 text-sm text-gray-400 uppercase">{post.lang}</td>
                  <td className="p-4 flex gap-3">
                    <button onClick={() => handleEdit(post)} className="text-cyan-400 hover:text-cyan-300"><Edit2 className="w-4 h-4"/></button>
                    <button onClick={() => handleDelete(post.id)} className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4"/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
