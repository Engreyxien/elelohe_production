import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const StocksTransfer = () => {
  const token = localStorage.getItem("token");
  const setItem = useLocalStorage();
  const api = useApi(token);
  const navigate = useNavigate();
  const [reference_number, setReferenceNumber] = useState("");
  const [transfer_from, setTransferFrom] = useState("");
  const [transfer_to, setTransferTo] = useState("");
  const [requested_by, setRequestedBy] = useState("");
  const [date_requested, setDateRequested] = useState("");
  const [date_needed, setDateNeeded] = useState("");
  const [number_of_items, setNumberOfItems] = useState("");
  const [quantity_unit, setQuantityUnit] = useState("");
  const [description, setDescription] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [amount, setAmount] = useState("");

  async function handleCreateStocksTransfer(e) {
    e.preventDefault();
    try {
      const body = {
        reference_number,
        transfer_from,
        transfer_to,
        requested_by,
        date_requested,
        date_needed,
        number_of_items,
        quantity_unit,
        description,
        unit_price,
        amount,
      };
      const { data } = await api.post("/stockstransfer", body);
      toast.success(data.message);
      navigate("/stockstransferpage");
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
          <Form onSubmit={handleCreateStocksTransfer}>
            <Form.Group
              className="mb-3"
              value={reference_number}
              onChange={(e) => setReferenceNumber(e.target.value)}
            >
              <Form.Label>Reference Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Reference Number"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={transfer_from}
              onChange={(e) => setTransferFrom(e.target.value)}
            >
              <Form.Label>Transfer From</Form.Label>
              <Form.Control type="text" placeholder="Enter Transfer From" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={transfer_to}
              onChange={(e) => setTransferTo(e.target.value)}
            >
              <Form.Label>Transfer To</Form.Label>
              <Form.Control type="text" placeholder="Enter Transfer To" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={requested_by}
              onChange={(e) => setRequestedBy(e.target.value)}
            >
              <Form.Label>Requested By</Form.Label>
              <Form.Control type="text" placeholder="Enter Requested By" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={date_requested}
              onChange={(e) => setDateRequested(e.target.value)}
            >
              <Form.Label>Date Requested</Form.Label>
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
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

export default StocksTransfer;
