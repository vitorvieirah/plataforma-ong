package com.ongsolidarity.plataformaong.Repository;

import com.ongsolidarity.plataformaong.Entity.OngEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository

public interface OngRepository extends JpaRepository<OngEntity,Long> {

    Optional<OngEntity> findByCnpj(String cnpj);

    @Query("SELECT og FROM Ong og WHERE og.cnpj = :cnpj AND og.nomeEmpresarial = :nomeEmpresarial AND og.senha = :senha")
    Optional<OngEntity> findByCnpjNomeSenha(String cnpj, String nomeEmpresarial, String senha);
    List<OngEntity> findByNomeFantasia(String nome);
}
