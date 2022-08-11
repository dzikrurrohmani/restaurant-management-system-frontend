import {
  Container,
  Nav,
  Navbar as NavbarBS,
  NavDropdown,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarBS
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ position: 'fixed', width: '100%' }}
      >
        <Container style={{ display: 'flex', alignItems: 'first baseline' }}>
          {/* <NavbarBS.Brand onClick={welcomeView}>
            WMB
          </NavbarBS.Brand> */}
          <Nav.Link style={{ color: 'white' }} onClick={() => navigate('/home')}>
            WMB (Warung Makan Bahari)
          </Nav.Link>
          <Container style={{ marginRight: 'initial', width: 'max-content' }}>
            <NavbarBS.Toggle
              aria-controls="basic-navbar-nav"
              style={{
                zIndex: '102',
              }}
            ></NavbarBS.Toggle>
            <NavbarBS.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate('transaction')}>
                  &nbsp;&nbsp;Transaction&nbsp;&nbsp;
                </Nav.Link>
                <Nav.Link onClick={() => navigate('menu')}>
                  &nbsp;&nbsp;Menu&nbsp;&nbsp;
                </Nav.Link>
                <Nav.Link onClick={() => navigate('table')}>
                  &nbsp;&nbsp;Table&nbsp;&nbsp;
                </Nav.Link>
                <NavDropdown title=" &nbsp;&nbsp;Actions&nbsp;&nbsp;">
                  <NavDropdown.Item
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    Restart
                  </NavDropdown.Item>
                  <NavDropdown.Item>Preferences</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => props.handleLog(false)}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </NavbarBS.Collapse>
          </Container>
        </Container>
      </NavbarBS>
    </>
  );
};

export default HeaderComponent;
