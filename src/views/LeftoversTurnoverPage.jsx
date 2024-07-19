import Table from "react-bootstrap/Table";
import useApi from "../utilities/http";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { Container } from "react-bootstrap";

const LeftoversTurnoverPage = () => {
  const { getItem } = useLocalStorage();
  const token = getItem("token");
  const api = useApi(token);
  const [LeftoversTurnovers, setLeftoversTurnovers] = useState([]);
  const [user, _] = useState(JSON.parse(getItem("user") || null));

  useEffect(() => {
    getLeftoversTurnovers();
    return () => {};
  }, []);

  async function getLeftoversTurnovers() {
    try {
      const { data } = await api.get("/leftoversturnovers");
      setLeftoversTurnovers(data);
    } catch (error) {
      console.error("Error fetching leftover turnovers:", error);
    }
  }

  return (
    <div>
      <Container className="mt-5 mb-5">
        <Button
          variant="success justify-content-center"
          as={Link}
          to="/leftoversturnoverform"
          className="mb-3 mt-3"
        >
          Add Leftovers Turnover
        </Button>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Branch</th>
              <th>Date Received</th>
              <th>Time Received</th>
              <th>Item Number</th>
              <th>Number of Item</th>
              <th>Quantity</th>
              <th>Delivered By</th>
            </tr>
          </thead>
          <tbody>
            {LeftoversTurnovers.map((leftoversturnovers) => (
              <tr key={leftoversturnovers.id}>
                <td>{leftoversturnovers.branch}</td>
                <td>{leftoversturnovers.date_received}</td>
                <td>{leftoversturnovers.time_received}</td>
                <td>{leftoversturnovers.item_number}</td>
                <td>{leftoversturnovers.number_of_items}</td>
                <td>{leftoversturnovers.quantity}</td>
                <td>{leftoversturnovers.delivered_by}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default LeftoversTurnoverPage;
