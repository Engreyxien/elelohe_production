import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const LeftoversTurnover = () => {
  const token = localStorage.getItem("token");
  const setItem = useLocalStorage();
  const api = useApi(token);
  const navigate = useNavigate();

  const [branch, setBranch] = useState("");
  const [date_received, setDateReceived] = useState("");
  const [time_received, setTimeReceived] = useState("");
  const [item_number, setItemNumber] = useState("");
  const [number_of_items, setNumberOfItems] = useState("");
  const [quantity, setQuantity] = useState("");
  const [delivered_by, setDeliveredBy] = useState("");

  async function handleCreateLeftoversTurnover(e) {
    e.preventDefault();
    try {
      const body = {
        branch,
        date_received,
        time_received,
        item_number,
        number_of_items,
        quantity,
        delivered_by,
      };
      const { data } = await api.post("/leftoversturnover", body);
      toast.success(data.message);
      navigate("/leftoversturnoverpage");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
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
            <h3 className="text-center">Create Leftover Turnover</h3>
          </Card.Title>
          <Form onSubmit={handleCreateLeftoversTurnover}>
            <Form.Group className="mb-3">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Branch"
                onChange={(e) => setBranch(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Date"
                onChange={(e) => setDateReceived(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter Time"
                value={time_received}
                onChange={(e) => setTimeReceived(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Item Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item Number"
                onChange={(e) => setItemNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Items</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item"
                onChange={(e) => setNumberOfItems(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Delivered By</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Delivered By"
                onChange={(e) => setDeliveredBy(e.target.value)}
              />
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

export default LeftoversTurnover;
