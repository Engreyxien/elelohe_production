import Table from "react-bootstrap/Table";
import useApi from "../utilities/http";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { Container } from "react-bootstrap";

const LeftoversPage = () => {
  const { getItem } = useLocalStorage();
  const token = getItem("token");
  const api = useApi(token);
  const [Leftovers, setLeftovers] = useState([]);
  const [user, _] = useState(JSON.parse(getItem("user") || null));

  useEffect(() => {
    getLeftovers();
    return () => {};
  }, []);

  async function getLeftovers() {
    try {
      const { data } = await api.get("/leftovers");
      setLeftovers(data);
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
          to="/leftoversform"
          className="mb-3 mt-3"
        >
          Add Leftovers Turnover
        </Button>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Branch</th>
              <th>Date</th>
              <th>Time</th>
              <th>Item Number</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Delivered By</th>
            </tr>
          </thead>
          <tbody>
            {Leftovers.map((leftovers) => (
              <tr key={leftovers.id}>
                <td>{leftovers.branch}</td>
                <td>{leftovers.date}</td>
                <td>{leftovers.time}</td>
                <td>{leftovers.item_number}</td>
                <td>{leftovers.item}</td>
                <td>{leftovers.quantity}</td>
                <td>{leftovers.delivered_by}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default LeftoversPage;
