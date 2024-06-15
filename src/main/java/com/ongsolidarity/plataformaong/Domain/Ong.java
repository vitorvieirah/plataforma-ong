package com.ongsolidarity.plataformaong.Domain;

import com.ongsolidarity.plataformaong.Dto.OngDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Data
@AllArgsConstructor
public class Ong {
    private String nomeFantasia, nomeEmpresarial, nomeDono, facebook, senha, instagram, tikTok, telefone, whatsApp, endereco, pix, agencia, nroConta, sobreNos, cnpj, tipoUsuario;
    private Long id;

    public void alterarInfos(OngDto dto) {
        this.nomeFantasia = dto.nomeFantasia();
        this.nomeEmpresarial = dto.nomeEmpresarial();
        this.nomeDono = dto.nomeDono();
        this.facebook = dto.facebook();
        this.senha = dto.senha();
        this.instagram = dto.instagram();
        this.tikTok = dto.tikTok();
        this.telefone = dto.telefone();
        this.whatsApp = dto.whatsApp();
        this.endereco = dto.endereco();
        this.pix = dto.pix();
        this.agencia = dto.agencia();
        this.nroConta = dto.nroConta();
        this.sobreNos = dto.sobreNos();
        this.cnpj = dto.cnpj();
    }
}
