import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Card name="Apples" description="Apples are red." />
    <Card name="Oranges" description="Oranges are orange." />
    <Card name="Strawberries" description="Strawberries are green?" />
    <App/>
  </StrictMode>
)
