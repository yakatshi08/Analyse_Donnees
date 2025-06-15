import React from 'react';
import { Brain, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface PredictionsProps {
  isDarkMode: boolean;
}

const Predictions: React.FC<PredictionsProps> = ({ isDarkMode }) => {
  const predictionData = [
    { month: 'Jan', actual: 4000, predicted: null },
    { month: 'Fév', actual: 3000, predicted: null },
    { month: 'Mar', actual: 5000, predicted: null },
    { month: 'Avr', actual: 4500, predicted: null },
    { month: 'Mai', actual: 6000, predicted: null },
    { month: 'Jun', actual: 5500, predicted: null },
    { month: 'Jul', actual: null, predicted: 6200 },
    { month: 'Aoû', actual: null, predicted: 6800 },
    { month: 'Sep', actual: null, predicted: 7200 },
    { month: 'Oct', actual: null, predicted: 7500 },
  ];

  const models = [
    {
      name: "Prédiction des Ventes",
      accuracy: "94.2%",
      status: "Actif",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      name: "Détection d'Anomalies",
      accuracy: "89.7%",
      status: "En formation",
      icon: AlertTriangle,
      color: "text-yellow-500"
    },
    {
      name: "Segmentation Client",
      accuracy: "91.5%",
      status: "Actif",
      icon: CheckCircle,
      color: "text-blue-500"
    },
    {
      name: "Prévision de Churn",
      accuracy: "87.3%",
      status: "Test",
      icon: Brain,
      color: "text-purple-500"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Prédictions IA
        </h2>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Modèles prédictifs et intelligence artificielle
        </p>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {models.map((model, index) => {
          const Icon = model.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${model.color}`} />
                <span className={`px-2 py-1 text-xs rounded-full ${
                  model.status === 'Actif' 
                    ? 'bg-green-100 text-green-800' 
                    : model.status === 'En formation'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                }`}>
                  {model.status}
                </span>
              </div>
              <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {model.name}
              </h3>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Précision: <span className="font-medium text-green-500">{model.accuracy}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prediction Chart */}
      <div className={`p-6 rounded-xl shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Prédictions vs Données Réelles
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={predictionData}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
            <XAxis 
              dataKey="month" 
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
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              name="Données réelles"
            />
            <Line 
              type="monotone" 
              dataKey="predicted" 
              stroke="#10b981" 
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              name="Prédictions"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'} border ${isDarkMode ? 'border-green-800' : 'border-green-200'}`}>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className={`font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
              Tendance Positive
            </span>
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-green-300' : 'text-green-600'}`}>
            Croissance prévue de 15% pour les 3 prochains mois
          </p>
        </div>

        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'} border ${isDarkMode ? 'border-yellow-800' : 'border-yellow-200'}`}>
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <span className={`font-medium ${isDarkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>
              Attention
            </span>
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>
            Risque de churn élevé détecté pour 12% des clients
          </p>
        </div>

        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'} border ${isDarkMode ? 'border-blue-800' : 'border-blue-200'}`}>
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-blue-500" />
            <span className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
              Recommandation
            </span>
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
            Optimiser la stratégie marketing pour le segment 25-35 ans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Predictions;