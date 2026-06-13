import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, Package, Users, Settings, LogOut, Sun, Moon, Menu } from 'lucide-react';
import Dashboard from './pages/Dashboard';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-dark-bg transition-colors duration-200">
        
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} flex-shrink-0 border-r border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card transition-all duration-300 flex flex-col`}>
          <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-dark-border">
            {sidebarOpen ? (
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-500">SmartSales AI</h1>
            ) : (
              <span className="text-xl font-bold text-primary-500">SS</span>
            )}
          </div>
          
          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            <NavItem to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" open={sidebarOpen} />
            <NavItem to="/forecast" icon={<TrendingUp size={20} />} label="Forecasting" open={sidebarOpen} />
            <NavItem to="/inventory" icon={<Package size={20} />} label="Inventory" open={sidebarOpen} />
            <NavItem to="/customers" icon={<Users size={20} />} label="Customers" open={sidebarOpen} />
            <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" open={sidebarOpen} />
          </nav>
          
          <div className="p-4 border-t border-gray-200 dark:border-dark-border">
            <button className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <LogOut size={20} />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="h-16 glass-card !rounded-none !border-t-0 !border-l-0 !border-r-0 flex items-center justify-between px-6 z-10">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              <Menu size={20} />
            </button>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-indigo-500 flex items-center justify-center text-white font-semibold">
                AD
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6 animate-fade-in">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={
                <div className="flex items-center justify-center h-full text-gray-500">
                  <h2>Page under construction</h2>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function NavItem({ to, icon, label, open }) {
  return (
    <Link to={to} className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
      {icon}
      {open && <span className="font-medium">{label}</span>}
    </Link>
  );
}

export default App;
