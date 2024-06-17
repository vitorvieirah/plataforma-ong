package com.ongsolidarity.plataformaong.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "Ong")
@Table(name = "Ongs")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class OngEntity {
    private String nomeFantasia, nomeEmpresarial, nomeDono, facebook, senha, instagram, x, tikTok, telefone, whatsApp, endereco, siteOng, pix, agencia, nroConta, sobreNos, cnpj, tipoUsuario, pathImagem;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
