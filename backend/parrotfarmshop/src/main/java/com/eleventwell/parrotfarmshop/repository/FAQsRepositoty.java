package com.eleventwell.parrotfarmshop.repository;


import com.eleventwell.parrotfarmshop.entity.FAQEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FAQsRepositoty extends JpaRepository<FAQEntity, Long> {

    FAQEntity findOneById(long id);
}