import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./App"; // Adjust the path as per your file structure
// import './index.css'; // If you have a global stylesheet

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
