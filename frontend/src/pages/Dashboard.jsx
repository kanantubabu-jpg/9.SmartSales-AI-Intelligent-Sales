import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ArrowUpRight, ArrowDownRight, DollarSign, ShoppingCart, Users, Package } from 'lucide-react';
import axios from 'axios';

const mockData = [
  { name: 'Jan', revenue: 4000, profit: 2400 },
  { name: 'Feb', revenue: 3000, profit: 1398 },
  { name: 'Mar', revenue: 2000, profit: 9800 },
  { name: 'Apr', revenue: 2780, profit: 3908 },
  { name: 'May', revenue: 1890, profit: 4800 },
  { name: 'Jun', revenue: 2390, profit: 3800 },
  { name: 'Jul', revenue: 3490, profit: 4300 },
];

export default function Dashboard() {
  const [stats, setStats] = useState({
    revenue: '$124,563',
    sales: '3,421',
    customers: '1,234',
    inventory: '98%',
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Business Intelligence Overview</h2>
        <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-lg shadow-primary-500/30 transition-all font-medium">
          Generate Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard title="Total Revenue" value={stats.revenue} trend="+12.5%" icon={<DollarSign size={24} className="text-emerald-500" />} />
        <KpiCard title="Total Sales" value={stats.sales} trend="+8.2%" icon={<ShoppingCart size={24} className="text-primary-500" />} />
        <KpiCard title="Active Customers" value={stats.customers} trend="-2.4%" trendDown icon={<Users size={24} className="text-indigo-500" />} />
        <KpiCard title="Inventory Health" value={stats.inventory} trend="+4.1%" icon={<Package size={24} className="text-amber-500" />} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Revenue Forecast & Analytics</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Product Performance</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData.slice(0, 5)}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                <XAxis dataKey="name" stroke="#64748b" />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Bar dataKey="profit" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* AI Insights */}
      <div className="glass-card p-6 bg-gradient-to-br from-indigo-50 to-primary-50 dark:from-indigo-900/20 dark:to-primary-900/20 border border-indigo-100 dark:border-indigo-500/20">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-indigo-500 rounded-lg text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-300">AI Business Insights</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3 text-sm text-gray-700 dark:text-gray-300">
            <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
            <p><strong>Demand Spike Detected:</strong> Expected 45% increase in "Electronics" category next week due to seasonal trends. Recommend increasing safety stock by 150 units.</p>
          </li>
          <li className="flex items-start space-x-3 text-sm text-gray-700 dark:text-gray-300">
            <div className="mt-1 w-2 h-2 rounded-full bg-rose-500 flex-shrink-0"></div>
            <p><strong>Inventory Risk:</strong> Product SKU-994 is projected to stock out in 4 days at current sales velocity. Reorder immediately.</p>
          </li>
          <li className="flex items-start space-x-3 text-sm text-gray-700 dark:text-gray-300">
            <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
            <p><strong>Revenue Opportunity:</strong> Bundling "Wireless Earbuds" with "Smart Phones" could increase Average Order Value by 12% based on purchase history analysis.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function KpiCard({ title, value, trend, icon, trendDown }) {
  return (
    <div className="glass-card p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className={`flex items-center space-x-1 text-sm font-medium px-2 py-1 rounded-full ${trendDown ? 'text-red-600 bg-red-50 dark:bg-red-900/20' : 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20'}`}>
          {trendDown ? <ArrowDownRight size={16} /> : <ArrowUpRight size={16} />}
          <span>{trend}</span>
        </span>
      </div>
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{title}</p>
        <h4 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{value}</h4>
      </div>
    </div>
  );
}
