import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './Sidebar';
import MakePost from './AddDrinkToFav';

interface BodyProps {
  makepost: boolean,
  sidebar: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function Body({ makepost, sidebar, children }: BodyProps) {
  return (
    <Container>
      <Stack direction="horizontal">
        {sidebar && <Sidebar />}
        <Container className='section'>
          { makepost && <MakePost /> }
          {children}
        </Container>
      </Stack>
    </Container>
  );
}