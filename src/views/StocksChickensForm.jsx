import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const StocksChicken = () => {
  const token = localStorage.getItem("token");
  const setItem = useLocalStorage();
  const api = useApi(token);
  const navigate = useNavigate();
  const [chicken_kilo_types, setChickenKiloType] = useState("");
  const [beginning_stocks, setBeginningStocks] = useState("");
  const [chops_made, setChopsMade] = useState("");
  const [dispatch_AM, setDispatchAM] = useState("");
  const [dispatch_PM, setDispatchPM] = useState("");
  const [ending_stocks, setEndingStocks] = useState("");

  async function handleCreateStocksChicken(e) {
    e.preventDefault();
    try {
      const body = {
        chicken_kilo_types,
        beginning_stocks,
        chops_made,
        dispatch_AM,
        dispatch_PM,
        ending_stocks,
      };
      const { data } = await api.post("/stockschicken", body);
      toast.success(data.message);
      navigate("/stockschickenspage");
    } catch (e) {
      if (e.response && e.response.data) {
        toast.error(e.response.data.message);
      } else {
        toast.error("An error occurred");
      }
    }
  }

  return (
    <>
      <Card
        className="mx-auto mt-5 mb-5"
        style={{ maxWidth: "600px", width: "100%", fontFamily: "serif" }}
      >
        <Card.Body>
          <Card.Title>
            <h3 className="text-center">Create Stocks for Chicken</h3>
          </Card.Title>
          <Form onSubmit={handleCreateStocksChicken}>
            <Form.Group
              className="mb-3"
              value={chicken_kilo_types}
              onChange={(e) => setChickenKiloType(e.target.value)}
            >
              <Form.Label>Chicken Kilo Category</Form.Label>
              <Form.Control type="text" placeholder="Enter the Category" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={beginning_stocks}
              onChange={(e) => setBeginningStocks(e.target.value)}
            >
              <Form.Label>Beginning Stocks</Form.Label>
              <Form.Control type="text" placeholder="Enter Beginning Stocks" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={chops_made}
              onChange={(e) => setChopsMade(e.target.value)}
            >
              <Form.Label>Total Chops Made</Form.Label>
              <Form.Control type="text" placeholder="Enter Chops Made" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={dispatch_AM}
              onChange={(e) => setDispatchAM(e.target.value)}
            >
              <Form.Label>Dispatch AM</Form.Label>
              <Form.Control type="text" placeholder="Enter Dispatch AM" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={dispatch_PM}
              onChange={(e) => setDispatchPM(e.target.value)}
            >
              <Form.Label>Dispatch PM</Form.Label>
              <Form.Control type="text" placeholder="Enter Dispatch PM" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={ending_stocks}
              onChange={(e) => setEndingStocks(e.target.value)}
            >
              <Form.Label>Ending Stocks</Form.Label>
              <Form.Control type="text" placeholder="Enter Ending Stocks" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StocksChicken;
