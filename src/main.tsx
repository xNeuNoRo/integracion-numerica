import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router'
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
