import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//npm create vite + numele aplicatie + React + Javascript
//npm install - node_modules
//npm run dev - comanda pentru pornirea aplicatiei 

//Routing - matchuimm diferite URL cu diferite view-uri(componente).Rutarea se face pe baza unui package REACT.ROUTER.