package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Employee;
//@CrossOrigin
//@RepositoryRestResource
public interface EmployeeRepository extends JpaRepository<Employee, Long>{
}
