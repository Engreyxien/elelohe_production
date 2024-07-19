import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const LeftoversProduce = () => {
  const token = localStorage.getItem("token");
  const setItem = useLocalStorage();
  const api = useApi(token);
  const navigate = useNavigate();
  const [number_of_fried_chicken, setNumberOfFriedChicken] = useState("");
  const [number_of_lumpia_produce, setNumberOfLumpiaProduce] = useState("");
  const [dispatched_to, setDispatchedTo] = useState("");

  async function handleCreateLeftoversProduce(e) {
    e.preventDefault();
    try {
      const body = {
        number_of_fried_chicken,
        number_of_lumpia_produce,
        dispatched_to,
      };
      const { data } = await api.post("/leftoversproduce", body);
      toast.success(data.message);
      navigate("/leftoversproducepage");
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
            <h3 className="text-center">Create Leftover Produce</h3>
          </Card.Title>
          <Form onSubmit={handleCreateLeftoversProduce}>
            <Form.Group
              className="mb-3"
              value={number_of_fried_chicken}
              onChange={(e) => setNumberOfFriedChicken(e.target.value)}
            >
              <Form.Label>Number of Fried Chicken</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Number of Fried Chicken"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={number_of_lumpia_produce}
              onChange={(e) => setNumberOfLumpiaProduce(e.target.value)}
            >
              <Form.Label>Number of Lumpia Produce </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Number of Lumpia Produce"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={dispatched_to}
              onChange={(e) => setDispatchedTo(e.target.value)}
            >
              <Form.Label>Dispatched To</Form.Label>
              <Form.Control type="text" placeholder="Enter Dispatched To" />
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

export default LeftoversProduce;
