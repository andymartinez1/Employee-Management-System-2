package com.andymartinez1.employee.service;

import com.andymartinez1.employee.dto.EmployeeDTO;
import com.andymartinez1.employee.entity.Employee;
import com.andymartinez1.employee.exception.ResourceNotFoundException;
import com.andymartinez1.employee.mapper.EmployeeMapper;
import com.andymartinez1.employee.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeDTO postEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDTO(savedEmployee);
    }

    public EmployeeDTO getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee not found: " + id));
        return EmployeeMapper.mapToEmployeeDTO(employee);
    }

    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(EmployeeMapper::mapToEmployeeDTO).collect(Collectors.toList());
    }

    public EmployeeDTO updateEmployee(Long id, EmployeeDTO updatedEmployee) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee not found: " + id));

        employee.setEmail(updatedEmployee.getEmail());
        employee.setName(updatedEmployee.getName());
        employee.setPhone(updatedEmployee.getPhone());
        employee.setDepartment(updatedEmployee.getDepartment());

        Employee updatedEmployeeObj = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDTO(updatedEmployeeObj);

    }

    public void deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee not found: " + id));
        employeeRepository.deleteById(id);
    }
}
