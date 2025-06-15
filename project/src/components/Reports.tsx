import React from 'react';
import { FileText, Download, Calendar, Filter, Eye } from 'lucide-react';

interface ReportsProps {
  isDarkMode: boolean;
}

const Reports: React.FC<ReportsProps> = ({ isDarkMode }) => {
  const reports = [
    {
      title: "Rapport Mensuel - Décembre 2024",
      type: "Mensuel",
      date: "01/01/2025",
      size: "2.4 MB",
      status: "Généré"
    },
    {
      title: "Analyse Trimestrielle Q4 2024",
      type: "Trimestriel",
      date: "28/12/2024",
      size: "5.7 MB",
      status: "Généré"
    },
    {
      title: "Rapport Performance Produits",
      type: "Personnalisé",
      date: "25/12/2024",
      size: "3.1 MB",
      status: "En cours"
    },
    {
      title: "Dashboard Exécutif - Novembre",
      type: "Exécutif",
      date: "30/11/2024",
      size: "1.8 MB",
      status: "Généré"
    },
    {
      title: "Analyse Comportement Client",
      type: "Analytique",
      date: "20/12/2024",
      size: "4.2 MB",
      status: "Généré"
    },
    {
      title: "Rapport Financier Annuel",
      type: "Annuel",
      date: "15/12/2024",
      size: "8.9 MB",
      status: "Brouillon"
    }
  ];

  const reportTypes = [
    { name: "Tous", count: reports.length },
    { name: "Mensuel", count: 1 },
    { name: "Trimestriel", count: 1 },
    { name: "Annuel", count: 1 },
    { name: "Personnalisé", count: 3 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Rapports
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Générez et consultez vos rapports d'analyse
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <FileText size={16} />
          Nouveau Rapport
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          <select className={`px-3 py-2 rounded-lg border ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-600 text-white' 
              : 'bg-white border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}>
            <option>Derniers 30 jours</option>
            <option>Derniers 90 jours</option>
            <option>Cette année</option>
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          <select className={`px-3 py-2 rounded-lg border ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-600 text-white' 
              : 'bg-white border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}>
            <option>Tous les types</option>
            <option>Mensuel</option>
            <option>Trimestriel</option>
            <option>Annuel</option>
          </select>
        </div>
      </div>

      {/* Report Types Summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {reportTypes.map((type, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg text-center cursor-pointer transition-all hover:scale-105 ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
            } shadow-lg`}
          >
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {type.count}
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {type.name}
            </div>
          </div>
        ))}
      </div>

      {/* Reports List */}
      <div className={`rounded-xl shadow-lg overflow-hidden ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className={`px-6 py-4 border-b ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Rapports Récents
          </h3>
        </div>
        
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {reports.map((report, index) => (
            <div key={index} className={`px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {report.title}
                    </h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      report.status === 'Généré' 
                        ? 'bg-green-100 text-green-800' 
                        : report.status === 'En cours'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <div className={`flex items-center gap-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span>Type: {report.type}</span>
                    <span>Date: {report.date}</span>
                    <span>Taille: {report.size}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className={`p-2 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                      : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                  }`}>
                    <Eye size={16} />
                  </button>
                  <button className={`p-2 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                      : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                  }`}>
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;