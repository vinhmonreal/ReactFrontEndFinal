import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Logout from './components/Logout';
import Register from './pages/Register';
import Learn from './pages/Learn';
import UserPage from './pages/UserPage';
import AlcoholicDrinks from './pages/AlcoholicPage1';
import SearchForRecipe from './pages/SearchForRecipe';
import NonAlcoholicDrinks from './pages/NonAlcoholic';
import LandingPage from './pages/LandingPage';

function App() {
  return (   
    <Container className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/UserPage/:username" element={<UserPage />} />
          <Route path="/alcoholic" element={AlcoholicDrinks()} />
          <Route path="/nonalcoholic" element={NonAlcoholicDrinks()} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/search" element={<SearchForRecipe/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;