import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/pages/Home';
import './index.css';

console.log('Starting app...');

const container = document.getElementById('root');
console.log('Container:', container);

if (!container) {
  console.error('Root element not found!');
} else {
  const root = createRoot(container);
  console.log('Root created');
  
  root.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
  console.log('Render complete');
}
