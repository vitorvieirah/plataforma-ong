package com.ongsolidarity.plataformaong.DataProvider;

import com.ongsolidarity.plataformaong.Domain.Ong;
import com.ongsolidarity.plataformaong.Entity.OngEntity;
import com.ongsolidarity.plataformaong.Exception.OngException;
import com.ongsolidarity.plataformaong.Mapper.OngMapper;
import com.ongsolidarity.plataformaong.Repository.OngRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@Slf4j
@AllArgsConstructor

public class OngDataProvider {
    private OngRepository repository;

    public Ong salvar(Ong ong) {
        OngEntity ongEntity = OngMapper.deDomainParaEntity(ong);
        try {
            ongEntity = repository.save(ongEntity);
        }catch (Exception exception){
            log.error("Erro ao salvar Ong no banco de dados!!!", exception);
            throw new OngException("Erro ao salvar Ong no banco de dados!!!");
        }
        return OngMapper.deEntityParaDomain(ongEntity);
    }

    public List<Ong> consultarTodos() {
        List<OngEntity> ongEntity;
        try {
            ongEntity = repository.findAll();
        }catch (Exception exception){
            log.error("Erro ao encontrar Ongs no banco de dados!!!", exception);
            throw new OngException("Erro ao encontrar Ongs no banco de dados!!!");
        }
        return OngMapper.deOngEntityListParaOngList(ongEntity);
    }

    public Optional<Ong> consultarPorCnpj(String cnpj) {
        Optional<OngEntity> ongEntity;
        try {
            ongEntity = repository.findByCnpj(cnpj);
        }catch (Exception exception){
            log.error("Erro ao encontrar Ongs por cnpj no banco de dados!!!", exception);
            throw new OngException("Erro ao encontrar Ongs por cnpj no banco de dados!!!");
        }
        return ongEntity.map(OngMapper::deEntityParaDomain);
    }

    public Optional<Ong> consultarPorId(Long id) {
        Optional<OngEntity> ongEntity;
        try {
            ongEntity = repository.findById(id);
        }catch (Exception exception){
            log.error("Erro ao encontrar Ongs por id no banco de dados!!!", exception);
            throw new OngException("Erro ao encontrar Ongs por id no banco de dados!!!");
        }
        return ongEntity.map(OngMapper::deEntityParaDomain);
    }

    public void deletar(Long id) {
        try {
            repository.deleteById(id);
        }catch (Exception exception){
            log.error("Erro ao encontrar Ongs por id no banco de dados!", exception);
            throw new OngException("Erro ao encontrar Ongs por id no banco de dados!");
        }
    }

    public Optional<Ong> buscarPorCnpjNomeSenha(String cnpj, String nomeEmpresarial, String senha) {
        Optional<OngEntity> ongEntity;
        try {
            ongEntity = repository.findByCnpjNomeSenha(cnpj, nomeEmpresarial, senha);
        }catch (Exception exception){
            log.error("Erro ao encontrar Ong no banco de dados!!!", exception);
            throw new OngException("Erro ao encontrar Ong no banco de dados!!!");
        }
        return ongEntity.map(OngMapper::deEntityParaDomain);
    }
}
