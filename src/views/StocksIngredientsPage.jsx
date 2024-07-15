import Table from "react-bootstrap/Table";
import useApi from "../utilities/http";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { Container } from "react-bootstrap";

const StocksIngredientsPage = () => {
  const { getItem } = useLocalStorage();
  const token = getItem("token");
  const api = useApi(token);
  const [StocksIngredients, setStocksIngredients] = useState([]);
  const [user, _] = useState(JSON.parse(getItem("user") || null));

  useEffect(() => {
    getStocksIngredients();
    return () => {};
  }, []);

  async function getStocksIngredients() {
    try {
      const { data } = await api.get("/stocksingredients");
      setStocksIngredients(data);
    } catch (error) {
      console.error("Error fetching stocks of ingredients:", error);
    }
  }

  return (
    <div>
      <Container className="mt-5 mb-5">
        <Button
          variant="success justify-content-center"
          as={Link}
          to="/stocksingredientsform"
          className="mb-3 mt-3"
        >
          Add Stocks for Ingredient
        </Button>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Ingredient Name</th>
              <th>Beginning Stocks</th>
              <th>Dispatch AM</th>
              <th>Dispatch PM</th>
              <th>Ending Stocks</th>
            </tr>
          </thead>
          <tbody>
            {StocksIngredients.map((stocksingredients) => (
              <tr key={stocksingredients.id}>
                <td>{stocksingredients.ingredients_name}</td>
                <td>{stocksingredients.beginning_stocks}</td>
                <td>{stocksingredients.dispatch_AM}</td>
                <td>{stocksingredients.dispatch_PM}</td>
                <td>{stocksingredients.ending_stocks}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default StocksIngredientsPage;
