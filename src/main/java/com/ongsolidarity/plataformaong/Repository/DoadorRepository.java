package com.ongsolidarity.plataformaong.Repository;

import com.ongsolidarity.plataformaong.Entity.DoadorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface  DoadorRepository extends JpaRepository<DoadorEntity,Long> {
    Optional<DoadorEntity> getByEmail(String email);
}
