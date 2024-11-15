import React from 'react';
import DashboardLayout from './pages/dashboard/dashboard';

const App: React.FC = () => {
  return (
    <DashboardLayout>
      <h1>dashboard</h1>
      <p>conteúdo principal.</p>
    </DashboardLayout>
  );
};

export default App;