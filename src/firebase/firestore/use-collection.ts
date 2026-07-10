'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, QueryConstraint, DocumentData } from 'firebase/firestore';
import { useFirestore } from '../provider';

/**
 * Hook to listen to a Firestore collection with real-time updates.
 */
export function useCollection(collectionPath: string, ...queryConstraints: QueryConstraint[]) {
  const [data, setData] = useState<DocumentData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const firestore = useFirestore();

  useEffect(() => {
    if (!firestore) return;
    
    const q = query(collection(firestore, collectionPath), ...queryConstraints);
    
    const unsubscribe = onSnapshot(
      q, 
      (snapshot) => {
        setData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      },
      (err) => {
        console.error(`Error fetching collection ${collectionPath}:`, err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [firestore, collectionPath]);

  return { data, loading, error };
}
