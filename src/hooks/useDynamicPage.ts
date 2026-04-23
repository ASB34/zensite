import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useTranslation } from 'react-i18next';

export function useDynamicPage(pageId: string) {
  const { i18n } = useTranslation();
  const [dynamicContent, setDynamicContent] = useState<any>(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const docRef = doc(db, 'pages', `${pageId}_${i18n.language}`);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const data = snap.data();
          if (data.contentJson) {
            setDynamicContent(JSON.parse(data.contentJson));
          }
        } else {
          setDynamicContent(null);
        }
      } catch (err) {
        console.error(`Error fetching dynamic page ${pageId}`, err);
      }
    };
    fetchPage();
  }, [pageId, i18n.language]);

  return dynamicContent;
}
