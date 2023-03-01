import React from 'react';

import App from './App';
import AuthProvider from './contexts/AuthProvider';

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
