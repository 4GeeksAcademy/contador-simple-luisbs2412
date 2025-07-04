import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));

let counter = 0;
setInterval(() => {
  root.render(<App counter={counter} />);
  counter++;
}, 1000);
