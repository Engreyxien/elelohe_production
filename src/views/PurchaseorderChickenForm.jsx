import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const PurchaseorderChickens = () => {
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
  const [user_id, setUserId] = useState("");

  async function handleCreatePurchaseorderChickens(e) {
    e.preventDefault();
    try {
      const calculatedAmount = unit_price * quantity_unit;
      const body = {
        company_name,
        date_requested,
        date_needed,
        number_of_items,
        quantity_unit,
        particulars,
        unit_price,
        amount: calculatedAmount,
        user_id,
      };
      const { data } = await api.post("/purchaseorderchicken", body);
      toast.success(data.message);
      navigate("/purchaseorderchickenpage");
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
            <h3 className="text-center">Create Purchase Order for Chicken</h3>
          </Card.Title>
          <Form onSubmit={handleCreatePurchaseorderChickens}>
            <Form.Group
              className="mb-3"
              onChange={(e) => setCompanyName(e.target.value)}
            >
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              onChange={(e) => setDateRequested(e.target.value)}
            >
              <Form.Label>Date Requested </Form.Label>
              <Form.Control type="date" placeholder="Enter Date Requested" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              onChange={(e) => setDateNeeded(e.target.value)}
            >
              <Form.Label>Date Needed</Form.Label>
              <Form.Control type="date" placeholder="Enter Date Needed" />
            </Form.Group>
            <Form.Group
              className="mb-3"
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
              onChange={(e) => setQuantityUnit(e.target.value)}
            >
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="text" placeholder="Enter Quantity" />
            </Form.Group>
            <Form.Group
              className="mb-3"
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
              <Form.Control
                type="text"
                placeholder="Enter Amount"
                value={(amount = unit_price * quantity_unit)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              onChange={(e) => setUserId(e.target.value)}
            >
              <Form.Label>User</Form.Label>
              <Form.Control type="text" placeholder="Enter User ID" />
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

export default PurchaseorderChickens;
