import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useContext, useEffect} from 'react';
import { AuthContext } from '../contexts/UserProvider';


export default function NavB() {

  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken && !user.token) {
      setUser({
        username: localStorage.getItem('username') || '',
        token: storedToken,
        loggedIn: true,
      });
    }
  });
  
  return (
    <Navbar sticky="top" className="flex-column Sidebar">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/nonalcoholic">Non Alcoholic</Navbar.Brand>
        <Navbar.Brand href="/alcoholic">Alcoholic</Navbar.Brand>
        <Navbar.Brand href="/learn">Learn</Navbar.Brand>
        <Navbar.Brand href="/search">Search</Navbar.Brand>
        {user.token || localStorage.getItem('token') ? (
          <>
            <Navbar.Brand href={`/UserPage`}>My Page</Navbar.Brand>
            <Navbar.Brand href="/logout">Logout</Navbar.Brand>
          </>
        ) : (
          <>
            <Navbar.Brand href="/register">Register</Navbar.Brand>
            <Navbar.Brand href="/login">Login</Navbar.Brand>
          </>
        )}
      </Container>
    </Navbar>
  );
}
