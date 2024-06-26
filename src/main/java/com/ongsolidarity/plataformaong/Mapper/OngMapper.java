package com.ongsolidarity.plataformaong.Mapper;

import com.ongsolidarity.plataformaong.Domain.Ong;
import com.ongsolidarity.plataformaong.Dto.OngDto;
import com.ongsolidarity.plataformaong.Entity.OngEntity;

import java.util.List;

public class OngMapper {
    public static Ong deDtoParaDomain(OngDto dto) {
        Ong ong = new Ong(dto.nomeFantasia(), dto.nomeEmpresarial(), dto.nomeDono(), dto.facebook(), dto.senha(),
                dto.instagram(), dto.x(), dto.tikTok(), dto.telefone(), dto.whatsApp(), dto.endereco(), dto.siteOng(), dto.pix(), dto.agencia(),
                dto.nroConta(), dto.sobreNos(), dto.cnpj(), dto.tipoUsuario(), dto.pathImagem() ,dto.id());
        return ong;
    }

    public static OngDto paraDto(Ong ong) {
        OngDto dto = new OngDto(ong.getNomeFantasia(), ong.getNomeEmpresarial(), ong.getNomeDono(), ong.getFacebook(), ong.getSenha(), ong.getInstagram(), ong.getTikTok(), ong.getX() ,ong.getTelefone(), ong.getWhatsApp(), ong.getEndereco(), ong.getSiteOng(),ong.getPix(), ong.getAgencia(), ong.getNroConta(), ong.getSobreNos(), ong.getCnpj(), ong.getTipoUsuario(), ong.getId(), ong.getPathImagem());
        return dto;
    }

    public static List<OngDto> paraDtoList(List<Ong> ongs) {
        return ongs.stream().map(OngMapper::paraDto).toList();
    }

    public static OngEntity deDomainParaEntity(Ong ong){
        return new OngEntity(ong.getNomeFantasia(), ong.getNomeEmpresarial(), ong.getNomeDono(), ong.getFacebook(), ong.getSenha(), ong.getInstagram(), ong.getX(), ong.getTikTok(), ong.getTelefone(), ong.getWhatsApp(), ong.getEndereco(), ong.getSiteOng(), ong.getPix(), ong.getAgencia(), ong.getNroConta(), ong.getSobreNos(), ong.getCnpj(), ong.getTipoUsuario(), ong.getPathImagem() ,ong.getId());
    }

    public static List<Ong> deOngEntityListParaOngList(List<OngEntity> ongEntityList) {
        return ongEntityList.stream().map(OngMapper::deEntityParaDomain).toList();
    }

    public static Ong deEntityParaDomain(OngEntity ongEntity){
        return new Ong(ongEntity.getNomeFantasia(), ongEntity.getNomeEmpresarial(), ongEntity.getNomeDono(), ongEntity.getFacebook(), ongEntity.getSenha(), ongEntity.getInstagram(), ongEntity.getX(), ongEntity.getTikTok(), ongEntity.getTelefone(), ongEntity.getWhatsApp(), ongEntity.getEndereco(), ongEntity.getSiteOng(),ongEntity.getPix(), ongEntity.getAgencia(), ongEntity.getNroConta(), ongEntity.getSobreNos(), ongEntity.getCnpj(), ongEntity.getTipoUsuario(), ongEntity.getPathImagem(), ongEntity.getId());
    }
}
