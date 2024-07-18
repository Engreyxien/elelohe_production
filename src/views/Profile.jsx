import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Container
      className="d-flex justify-content-center mt-5 mb-5"
      style={{ fontFamily: "serif" }}
    >
      <ButtonGroup vertical>
        <Button
          className="mt-3 text-dark"
          variant="outline-danger"
          as={Link}
          to="/materialspage"
        >
          Materials
        </Button>

        <DropdownButton
          className="mt-3 text-dark"
          as={ButtonGroup}
          title="Purchase Order"
          id="bg-vertical-dropdown-1"
          variant="outline-danger"
        >
          <Dropdown.Item eventKey="1" as={Link} to="/purchaseorderchickenpage">
            Purchase Order-Chicken
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="2"
            as={Link}
            to="/purchaseorderingredientspage"
          >
            Purchase Order-Ingredients
          </Dropdown.Item>
        </DropdownButton>

        <Button
          className="mt-3 text-dark"
          variant="outline-danger"
          as={Link}
          to="/stockschickenspage"
        >
          {" "}
          Stocks for Chicken
        </Button>
        <Button
          className="mt-3 text-dark"
          variant="outline-danger"
          as={Link}
          to="/stocksingredientspage"
        >
          Stocks for Ingredients
        </Button>
        <Button
          className="mt-3 text-dark"
          variant="outline-danger"
          as={Link}
          to="/stockstransferpage"
        >
          Stock Transfer
        </Button>

        <DropdownButton
          className="mt-3 text-dark"
          as={ButtonGroup}
          title="Leftovers"
          id="bg-vertical-dropdown-3"
          variant="outline-danger"
        >
          <Dropdown.Item eventKey="1" as={Link} to="/leftoversturnoverpage">
            {" "}
            Leftovers Turnover
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" as={Link} to="/leftoveringredientpage">
            Leftover Stock Ingredients
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" as={Link} to="/leftoversproducepage">
            Produce from Leftovers
          </Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </Container>
  );
}

export default Profile;
