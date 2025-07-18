import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure DOM is ready
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Add loading indicator while app initializes
rootElement.innerHTML = `
  <div style="
    display: flex; 
    align-items: center; 
    justify-content: center; 
    min-height: 100vh; 
    background: #0f1419;
    color: #f1f5f9;
    font-family: Inter, sans-serif;
  ">
    <div style="text-align: center;">
      <div style="
        width: 40px; 
        height: 40px; 
        border: 3px solid #1e40af; 
        border-top: 3px solid transparent; 
        border-radius: 50%; 
        animation: spin 1s linear infinite; 
        margin: 0 auto 16px;
      "></div>
      <p>Cargando Asesfy...</p>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  </div>
`;

const root = createRoot(rootElement);

// Render the app
try {
  root.render(<App />);
} catch (error) {
  console.error("Error rendering app:", error);
  rootElement.innerHTML = `
    <div style="
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      background: #0f1419;
      color: #f1f5f9;
      font-family: Inter, sans-serif;
      text-align: center;
      padding: 20px;
    ">
      <div>
        <h1 style="color: #ef4444; margin-bottom: 16px;">Error al cargar la aplicación</h1>
        <p style="margin-bottom: 16px;">Ha ocurrido un error inesperado. Por favor, recarga la página.</p>
        <button 
          onclick="window.location.reload()" 
          style="
            background: #1e40af; 
            color: white; 
            border: none; 
            padding: 12px 24px; 
            border-radius: 8px; 
            cursor: pointer;
            font-size: 16px;
          "
        >
          Recargar página
        </button>
      </div>
    </div>
  `;
}
