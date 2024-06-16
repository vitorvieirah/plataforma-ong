package com.ongsolidarity.plataformaong.Service;

import com.ongsolidarity.plataformaong.DataProvider.DoadorDataProvider;
import com.ongsolidarity.plataformaong.Domain.Doador;
import com.ongsolidarity.plataformaong.Dto.DoadorDto;
import com.ongsolidarity.plataformaong.Mapper.DoadorMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
@AllArgsConstructor
public class DoadorService {
    private DoadorDataProvider dataProvider;
    public DoadorDto cadastrar(DoadorDto dto) {
        Doador doador = DoadorMapper.deDtoParaDomain(dto);
        if (validarDoador(doador.getEmail())){
            if (validarIdadeDoador(doador.getDataDeNascimento())){
                Doador doadorResponse = dataProvider.salvar(doador);
                return DoadorMapper.deDomainParaDto(doadorResponse);
            }else {
                throw new RuntimeException("Necessário ser maior de 18 anos!");
            }
        }else {
            throw new RuntimeException("Doador já cadastrado!");
        }

    }

    public DoadorDto buscarPorEmail(String email) {
        Optional <Doador> doador = dataProvider.buscarPorEmail(email);
        if (doador.isEmpty()){
            throw new RuntimeException("Doador não encontrado!");
        }else{
            return DoadorMapper.deDomainParaDto(doador.get());
        }
    }

    public DoadorDto alterar(Long id, DoadorDto dto) {
        Optional <Doador> doador = dataProvider.buscarPorId(id);
        if(doador.isEmpty()){
            throw new RuntimeException(("Doador não encontrado!"));
        }else{
            doador.get().alterarDoador(dto);
            Doador response = dataProvider.salvar(doador.get());
            return DoadorMapper.deDomainParaDto(response);
        }
    }

    public void deletar(Long id) {
        dataProvider.deletar(id);
    }
    private boolean validarDoador(String email){
        Optional<Doador> doadorExistente = dataProvider.buscarPorEmail(email);
        return doadorExistente.isEmpty();
    }
    private boolean validarIdadeDoador(LocalDate data){
       int ano = data.getYear();
       int anoAtual = LocalDate.now().getYear();
       if((anoAtual - ano) >= 18 ){
           return true;
       }else{
           return false;
       }

    }
}
