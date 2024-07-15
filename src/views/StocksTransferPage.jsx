import Table from "react-bootstrap/Table";
import useApi from "../utilities/http";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { Container } from "react-bootstrap";

const StocksTransferPage = () => {
  const { getItem } = useLocalStorage();
  const token = getItem("token");
  const api = useApi(token);
  const [StocksTransfer, setStocksTransfer] = useState([]);
  const [user, _] = useState(JSON.parse(getItem("user") || null));

  useEffect(() => {
    getStocksTransfer();
    return () => {};
  }, []);

  async function getStocksTransfer() {
    try {
      const { data } = await api.get("/stockstransfers");
      setStocksTransfer(data);
    } catch (error) {
      console.error("Error fetching stocks transfer:", error);
    }
  }

  return (
    <div>
      <Container className="mt-5 mb-5">
        <Button
          variant="success justify-content-center"
          as={Link}
          to="/stockstransferform"
          className="mb-3 mt-3"
        >
          Add Stocks for Transfer
        </Button>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Reference Number</th>
              <th>Transfer From</th>
              <th>Transfer To</th>
              <th>Requested By</th>
              <th>Date Requested</th>
              <th>Date Needed</th>
              <th>Number of Items</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {StocksTransfer.map((stockstransfers) => (
              <tr key={stockstransfers.id}>
                <td>{stockstransfers.reference_number}</td>
                <td>{stockstransfers.transfer_from}</td>
                <td>{stockstransfers.transfer_to}</td>
                <td>{stockstransfers.requested_by}</td>
                <td>{stockstransfers.date_requested}</td>
                <td>{stockstransfers.date_needed}</td>
                <td>{stockstransfers.number_of_items}</td>
                <td>{stockstransfers.quantity_unit}</td>
                <td>{stockstransfers.description}</td>
                <td>{stockstransfers.unit_price}</td>
                <td>{stockstransfers.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default StocksTransferPage;
