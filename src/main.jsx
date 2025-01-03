import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.jsx'
import { DataProvider } from './useContext/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
    <App />
    </DataProvider>
    
  </StrictMode>,
)
