import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Templates from './pages/project-template/Templates';
import Photofolio from './pages/project-photofolio/Photofolio';

import './App.css';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/photofolio" element={<Photofolio />} />
      </Routes>
    </HashRouter>
  );
}
