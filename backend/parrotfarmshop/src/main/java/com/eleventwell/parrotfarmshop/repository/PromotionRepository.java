package com.eleventwell.parrotfarmshop.repository;


import com.eleventwell.parrotfarmshop.entity.FAQEntity;
import com.eleventwell.parrotfarmshop.entity.PromotionEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface PromotionRepository extends JpaRepository<PromotionEntity, Long> {

    PromotionEntity findOneById(long id);

    List<PromotionEntity> findAllByOrderByIdDesc();


    @Query("SELECT p FROM PromotionEntity p WHERE p.code = :code AND :currentDate BETWEEN p.startDate AND p.endDate")
    PromotionEntity findOneByCodeAndCheckValidDate(@Param("code") String code, @Param("currentDate") Date currentDate);

    @Query("SELECT u FROM PromotionEntity u WHERE (:searchStartDate IS NULL OR DATE(u.startDate) = :searchStartDate) AND (:searchEndDate IS NULL OR DATE(u.endDate) = :searchEndDate)  AND (:status IS NULL OR u.status = :status)" +
            "ORDER BY " +
            "CASE WHEN :sortDate = 'DASC' THEN u.createdDate END ASC , " +
            "CASE WHEN :sortDate = 'DDESC' THEN u.createdDate END DESC, " +
            "u.id DESC")
    List<PromotionEntity> searchSortForPromotion(@Param("searchStartDate") Date searchStartDate, @Param("searchEndDate") Date searchEndDate, @Param("sortDate") String sortDate, @Param("status") Boolean status, Pageable pageable);


}
