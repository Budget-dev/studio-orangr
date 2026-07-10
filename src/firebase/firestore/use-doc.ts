'use client';

import { useState, useEffect } from 'react';
import { doc, onSnapshot, DocumentData } from 'firebase/firestore';
import { useFirestore } from '../provider';

/**
 * Hook to listen to a single Firestore document with real-time updates.
 */
export function useDoc(collectionPath: string, docId: string) {
  const [data, setData] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const firestore = useFirestore();

  useEffect(() => {
    if (!firestore || !docId) return;
    
    const docRef = doc(firestore, collectionPath, docId);
    
    const unsubscribe = onSnapshot(
      docRef, 
      (snapshot) => {
        setData(snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null);
        setLoading(false);
      },
      (err) => {
        console.error(`Error fetching document ${collectionPath}/${docId}:`, err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [firestore, collectionPath, docId]);

  return { data, loading, error };
}
