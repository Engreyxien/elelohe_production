import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const StocksIngredients = () => {
  const token = localStorage.getItem("token");
  const setItem = useLocalStorage();
  const api = useApi(token);
  const navigate = useNavigate();
  const [ingredients_name, setIngredientName] = useState("");
  const [beginning_stocks, setBeginningStocks] = useState("");
  const [dispatch_AM, setDispatchAM] = useState("");
  const [dispatch_PM, setDispatchPM] = useState("");
  const [ending_stocks, setEndingStocks] = useState("");

  async function handleCreateStocksIngredients(e) {
    e.preventDefault();
    try {
      const body = {
        ingredients_name,
        beginning_stocks,
        dispatch_AM,
        dispatch_PM,
        ending_stocks,
      };
      const { data } = await api.post("/stocksingredient", body);
      toast.success(data.message);
      navigate("/stocksingredientspage");
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
            <h3 className="text-center">Create Stocks for Ingredient</h3>
          </Card.Title>
          <Form onSubmit={handleCreateStocksIngredients}>
            <Form.Group
              className="mb-3"
              value={ingredients_name}
              onChange={(e) => setIngredientName(e.target.value)}
            >
              <Form.Label>Ingredient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter the Ingredient" />
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

export default StocksIngredients;
