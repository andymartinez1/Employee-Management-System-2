import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PostEmployee.css";

export default function PostEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("http://localhost:8080/api/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Employee created: ", data);
      navigate("/");
    } catch (error) {
      console.error("Error creating employee: ", error.message);
    }
  };

  return (
    <div className="center-form">
      <h1>Add New Employee</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter Phone #"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            name="department"
            placeholder="Enter Department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Add Employee
        </Button>
      </Form>
    </div>
  );
}
