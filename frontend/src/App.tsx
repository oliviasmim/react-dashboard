import React from 'react';
import DashboardLayout from './pages/dashboard/dashboard';

const App: React.FC = () => {
  return (
    <DashboardLayout>
      <h1>Bem-vindo ao Dashboard!</h1>
      <p>Este é o conteúdo principal.</p>
    </DashboardLayout>
  );
};

export default App;