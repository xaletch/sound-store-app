import { createRoot } from 'react-dom/client'
import './app/styles/index.css'
import App from './app/App.tsx'
import { Provider } from './app/providers/index.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
)
