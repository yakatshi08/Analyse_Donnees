import React from 'react';
import { TrendingUp, Users, Target, UserPlus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface DashboardProps {
  isDarkMode: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isDarkMode }) => {
  const kpiData = [
    {
      title: "Chiffre d'affaires",
      value: "€120,450",
      change: "+8,2% par rapport au mois dernier",
      icon: TrendingUp,
      color: "text-blue-500",
      positive: true
    },
    {
      title: "Utilisateurs actifs",
      value: "3,540",
      change: "+3,4% cette semaine",
      icon: Users,
      color: "text-green-500",
      positive: true
    },
    {
      title: "Taux de conversion",
      value: "4.7%",
      change: "Stable par rapport au mois dernier",
      icon: Target,
      color: "text-yellow-500",
      positive: null
    },
    {
      title: "Nouveaux abonnés",
      value: "+245",
      change: "Campagne marketing en cours",
      icon: UserPlus,
      color: "text-purple-500",
      positive: true
    }
  ];

  const quarterlyData = [
    {
      quarter: 'Q1 2024',
      Revenus: 75000,
      Coûts: 45000,
      Profit: 30000,
    },
    {
      quarter: 'Q2 2024',
      Revenus: 85000,
      Coûts: 48000,
      Profit: 37000,
    },
    {
      quarter: 'Q3 2024',
      Revenus: 95000,
      Coûts: 52000,
      Profit: 43000,
    },
    {
      quarter: 'Q4 2024',
      Revenus: 120000,
      Coûts: 65000,
      Profit: 55000,
    },
  ];

  const radarData = [
    {
      subject: 'Revenus',
      A: 100,
      fullMark: 100,
    },
    {
      subject: 'Coûts',
      A: 75,
      fullMark: 100,
    },
    {
      subject: 'Profit',
      A: 92,
      fullMark: 100,
    },
    {
      subject: 'Clients',
      A: 85,
      fullMark: 100,
    },
    {
      subject: 'Satisfaction',
      A: 88,
      fullMark: 100,
    },
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-750' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${kpi.color}`} />
                <div className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {kpi.value}
                </div>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {kpi.title}
              </h3>
              <p className={`text-sm ${
                kpi.positive === true 
                  ? 'text-green-500' 
                  : kpi.positive === false 
                    ? 'text-red-500' 
                    : isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {kpi.change}
              </p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Combined Bar and Line Chart */}
        <div className={`p-6 rounded-xl shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Analyse Trimestrielle 2024
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={quarterlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
              <XAxis 
                dataKey="quarter" 
                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                fontSize={12}
              />
              <YAxis 
                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                  border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              />
              <Legend />
              <Bar dataKey="Revenus" fill="#3b82f6" name="Revenus (€)" />
              <Bar dataKey="Coûts" fill="#ef4444" name="Coûts (€)" />
              <Bar dataKey="Profit" fill="#10b981" name="Profit (€)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Radar Chart */}
        <div className={`p-6 rounded-xl shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Performance Globale
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ 
                  fill: isDarkMode ? '#9ca3af' : '#6b7280',
                  fontSize: 12
                }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]}
                tick={{ 
                  fill: isDarkMode ? '#9ca3af' : '#6b7280',
                  fontSize: 10
                }}
              />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                  border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;