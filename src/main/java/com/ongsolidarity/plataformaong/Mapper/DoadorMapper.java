package com.ongsolidarity.plataformaong.Mapper;

import com.ongsolidarity.plataformaong.Domain.Doador;
import com.ongsolidarity.plataformaong.Dto.DoadorDto;
import com.ongsolidarity.plataformaong.Entity.DoadorEntity;

public class DoadorMapper {
    public static DoadorEntity deDomainParaEntity(Doador doador) {
        DoadorEntity doadorEntity =  new DoadorEntity(doador.getNome(), doador.getEmail(),doador.getSenha(), doador.getCpf(),doador.getTelefone(), doador.getPathImagemPerfil(), doador.getTipoUsuario(), doador.getDataDeNascimento(), doador.getId());
        return doadorEntity;
    }

    public static Doador deEntityParaDomain(DoadorEntity doadorEntity) {
        Doador doador = new Doador(doadorEntity.getNome(), doadorEntity.getEmail(),doadorEntity.getSenha(), doadorEntity.getCpf(),doadorEntity.getTelefone(), doadorEntity.getPathImagemPerfil(), doadorEntity.getTipoUsuario(), doadorEntity.getDataDeNascimento(), doadorEntity.getId());
        return doador;
    }

    public static Doador deDtoParaDomain(DoadorDto dto) {
        Doador doador = new Doador(dto.nome(), dto.email(),dto.senha(), dto.cpf(),dto.telefone(), null, dto.tipoUsuario(), dto.dataDeNascimento(), dto.id());
        return doador;
    }

    public static DoadorDto deDomainParaDto(Doador doadorResponse) {
        DoadorDto doador = new DoadorDto(doadorResponse.getNome(), doadorResponse.getEmail(),doadorResponse.getSenha(), doadorResponse.getCpf(),doadorResponse.getTelefone(), doadorResponse.getDataDeNascimento(), null, doadorResponse.getTipoUsuario(), doadorResponse.getId());
        return doador;
    }
}
