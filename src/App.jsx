
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';
import ArticlePage from './components/ArticlePage/ArticlePage';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;