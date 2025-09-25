import React, { useState } from 'react';

// Simple test components
function TestLogin({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <button onClick={onLogin} className="px-4 py-2 bg-blue-600 text-white rounded">
        Login
      </button>
    </div>
  );
}

function TestDashboard() {
  return (
    <div className="p-6">
      <h1>Healthcare Fraud Detection Dashboard</h1>
      <p>Dashboard content here</p>
    </div>
  );
}

function TestSidebar({ currentPage, onPageChange }: { currentPage: string; onPageChange: (page: string) => void }) {
  return (
    <div className="w-64 bg-white border-r border-slate-200">
      <div className="p-6">
        <h2>HealthGuard</h2>
        <nav className="mt-8">
          <button 
            onClick={() => onPageChange('dashboard')}
            className={`block w-full text-left p-2 ${currentPage === 'dashboard' ? 'bg-blue-100' : ''}`}
          >
            Dashboard
          </button>
        </nav>
      </div>
    </div>
  );
}

function TestHeader() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <h1>Header</h1>
    </header>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (!isAuthenticated) {
    return <TestLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex h-screen bg-slate-50">
      <TestSidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TestHeader />
        <main className="flex-1 overflow-auto">
          <TestDashboard />
        </main>
      </div>
    </div>
  );
}