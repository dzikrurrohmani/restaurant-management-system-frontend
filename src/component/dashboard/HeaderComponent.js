import {
  Container,
  Nav,
  Navbar as NavbarBS,
  NavDropdown,
} from 'react-bootstrap';

export default function HeaderComponent(props) {
  const { welcomeView, menuView, tableView } = props;
  return (
    <>
      <NavbarBS bg="dark" variant="dark" expand="lg">
        <Container style={{ display: 'flex', alignItems: 'first baseline' }}>
          {/* <NavbarBS.Brand onClick={welcomeView}>
            WMB
          </NavbarBS.Brand> */}
          <Nav.Link style={{ color: 'white' }} onClick={welcomeView}>
            WMB  (Warung Makan Bahari)
          </Nav.Link>
          <Container style={{ marginRight: 'initial', width: 'max-content' }}>
            <NavbarBS.Toggle aria-controls="basic-navbar-nav"></NavbarBS.Toggle>
            <NavbarBS.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={menuView}>
                  &nbsp;&nbsp;Menu&nbsp;&nbsp;
                </Nav.Link>
                <Nav.Link onClick={tableView}>
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
                  <NavDropdown.Item onClick={props.handleLog}>
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
}
