import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const Materials = () => {
  const token = localStorage.getItem("token");
  const setItem = useLocalStorage();
  const api = useApi(token);
  const navigate = useNavigate();
  const [materials_name, setMaterialsName] = useState("");
  const [number_of_items, setNumberofItems] = useState("");

  async function handleCreateMaterials(e) {
    e.preventDefault();
    try {
      const body = {
        materials_name,
        number_of_items,
      };
      const { data } = await api.post("/material", body);
      toast.success(data.message);
      navigate("/materialspage");
    } catch (e) {
      toast.error(e.response.data.message);
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
            <h3 className="text-center">Create Materials</h3>
          </Card.Title>
          <Form onSubmit={handleCreateMaterials}>
            <Form.Group
              className="mb-3"
              value={materials_name}
              onChange={(e) => setMaterialsName(e.target.value)}
              controlId="formBasicEmail"
            >
              <Form.Label>Material Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Material Name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              value={number_of_items}
              onChange={(e) => setNumberofItems(e.target.value)}
            >
              <Form.Label>Number of Items</Form.Label>
              <Form.Control type="text" placeholder="Enter Number of Items" />
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

export default Materials;
