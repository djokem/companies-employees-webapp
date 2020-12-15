package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Company;

//@CrossOrigin
//@RepositoryRestResource(collectionResourceRel  = "companies",  path = "companies")
public interface CompanyRepository extends JpaRepository<Company, Long>{

}
