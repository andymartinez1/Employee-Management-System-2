package com.andymartinez1.employee.dto;

import lombok.Data;

@Data
public class EmployeeResponse {
    private Long id;

    private String name;

    private String email;

    private String phone;

    private String department;
}