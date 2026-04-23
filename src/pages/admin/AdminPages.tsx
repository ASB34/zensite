import React, { useState, useEffect } from 'react';
import { collection, query, doc, setDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Edit2, Copy, X } from 'lucide-react';

export default function AdminPages() {
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState<any>(null);

  // Some default pages we expect
  const pageIds = ['home', 'tinyLiving', 'products', 'compare', 'journal'];
  const languages = ['en', 'tr', 'de', 'it', 'ar'];

  useEffect(() => {
    const q = query(collection(db, 'pages'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const p: any[] = [];
      snapshot.forEach(doc => {
        p.push({ id: doc.id, ...doc.data() });
      });
      setPages(p);
      setLoading(false);
    }, (error) => {
       console.error("Error fetching pages: ", error);
       setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleEdit = (pageId: string, lang: string) => {
    const existing = pages.find(p => p.pageId === pageId && p.lang === lang);
    if(existing) {
      setCurrentPage(existing);
    } else {
      setCurrentPage({
        id: `${pageId}_${lang}`,
        pageId,
        lang,
        contentJson: '{\n  "title": "",\n  "subtitle": ""\n}'
      });
    }
    setIsEditing(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // simple json validation
      JSON.parse(currentPage.contentJson);
      
      const docId = currentPage.id;
      
      const pageData = {
        pageId: currentPage.pageId,
        lang: currentPage.lang,
        contentJson: currentPage.contentJson,
        updatedAt: serverTimestamp(),
      };

      await setDoc(doc(db, 'pages', docId), pageData, { merge: true });
      setIsEditing(false);
      setCurrentPage(null);
    } catch(err: any) {
      console.error(err);
      alert('Error saving page. Ensure JSON is valid: ' + err.message);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-light">Manage Pages</h2>
      </div>

      {isEditing ? (
        <div className="bg-[#111] border border-white/10 p-6 rounded-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl">Edit Page: {currentPage.pageId} ({currentPage.lang.toUpperCase()})</h3>
            <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-white"><X className="w-5 h-5"/></button>
          </div>
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase text-gray-400">Content (JSON Format)</label>
              <textarea 
                value={currentPage.contentJson} 
                onChange={(e) => setCurrentPage({...currentPage, contentJson: e.target.value})}
                className="bg-white/5 border border-white/10 rounded p-4 text-white h-96 font-mono text-sm leading-relaxed" 
                required
              />
            </div>

            <div className="flex justify-end gap-4 mt-6">
               <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-2 border border-white/20 rounded hover:bg-white/5">Cancel</button>
               <button type="submit" className="px-6 py-2 bg-cyan-400 text-black font-bold uppercase text-xs rounded hover:bg-cyan-300">Save Page</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {pageIds.map(pid => (
             <div key={pid} className="bg-[#111] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-light capitalize mb-4">{pid}</h3>
                <div className="flex gap-4 flex-wrap">
                   {languages.map(l => {
                      const exists = pages.some(p => p.pageId === pid && p.lang === l);
                      return (
                        <button 
                          key={l}
                          onClick={() => handleEdit(pid, l)}
                          className={`px-4 py-2 rounded border text-xs uppercase tracking-widest flex items-center gap-2 transition-colors ${
                            exists 
                              ? 'border-cyan-400/50 bg-cyan-900/10 text-cyan-400 hover:bg-cyan-900/30' 
                              : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'
                          }`}
                        >
                          <Edit2 className="w-3 h-3" /> {l} {exists ? '(Set)' : '(Empty)'}
                        </button>
                      );
                   })}
                </div>
             </div>
          ))}
        </div>
      )}
    </div>
  );
}
