import Table from "react-bootstrap/Table";
import useApi from "../utilities/http";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { Container } from "react-bootstrap";

const MaterialsPage = () => {
  const { getItem } = useLocalStorage();
  const token = getItem("token");
  const api = useApi(token);
  const [sortBy, setSortBy] = useState("created_at");
  const [materials, setMaterials] = useState([]);
  const [user, _] = useState(JSON.parse(getItem("user") || null));

  useEffect(() => {
    getMaterials();
    return () => {};
  }, []);

  async function getMaterials(sortBy = "created_at") {
    try {
      const { data } = await api.get("/materials");
      setMaterials(data);
    } catch (error) {
      console.error("Error fetching materials:", error);
    }
  }

  return (
    <div>
      <Container className="mt-5 mb-5">
        <Button
          variant="success justify-content-center"
          as={Link}
          to="/materialsform"
          className="mb-3 mt-3"
        >
          Add Materials
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Material Name</th>
              <th>Number of Items</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((materials) => (
              <tr key={materials.id}>
                <td>{materials.materials_name}</td>
                <td>{materials.number_of_items}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MaterialsPage;
