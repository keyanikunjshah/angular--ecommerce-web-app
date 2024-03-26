package com.krloyar.ecommerce.entity;
import jakarta.persistence.*;
import lombok.Data;
import java.util.Set;


@Entity
@Table(name = "product_category")
@Data

public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "category_name")
    private String CategoryName;

    @OneToMany(cascade= CascadeType.ALL, mappedBy = "category")
    private Set<product> product;

}
