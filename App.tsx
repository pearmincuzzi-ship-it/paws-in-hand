
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { CalendarGrid } from './components/CalendarGrid';
import { KnowledgeBase } from './components/KnowledgeBase';
import { LogForm } from './components/LogForm';
import { DogLog, ViewMode } from './types';

const STORAGE_KEY = 'senior_dog_logs';

const App: React.FC = () => {
  const [view, setView] = useState<ViewMode>('CALENDAR');
  const [logs, setLogs] = useState<DogLog[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setLogs(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse logs", e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  }, [logs]);

  const addLog = (newLog: DogLog) => {
    setLogs(prev => [newLog, ...prev]);
  };

  const deleteLog = (id: string) => {
    setLogs(prev => prev.filter(l => l.id !== id));
  };

  const renderContent = () => {
    switch (view) {
      case 'CALENDAR':
        return (
          <div className="space-y-4">
            <CalendarGrid 
              logs={logs} 
              selectedDate={selectedDate} 
              onDateSelect={(d) => {
                setSelectedDate(d);
                setView('LOGS');
              }} 
            />
            <div className="px-6">
              <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-3">今日速览</h3>
              <div className="space-y-2">
                {logs.slice(0, 3).map(log => (
                  <div key={log.id} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <span className="text-lg">📅</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-stone-800 truncate">{log.title}</p>
                      <p className="text-[10px] text-stone-400">{log.date}</p>
                    </div>
                  </div>
                ))}
                {logs.length === 0 && (
                  <div className="p-8 text-center bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                    <p className="text-xs text-stone-400 italic">开启你的护理日志，记录爱犬的每一个瞬间。</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      case 'LOGS':
        return (
          <LogForm 
            date={selectedDate} 
            logs={logs} 
            onSave={addLog} 
            onDelete={deleteLog} 
          />
        );
      case 'KNOWLEDGE':
        return <KnowledgeBase />;
      default:
        return null;
    }
  };

  return (
    <Layout activeView={view} setActiveView={setView}>
      {renderContent()}
    </Layout>
  );
};

export default App;
