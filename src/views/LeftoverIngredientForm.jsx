import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const LeftoverIngredient = () => {
  const token = localStorage.getItem("token");
  const setItem = useLocalStorage();
  const api = useApi(token);
  const navigate = useNavigate();
  const [ingredient_name, setIngredientName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [amount, setAmount] = useState("");

  async function handleCreateLeftoverIngredient(e) {
    e.preventDefault();
    try {
      const body = {
        ingredient_name,
        quantity,
        unit_price,
        amount,
      };
      const { data } = await api.post("/leftoveringredient", body);
      toast.success(data.message);
      navigate("/leftoveringredientpage");
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
            <h3 className="text-center">Create Leftover Ingredient</h3>
          </Card.Title>
          <Form onSubmit={handleCreateLeftoverIngredient}>
            <Form.Group
              className="mb-3"
              onChange={(e) => setIngredientName(e.target.value)}
            >
              <Form.Label>Ingredient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Ingredient Name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              onChange={(e) => setQuantity(e.target.value)}
            >
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="text" placeholder="Enter Quantity" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              onChange={(e) => setUnitPrice(e.target.value)}
            >
              <Form.Label>Unit Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Unit Price" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              onChange={(e) => setAmount(e.target.value)}
            >
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" placeholder="Enter Amount" />
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

export default LeftoverIngredient;
