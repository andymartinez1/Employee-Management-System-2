import {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import client from "../../api/client";
import "./UpdateEmployee.css";

export default function UpdateEmployee() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const {data} = await client.get(`/employee/${id}`);
                setFormData(data);
            } catch (error) {
                console.error("Error finding employee: ", error.response?.data || error.message);
            }
        };
        fetchEmployee();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await client.put(`/employee/${id}`, formData);
            console.log("Employee updated: ", data);
            navigate("/");
        } catch (error) {
            console.error("Error updating employee: ", error.response?.data || error.message);
        }
    };

    return (
        <div className="center-form">
            <h1>Edit Employee</h1>
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
                    Edit Employee
                </Button>
            </Form>
        </div>
    );
}