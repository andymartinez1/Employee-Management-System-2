package com.andymartinez1.employee.mapper;

import com.andymartinez1.employee.dto.EmployeeDTO;
import com.andymartinez1.employee.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDTO mapToEmployeeDTO(Employee employee) {
        return new EmployeeDTO(
                employee.getId(),
                employee.getName(),
                employee.getEmail(),
                employee.getPhone(),
                employee.getDepartment()
        );
    }

    public static Employee mapToEmployee(EmployeeDTO employeeDTO) {
        return new Employee(
                employeeDTO.getId(),
                employeeDTO.getName(),
                employeeDTO.getEmail(),
                employeeDTO.getPhone(),
                employeeDTO.getDepartment()
        );
    }
}
