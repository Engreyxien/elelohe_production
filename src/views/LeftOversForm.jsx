import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const LeftOvers = () => {
  const setItem = useLocalStorage();
  const token = getItem("token");
  const api = useApi(token);
  const navigate = useNavigate();

  const [branch, setBranch] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [item_number, setItemNumber] = useState("");
  const [items, setItems] = useState("");
  const [quantity, setQuantity] = useState("");
  const [delivered_by, setDeliveredBy] = useState("");
  const [user_id, setUserId] = useState("");

  async function handleCreateLeftOver(e) {
    e.preventDefault();
    try {
      const body = {
        branch,
        date,
        time,
        item_number,
        item,
        quantity,
        delivered_by,
        user_id,
      };
      const { data } = await api.post("/leftovers", body);
      toast.success(data.message);
      navigate("/leftoverspage");
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
          <Form onSubmit={handleCreateLeftOver}>
            <Form.Group className="mb-3">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Item Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item Number"
                value={item_number}
                onChange={(e) => setItemNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Items</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item"
                value={items}
                onChange={(e) => setItems(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Delivered By</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Delivered By"
                value={delivered_by}
                onChange={(e) => setDeliveredBy(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User ID"
                value={user_id}
                onChange={(e) => setUserId(e.target.value)}
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

export default LeftOvers;
