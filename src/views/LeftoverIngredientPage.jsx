import Table from "react-bootstrap/Table";
import useApi from "../utilities/http";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { Container } from "react-bootstrap";

const LeftoverIngredientPage = () => {
  const { getItem } = useLocalStorage();
  const token = getItem("token");
  const api = useApi(token);
  const [LeftoverIngredients, setLeftoverIngredients] = useState([]);
  const [user, _] = useState(JSON.parse(getItem("user") || null));

  useEffect(() => {
    getLeftoverIngredients();
    return () => {};
  }, []);

  async function getLeftoverIngredients() {
    try {
      const { data } = await api.get("/leftoveringredients");
      setLeftoverIngredients(data);
    } catch (error) {
      console.error("Error fetching leftover ingredients:", error);
    }
  }

  return (
    <div>
      <Container className="mt-5 mb-5">
        <Button
          variant="success justify-content-center"
          as={Link}
          to="/leftoveringredientform"
          className="mb-3 mt-3"
        >
          Add Leftover Ingredient
        </Button>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Ingredient Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {LeftoverIngredients.map((leftoveringredients) => (
              <tr key={leftoveringredients.id}>
                <td>{leftoveringredients.ingredient_name}</td>
                <td>{leftoveringredients.quantity}</td>
                <td>{leftoveringredients.unit_price}</td>
                <td>{leftoveringredients.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default LeftoverIngredientPage;
