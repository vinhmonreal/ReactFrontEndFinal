import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

interface BodyProps {
  sidebar: boolean;
  header: boolean;
  children: JSX.Element | JSX.Element[];
  footer : boolean;
}

export default function Body({  sidebar,header, children, footer }: BodyProps) {
  return (
    <Container>
      <Stack direction="vertical">
        {sidebar && <Sidebar />}
      </Stack>
      <Stack direction="horizontal">
          {header && <Header />}
      </Stack>
          {children}
      <Stack direction="horizontal">
        {footer && <Footer />}
      </Stack>
    </Container>
  );
}

