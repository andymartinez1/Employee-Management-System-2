package com.andymartinez1.employee.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotBlank(message = "Please provide a valid name")
    @Size(min = 2, message = "Name should have at least 2 characters")
    private String name;

    @Column(nullable = false, unique = true)
    @Email(message = "Please provide a valid email")
    private String email;

    @Column(nullable = false, unique = true)
    @NotBlank(message = "Please provide a valid phone number")
    @Pattern(regexp = "(^$|[0-9]{10})")
    private String phone;

    @Column(nullable = false)
    @NotBlank(message = "Please provide a valid department")
    private String department;

}
