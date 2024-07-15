import Table from "react-bootstrap/Table";
import useApi from "../utilities/http";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { Container } from "react-bootstrap";

const StocksChickensPage = () => {
  const { getItem } = useLocalStorage();
  const token = getItem("token");
  const api = useApi(token);
  const [StocksChicken, setStocksChicken] = useState([]);
  const [user, _] = useState(JSON.parse(getItem("user") || null));

  useEffect(() => {
    getStocksChickens();
    return () => {};
  }, []);

  async function getStocksChickens() {
    try {
      const { data } = await api.get("/stockschickens");
      setStocksChicken(data);
    } catch (error) {
      console.error("Error fetching stocks of chicken:", error);
    }
  }

  return (
    <div>
      <Container className="mt-5 mb-5">
        <Button
          variant="success justify-content-center"
          as={Link}
          to="/stockschickensform"
          className="mb-3 mt-3"
        >
          Add Stocks for Chicken
        </Button>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Chicken Kilo Category</th>
              <th>Beginning Stocks</th>
              <th>Total Chops Made</th>
              <th>Dispatch AM</th>
              <th>Dispatch PM</th>
              <th>Ending Stocks</th>
            </tr>
          </thead>
          <tbody>
            {StocksChicken.map((stockschickens) => (
              <tr key={stockschickens.id}>
                <td>{stockschickens.chicken_kilo_types}</td>
                <td>{stockschickens.beginning_stocks}</td>
                <td>{stockschickens.chops_made}</td>
                <td>{stockschickens.dispatch_AM}</td>
                <td>{stockschickens.dispatch_PM}</td>
                <td>{stockschickens.ending_stocks}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default StocksChickensPage;
