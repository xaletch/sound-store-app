import { createRoot } from 'react-dom/client'
import './app/styles/index.css'
import App from './app/App.tsx'
import { Provider } from './app/providers/index.tsx'

import { init } from '@telegram-apps/sdk-react';

init();

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
)
