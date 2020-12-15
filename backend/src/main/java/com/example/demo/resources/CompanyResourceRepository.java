package com.example.demo.resources;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.dao.CompanyRepository;
import com.example.demo.entity.Company;

import io.crnk.core.queryspec.QuerySpec;
import io.crnk.core.repository.ResourceRepositoryBase;
import io.crnk.core.resource.list.ResourceList;

@Component
public class CompanyResourceRepository extends ResourceRepositoryBase<Company, Long> {
	public CompanyResourceRepository() {
		super(Company.class);
	}

	@Autowired
    private CompanyRepository companyRepository;

    @Override
    public synchronized Company findOne(Long id, QuerySpec querySpec) {
        Optional<Company> company = companyRepository.findById(id); 
        return company.isPresent()? company.get() : null;
    }
    
    @Override
    public synchronized ResourceList<Company> findAll(QuerySpec querySpec) {
        return querySpec.apply(companyRepository.findAll());
    }

    @Override
    public synchronized ResourceList<Company> findAll(Iterable<Long> ids, QuerySpec querySpec) {
        return querySpec.apply(companyRepository.findAllById(ids));
    }

    @Override
    public synchronized <S extends Company> S save(S entity) {
        return companyRepository.save(entity);
    }

    @Override
    public synchronized void delete(Long id) {
        companyRepository.deleteById(id);
    }

    @Override
    public synchronized Class<Company> getResourceClass() {
        return Company.class;
    }

    @Override
    public synchronized <S extends Company> S create(S entity) {
        return save(entity);
    }
}
