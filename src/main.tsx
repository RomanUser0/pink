import ReactDOM from 'react-dom/client'
import './index.css'
import { Suspense } from 'react'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
        <Suspense fallback={<div>fallback</div>}>
            <App />
        </Suspense>
       
)
