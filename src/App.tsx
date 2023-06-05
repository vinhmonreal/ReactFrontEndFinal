import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Logout from './components/Logout';
import Register from './pages/Register';
import Nav from './components/Nav';
import Learn from './pages/Learn';
import SearchIng from './pages/SearchIng';
import UserPage from './pages/UserPage';
import AlcoholicDrinks from './pages/AlcoholicDrinks';


function App() {
  return (
    <Container className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Learn/>} />
          {/* <Route path="/" element={<GetID/>} /> */}
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/alcoholic" element={<AlcoholicDrinks/>} />
          <Route path="/nonalcoholic" element={<AlcoholicDrinks/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/search" element={<SearchIng />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;