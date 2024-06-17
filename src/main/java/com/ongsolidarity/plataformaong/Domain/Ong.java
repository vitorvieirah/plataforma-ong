package com.ongsolidarity.plataformaong.Domain;

import com.ongsolidarity.plataformaong.Dto.OngDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Data
@AllArgsConstructor
public class Ong {
    private String nomeFantasia, nomeEmpresarial, nomeDono, facebook, senha, instagram, x, tikTok, telefone, whatsApp, endereco, siteOng, pix, agencia, nroConta, sobreNos, cnpj, tipoUsuario, pathImagem;
    private Long id;

    public void alterarInfos(OngDto dto) {
        this.nomeFantasia = dto.nomeFantasia();
        this.nomeEmpresarial = dto.nomeEmpresarial();
        this.nomeDono = dto.nomeDono();
        this.facebook = dto.facebook();
        this.senha = dto.senha();
        this.instagram = dto.instagram();
        this.x = dto.x();
        this.tikTok = dto.tikTok();
        this.telefone = dto.telefone();
        this.whatsApp = dto.whatsApp();
        this.endereco = dto.endereco();
        this.siteOng = dto.siteOng();
        this.pix = dto.pix();
        this.agencia = dto.agencia();
        this.nroConta = dto.nroConta();
        this.sobreNos = dto.sobreNos();
        this.cnpj = dto.cnpj();
    }
}
