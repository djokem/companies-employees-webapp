package com.example.demo.resources;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.dao.CompanyRepository;
import com.example.demo.dao.EmployeeRepository;
import com.example.demo.entity.Employee;

import io.crnk.core.queryspec.QuerySpec;
import io.crnk.core.repository.ResourceRepositoryBase;
import io.crnk.core.resource.list.ResourceList;

@Component
public class EmployeeResourceRepository extends ResourceRepositoryBase<Employee, Long> {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private CompanyRepository companyRepository;
	
	public EmployeeResourceRepository() {
		super(Employee.class);
	}

	 @Override
	    public synchronized Employee findOne(Long id, QuerySpec querySpec) {
	        Optional<Employee> employee = employeeRepository.findById(id); 
	        return employee.isPresent()? employee.get() : null;
	    }
	    
	    @Override
	    public synchronized ResourceList<Employee> findAll(QuerySpec querySpec) {
	        return querySpec.apply(employeeRepository.findAll());
	    }

	    @Override
	    public synchronized ResourceList<Employee> findAll(Iterable<Long> ids, QuerySpec querySpec) {
	        return querySpec.apply(employeeRepository.findAllById(ids));
	    }

	    @Override
	    public synchronized <S extends Employee> S save(S entity) {
	        return employeeRepository.saveAndFlush(entity);
	    }

	    @Override
	    public synchronized void delete(Long id) {
	    	employeeRepository.deleteById(id);
	    }

	    @Override
	    public synchronized Class<Employee> getResourceClass() {
	        return Employee.class;
	    }

	    @Override
	    public synchronized <S extends Employee> S create(S entity) {
	        return save(entity);
	    }
}
