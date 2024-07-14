import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './components/Game';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
  document.getElementById('root')
);

