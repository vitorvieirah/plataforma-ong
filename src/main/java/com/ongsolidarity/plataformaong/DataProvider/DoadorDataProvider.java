package com.ongsolidarity.plataformaong.DataProvider;

import com.ongsolidarity.plataformaong.Domain.Doador;
import com.ongsolidarity.plataformaong.Entity.DoadorEntity;
import com.ongsolidarity.plataformaong.Exception.DoadorException;
import com.ongsolidarity.plataformaong.Mapper.DoadorMapper;
import com.ongsolidarity.plataformaong.Repository.DoadorRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Optional;
@Component
@Slf4j
@AllArgsConstructor
public class DoadorDataProvider {
    private DoadorRepository repository;
    public Doador salvar(Doador doador) {
        DoadorEntity doadorEntity = DoadorMapper.deDomainParaEntity(doador);
        try{
            doadorEntity = repository.save(doadorEntity);
        }catch (Exception ex){
            log.error("Erro ao salvar doador!", ex);
            throw new DoadorException("Erro ao salvar doador!");

        }
        return DoadorMapper.deEntityParaDomain(doadorEntity);
    }

    public Optional<Doador> buscarPorEmail(String email) {
        Optional <DoadorEntity> doadorEntity;
        try{
            doadorEntity = repository.getByEmail(email);
        }catch(Exception ex){
            log.error("Erro ao buscar email! ", ex);
            throw new DoadorException("Erro ao buscar email!");
        }
        return doadorEntity.map(DoadorMapper::deEntityParaDomain);
    }

    public Optional<Doador> buscarPorId(Long id) {
        Optional <DoadorEntity> doadorEntity;
        try{
            doadorEntity = repository.findById(id);
        }catch (Exception ex){
            log.error("Erro ao buscar id!", ex);
            throw new DoadorException("Erro ao buscar id!");
        }
        return doadorEntity.map(DoadorMapper::deEntityParaDomain);
    }

    public void deletar(Long id) {
        try{
            repository.deleteById(id);
        }catch (Exception ex){
            log.error("Erro ao deletar!", ex);
            throw new DoadorException("Erro ao deletar!");
        }
    }
}
