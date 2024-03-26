package com.krloyar.ecommerce.dao;

import com.krloyar.ecommerce.entity.product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import  org.springframework.stereotype.Repository;
@CrossOrigin
public interface ProductRepository extends JpaRepository<product,Long> {
    Page<product> findByCategoryId(@Param("id")Long id, Pageable pageable);
}
