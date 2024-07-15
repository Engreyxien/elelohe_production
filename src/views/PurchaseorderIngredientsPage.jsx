import Table from "react-bootstrap/Table";
import useApi from "../utilities/http";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { Container } from "react-bootstrap";

const PurchaseorderIngredientPage = () => {
  const { getItem } = useLocalStorage();
  const token = getItem("token");
  const api = useApi(token);
  const [PurchaseorderIngredient, setPurchaseorderIngredient] = useState([]);
  const [user, _] = useState(JSON.parse(getItem("user") || null));

  useEffect(() => {
    getPurchaseorderIngredients();
    return () => {};
  }, []);

  async function getPurchaseorderIngredients() {
    try {
      const { data } = await api.get("/purchaseorderingredients");
      setPurchaseorderIngredient(data);
    } catch (error) {
      console.error("Error fetching Ingredient's Purchase Order:", error);
    }
  }

  return (
    <div>
      <Container className="mt-5 mb-5">
        <Button
          variant="success justify-content-center"
          as={Link}
          to="/purchaseorderingredientsform"
          className="mb-3 mt-3"
        >
          Add Ingredient's Purchase Order
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
            {PurchaseorderIngredient.map((purchaseorderingredients) => (
              <tr key={purchaseorderingredients.id}>
                <td>{purchaseorderingredients.company_name}</td>
                <td>{purchaseorderingredients.date_requested}</td>
                <td>{purchaseorderingredients.date_needed}</td>
                <td>{purchaseorderingredients.number_of_items}</td>
                <td>{purchaseorderingredients.quantity_unit}</td>
                <td>{purchaseorderingredients.particulars}</td>
                <td>{purchaseorderingredients.unit_price}</td>
                <td>{purchaseorderingredients.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default PurchaseorderIngredientPage;
