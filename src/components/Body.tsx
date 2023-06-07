import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './Sidebar';
import Header from './Header';

interface BodyProps {
  sidebar: boolean;
  header: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function Body({  sidebar,header, children }: BodyProps) {
  return (
    <Container>
      <Stack direction="vertical">
        {sidebar && <Sidebar />}
      </Stack>
      <Stack direction="horizontal">

          {header && <Header />}
      </Stack>
          {children}

    </Container>
  );
}

