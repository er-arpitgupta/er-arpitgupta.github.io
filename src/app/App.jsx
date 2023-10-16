import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Templates from './pages/css-template/Templates';

import './App.css';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </HashRouter>
  );
}
