package com.ongsolidarity.plataformaong.Mapper;

import com.ongsolidarity.plataformaong.Domain.Doador;
import com.ongsolidarity.plataformaong.Dto.DoadorDto;
import com.ongsolidarity.plataformaong.Entity.DoadorEntity;

import java.time.LocalDate;

public class DoadorMapper {
    public static DoadorEntity deDomainParaEntity(Doador doador) {
        DoadorEntity doadorEntity =  new DoadorEntity(doador.getNome(), doador.getEmail(),doador.getSenha(), doador.getCpf(),doador.getTelefone(), doador.getDataDeNascimento(), doador.getId());
        return doadorEntity;
    }

    public static Doador deEntityParaDomain(DoadorEntity doadorEntity) {
        Doador doador = new Doador(doadorEntity.getNome(), doadorEntity.getEmail(),doadorEntity.getSenha(), doadorEntity.getCpf(),doadorEntity.getTelefone(), doadorEntity.getDataDeNascimento(), doadorEntity.getId());
        return doador;
    }

    public static Doador deDtoParaDomain(DoadorDto dto) {
        Doador doador = new Doador(dto.nome(), dto.email(),dto.senha(), dto.cpf(),dto.telefone(), dto.dataDeNascimento(), dto.id());
        return doador;
    }

    public static DoadorDto deDomainParaDto(Doador doadorResponse) {
        DoadorDto doador = new DoadorDto(doadorResponse.getNome(), doadorResponse.getEmail(),doadorResponse.getSenha(), doadorResponse.getCpf(),doadorResponse.getTelefone(), doadorResponse.getDataDeNascimento(), doadorResponse.getId());
        return doador;
    }
}
