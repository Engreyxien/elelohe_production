import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const PurchaseorderIngredients = () => {
  const token = localStorage.getItem("token");
  const setItem = useLocalStorage();
  const api = useApi(token);
  const navigate = useNavigate();
  const [company_name, setCompanyName] = useState("");
  const [date_requested, setDateRequested] = useState("");
  const [date_needed, setDateNeeded] = useState("");
  const [number_of_items, setNumberOfItems] = useState("");
  const [quantity_unit, setQuantityUnit] = useState("");
  const [particulars, setParticulars] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [amount, setAmount] = useState("");

  async function handleCreatePurchaseorderIngredients(e) {
    e.preventDefault();
    try {
      const body = {
        company_name,
        date_requested,
        date_needed,
        number_of_items,
        quantity_unit,
        particulars,
        unit_price,
        amount,
      };
      const { data } = await api.post("/purchaseorderingredient", body);
      toast.success(data.message);
      navigate("/purchaseorderingredientspage");
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
            <h3 className="text-center">
              Create Purchase Order for Ingredient
            </h3>
          </Card.Title>
          <Form onSubmit={handleCreatePurchaseorderIngredients}>
            <Form.Group
              className="mb-3"
              value={company_name}
              onChange={(e) => setCompanyName(e.target.value)}
            >
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={date_requested}
              onChange={(e) => setDateRequested(e.target.value)}
            >
              <Form.Label>Date Requested </Form.Label>
              <Form.Control type="date" placeholder="Enter Date Requested" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={date_needed}
              onChange={(e) => setDateNeeded(e.target.value)}
            >
              <Form.Label>Date Needed</Form.Label>
              <Form.Control type="date" placeholder="Enter Date Needed" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={number_of_items}
              onChange={(e) => setNumberOfItems(e.target.value)}
            >
              <Form.Label>Number of Items</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Number of Items"
              ></Form.Control>
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={quantity_unit}
              onChange={(e) => setQuantityUnit(e.target.value)}
            >
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="text" placeholder="Enter Quantity" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={particulars}
              onChange={(e) => setParticulars(e.target.value)}
            >
              <Form.Label>Particulars</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Particulars"
              ></Form.Control>
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={unit_price}
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

export default PurchaseorderIngredients;
