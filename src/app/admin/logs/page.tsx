
'use client';

import { useState, useEffect } from 'react';
import { useFirestore } from '@/firebase/provider';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Card, CardContent } from '@/components/ui/card';
import { History, Search, Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ActivityLogs() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const firestore = useFirestore();

  useEffect(() => {
    const fetchLogs = async () => {
      if (!firestore) return;
      const q = query(collection(firestore, "activityLogs"), orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      setLogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    };
    fetchLogs();
  }, [firestore]);

  const filteredLogs = logs.filter(log => 
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) || 
    log.adminEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black text-secondary uppercase tracking-tight">Audit Trail</h2>
          <p className="text-muted-foreground text-sm font-medium">History of all administrative actions</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search logs..." 
              className="pl-10 rounded-xl h-12 border-gray-100 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="h-12 px-6 rounded-xl border-gray-200">
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-xl rounded-[32px] overflow-hidden bg-white">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary text-white text-[10px] font-black uppercase tracking-widest">
                  <th className="px-8 py-6">Action</th>
                  <th className="px-8 py-6">Admin</th>
                  <th className="px-8 py-6">Details</th>
                  <th className="px-8 py-6">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  [1,2,3,4,5].map(i => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan={4} className="px-8 py-6"><div className="h-4 bg-gray-100 rounded w-full" /></td>
                    </tr>
                  ))
                ) : filteredLogs.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-8 py-20 text-center text-gray-400 font-bold uppercase tracking-widest text-xs">
                      No logs matching your search
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-8 py-6">
                        <span className="text-xs font-black text-secondary uppercase tracking-tight px-3 py-1 bg-gray-100 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          {log.action}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-sm font-bold text-secondary/70">{log.adminEmail}</td>
                      <td className="px-8 py-6 text-sm text-gray-500 italic max-w-md truncate">{log.details}</td>
                      <td className="px-8 py-6 text-[11px] font-black text-primary uppercase">
                        {log.timestamp?.toDate().toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
