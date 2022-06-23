//importamos react y reactDom con sus componenetes basicos:
import React from 'react';
import ReactDOM from 'react-dom/client';
//llamamos nuestro componente (App):
import App from './routes/App';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );