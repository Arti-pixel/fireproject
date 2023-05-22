import { Navbar, Container } from "react-bootstrap";

const SideBarElement = ({ navBarLabel, reference }) => {
  const handleNavBarElementClick = () => {
    reference.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Navbar
      bg="primary"
      className="ms-1 my-1"
      style={{ color: "white", cursor: "pointer", borderRadius: "10px" }}
      onClick={handleNavBarElementClick}
    >
      <Container>{navBarLabel}</Container>
    </Navbar>
  );
};

export default SideBarElement;
