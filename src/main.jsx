import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App';
const App = lazy(() => import('./App'))
import Spinner from './components/Spinner'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>
)
