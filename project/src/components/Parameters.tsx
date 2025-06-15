import React from 'react';
import { Settings, User, Shield, Bell, Palette, Database, Globe } from 'lucide-react';

interface ParametersProps {
  isDarkMode: boolean;
}

const Parameters: React.FC<ParametersProps> = ({ isDarkMode }) => {
  const settingsCategories = [
    {
      title: "Profil Utilisateur",
      icon: User,
      settings: [
        { name: "Nom d'utilisateur", value: "admin@company.com", type: "text" },
        { name: "Nom complet", value: "Administrateur Système", type: "text" },
        { name: "Rôle", value: "Super Admin", type: "select" }
      ]
    },
    {
      title: "Sécurité",
      icon: Shield,
      settings: [
        { name: "Authentification 2FA", value: true, type: "toggle" },
        { name: "Session timeout", value: "30 minutes", type: "select" },
        { name: "Connexions simultanées", value: "3", type: "number" }
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      settings: [
        { name: "Alertes email", value: true, type: "toggle" },
        { name: "Notifications push", value: false, type: "toggle" },
        { name: "Rapports automatiques", value: true, type: "toggle" }
      ]
    },
    {
      title: "Interface",
      icon: Palette,
      settings: [
        { name: "Thème", value: isDarkMode ? "Sombre" : "Clair", type: "select" },
        { name: "Langue", value: "Français", type: "select" },
        { name: "Format de date", value: "DD/MM/YYYY", type: "select" }
      ]
    },
    {
      title: "Base de Données",
      icon: Database,
      settings: [
        { name: "Sauvegarde automatique", value: true, type: "toggle" },
        { name: "Rétention des données", value: "12 mois", type: "select" },
        { name: "Compression", value: true, type: "toggle" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Paramètres
        </h2>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Configurez votre plateforme d'analyse
        </p>
      </div>

      {/* Settings Categories */}
      <div className="space-y-6">
        {settingsCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <div
              key={categoryIndex}
              className={`rounded-xl shadow-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className={`px-6 py-4 border-b ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-blue-500" />
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {category.settings.map((setting, settingIndex) => (
                  <div key={settingIndex} className="flex items-center justify-between">
                    <div>
                      <label className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {setting.name}
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      {setting.type === 'toggle' ? (
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            setting.value 
                              ? 'bg-blue-500' 
                              : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              setting.value ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      ) : setting.type === 'select' ? (
                        <select className={`px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}>
                          <option>{setting.value}</option>
                        </select>
                      ) : setting.type === 'number' ? (
                        <input
                          type="number"
                          value={setting.value}
                          className={`px-3 py-2 rounded-lg border w-20 ${
                            isDarkMode 
                              ? 'bg-gray-700 border-gray-600 text-white' 
                              : 'bg-white border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      ) : (
                        <input
                          type="text"
                          value={setting.value}
                          className={`px-3 py-2 rounded-lg border ${
                            isDarkMode 
                              ? 'bg-gray-700 border-gray-600 text-white' 
                              : 'bg-white border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-6">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Sauvegarder les modifications
        </button>
        <button className={`px-6 py-3 rounded-lg transition-colors ${
          isDarkMode 
            ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}>
          Annuler
        </button>
      </div>
    </div>
  );
};

export default Parameters;