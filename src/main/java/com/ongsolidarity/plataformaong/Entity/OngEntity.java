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
    private String nomeFantasia, nomeEmpresarial, nomeDono, facebook, senha, instagram, tikTok, telefone, whatsApp, endereco, pix, agencia, nroConta, sobreNos, cnpj, tipoUsuario;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String imagem;
}
