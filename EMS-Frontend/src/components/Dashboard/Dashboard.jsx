import {useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import client from "../../api/client";
import "./Dashboard.css";

export default function Dashboard() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const {data} = await client.get("/employees");
                setEmployees(data);
            } catch (error) {
                console.error("Could not fetch employees: ", error.response?.data || error.message);
            }
        };
        fetchEmployees();
    }, []);

    const handleDelete = async (employeeId) => {
        try {
            await client.delete(`/employee/${employeeId}`);
            setEmployees((prev) => prev.filter((e) => e.id !== employeeId));
        } catch (error) {
            console.error("Error deleting employee: ", error.response?.data || error.message);
        }
    };

    const handleUpdate = (employeeId) => navigate(`/employee/${employeeId}`);

    const getInitials = (name = "") =>
        name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

    return (
        <Container className="dashboard-container">
            <div className="dashboard-header">
                <div>
                    <h2 className="dashboard-title">Employees</h2>
                    <p className="dashboard-subtitle">
                        {employees.length} team member{employees.length !== 1 ? "s" : ""}
                    </p>
                </div>
                <Button className="btn-add" onClick={() => navigate("/employee")}>
                    + Add Employee
                </Button>
            </div>

            <div className="table-card">
                {employees.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">👥</div>
                        <p>No employees yet. Add your first one!</p>
                    </div>
                ) : (
                    <table className="modern-table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>
                                    <div className="name-cell">
                                        <span className="avatar">{getInitials(employee.name)}</span>
                                        {employee.name}
                                    </div>
                                </td>
                                <td className="text-muted-cell">{employee.email}</td>
                                <td className="text-muted-cell">{employee.phone}</td>
                                <td>
                                    <span className="dept-badge">{employee.department}</span>
                                </td>
                                <td>
                                    <div className="action-btns">
                                        <button className="btn-edit" onClick={() => handleUpdate(employee.id)}>
                                            Edit
                                        </button>
                                        <button className="btn-delete" onClick={() => handleDelete(employee.id)}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </Container>
    );
}