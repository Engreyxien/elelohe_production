import Table from "react-bootstrap/Table";
import useApi from "../utilities/http";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { Container } from "react-bootstrap";

const LeftOversProducePage = () => {
  const { getItem } = useLocalStorage();
  const token = getItem("token");
  const api = useApi(token);
  const [LeftoversProduce, setLeftOversProduce] = useState([]);
  const [user, _] = useState(JSON.parse(getItem("user") || null));

  useEffect(() => {
    getLeftOversProduce();
    return () => {};
  }, []);

  async function getLeftOversProduce() {
    try {
      const { data } = await api.get("/leftoversproduces");
      setLeftOversProduce(data);
    } catch (error) {
      console.error("Error fetching produced leftovers:", error);
    }
  }

  return (
    <div>
      <Container className="mt-5 mb-5">
        <Button
          variant="success justify-content-center"
          as={Link}
          to="/leftoversproduceform"
          className="mb-3 mt-3"
        >
          Add Leftovers Produced
        </Button>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Number of Fried Chicken</th>
              <th>Number of Lumpia</th>
              <th>Dispatched_to</th>
            </tr>
          </thead>
          <tbody>
            {LeftoversProduce.map((leftoversproduce) => (
              <tr key={leftoversproduce.id}>
                <td>{leftoversproduce.number_of_fried_chicken}</td>
                <td>{leftoversproduce.number_of_lumpia_produce}</td>
                <td>{leftoversproduce.dispatched_to}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default LeftOversProducePage;
