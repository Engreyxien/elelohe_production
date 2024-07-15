import Table from "react-bootstrap/Table";
import useApi from "../utilities/http";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { Container } from "react-bootstrap";

const PurchaseorderChickenPage = () => {
  const { getItem } = useLocalStorage();
  const token = getItem("token");
  const api = useApi(token);
  const [PurchaseorderChicken, setPurchaseorderChicken] = useState([]);
  const [user, _] = useState(JSON.parse(getItem("user") || null));

  useEffect(() => {
    getPurchaseorderChickens();
    return () => {};
  }, []);

  async function getPurchaseorderChickens() {
    try {
      const { data } = await api.get("/purchaseorderchickens");
      setPurchaseorderChicken(data);
    } catch (error) {
      console.error("Error fetching Chicken's Purchase Order:", error);
    }
  }

  return (
    <div>
      <Container className="mt-5 mb-5">
        <Button
          variant="success justify-content-center"
          as={Link}
          to="/purchaseorderchickenform"
          className="mb-3 mt-3"
        >
          Add Chicken's Purchase Order
        </Button>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Date Requested</th>
              <th>Date Needed</th>
              <th>Number of Items</th>
              <th>Quantity</th>
              <th>Particulars</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {PurchaseorderChicken.map((purchaseorderchickens) => (
              <tr key={purchaseorderchickens.id}>
                <td>{purchaseorderchickens.company_name}</td>
                <td>{purchaseorderchickens.date_requested}</td>
                <td>{purchaseorderchickens.date_needed}</td>
                <td>{purchaseorderchickens.number_of_items}</td>
                <td>{purchaseorderchickens.quantity_unit}</td>
                <td>{purchaseorderchickens.particulars}</td>
                <td>{purchaseorderchickens.unit_price}</td>
                <td>{purchaseorderchickens.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default PurchaseorderChickenPage;
