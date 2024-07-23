import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipesPage from './pages/RecipesPage';
import RecipeShowPage from './pages/RecipeShowPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RecipesPage />} />
          <Route path="/recipe/:id" element={<RecipeShowPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

