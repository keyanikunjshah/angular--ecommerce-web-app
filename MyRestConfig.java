package com.krloyar.ecommerce.config;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
 import  java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Configuration

public class MyRestConfig implements RepositoryRestConfigurer {

     @Autowired
     private EntityManager em;
     public  void  configureRepositoryRestConfiguratiom(RepositoryRestConfiguration config,CorsRegistry cors){
         Set<EntityType<?>> entitiesType=em.getMetamodel().getEntities();
         List<Class> entityClasses= new ArrayList<>();
         for (EntityType tempEntity:entitiesType){
             entityClasses.add(tempEntity.getJavaType());
         }
         Class[] domainType=entityClasses.toArray(new Class[0]);
          config.exposeIdsFor(domainType);
     }

}
