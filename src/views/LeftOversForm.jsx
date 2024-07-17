import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const LeftOvers = () => {
  const token = localStorage.getItem("token");
  const setItem = useLocalStorage();
  const api = useApi(token);
  const navigate = useNavigate();
  const [branch, setBranch] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [item_number, setItemNumber] = useState("");
  const [item, setItems] = useState("");
  const [quantity, setQuantity] = useState("");
  const [delivered_by, setDeliveredBy] = useState("");
  const [user_id, setUserId] = useState("");

  async function handleCreateLeftOvers(e) {
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
      const { data } = await api.post("/leftover", body);
      toast.success(data.message);
      navigate("/leftoverspage");
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
            <h3 className="text-center">Create Leftover Turnover</h3>
          </Card.Title>
          <Form onSubmit={handleCreateLeftOvers}>
            <Form.Group
              className="mb-3"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <Form.Label>Branch</Form.Label>
              <Form.Control type="text" placeholder="Enter Branch" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            >
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="Enter Date" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" placeholder="Enter Time" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={item_number}
              onChange={(e) => setItemNumber(e.target.value)}
            >
              <Form.Label>Item Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Item Number" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={item}
              onChange={(e) => setItems(e.target.value)}
            >
              <Form.Label>Item</Form.Label>
              <Form.Control type="text" placeholder="Enter Item" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="text" placeholder="Enter Quantity" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={delivered_by}
              onChange={(e) => setDeliveredBy(e.target.value)}
            >
              <Form.Label>Delivered By</Form.Label>
              <Form.Control type="text" placeholder="Enter Delivered By" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={user_id}
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

export default LeftOvers;
