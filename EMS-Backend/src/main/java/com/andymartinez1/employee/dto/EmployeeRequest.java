package com.andymartinez1.employee.dto;

import lombok.Data;

@Data
public class EmployeeRequest {
    private String name;

    private String email;

    private String phone;

    private String department;
}