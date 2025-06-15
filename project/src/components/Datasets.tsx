import React from 'react';
import { Database, Upload, Download, Search, Filter } from 'lucide-react';

interface DatasetsProps {
  isDarkMode: boolean;
}

const Datasets: React.FC<DatasetsProps> = ({ isDarkMode }) => {
  const datasets = [
    {
      name: "Données Clients 2024",
      size: "2.3 MB",
      records: "15,420",
      lastUpdated: "Il y a 2 heures",
      status: "Actif"
    },
    {
      name: "Transactions E-commerce",
      size: "8.7 MB", 
      records: "45,230",
      lastUpdated: "Il y a 1 jour",
      status: "Actif"
    },
    {
      name: "Données Marketing",
      size: "1.2 MB",
      records: "8,950",
      lastUpdated: "Il y a 3 jours",
      status: "Archivé"
    },
    {
      name: "Analytics Web",
      size: "5.4 MB",
      records: "32,100",
      lastUpdated: "Il y a 5 heures",
      status: "Actif"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Gestion des Datasets
        </h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Upload size={16} />
            Importer
          </button>
          <button className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            isDarkMode 
              ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}>
            <Download size={16} />
            Exporter
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Rechercher un dataset..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        <button className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          isDarkMode 
            ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}>
          <Filter size={16} />
          Filtrer
        </button>
      </div>

      {/* Datasets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datasets.map((dataset, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {dataset.name}
                </h3>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  dataset.status === 'Actif' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {dataset.status}
                </span>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <span>Taille:</span>
                <span className="font-medium">{dataset.size}</span>
              </div>
              <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <span>Enregistrements:</span>
                <span className="font-medium">{dataset.records}</span>
              </div>
              <div className={`flex justify-between ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <span>Dernière MAJ:</span>
                <span className="font-medium">{dataset.lastUpdated}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datasets;