import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const EditProfile = () => {
  const token = localStorage.getItem("token");
  const setItem = useLocalStorage();
  const api = useApi(token);
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [email_address, setEmailAddress] = useState("");

  async function handleEditProfile(e) {
    e.preventDefault();
    try {
      const body = {
        first_name,
        last_name,
        contact_number,
        email_address,
      };
      const { data } = await api.post("/updateprofile", body);
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
            <h3 className="text-center">Update Profile</h3>
          </Card.Title>
          <Form onSubmit={handleEditProfile}>
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
            <Form.Group
              className="mb-3"
              value={user_id}
              onChange={(e) => setUserId(e.target.value)}
            >
              <Form.Label>User</Form.Label>
              <Form.Control type="text" placeholder="Enter User" />
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

export default EditProfile;
