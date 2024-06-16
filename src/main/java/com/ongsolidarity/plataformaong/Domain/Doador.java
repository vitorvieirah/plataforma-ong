package com.ongsolidarity.plataformaong.Domain;

import com.ongsolidarity.plataformaong.Dto.DoadorDto;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class Doador {
    private String nome, email, senha, cpf, telefone, pathImagemPerfil, tipoUsuario;
    private LocalDate dataDeNascimento;
    private Long id;

    public void alterarDoador(DoadorDto dto){
        this.nome = dto.nome();
        this.email = dto.email();
        this.senha = dto.senha();
        this.cpf = dto.cpf();
        this.telefone = dto.telefone();
        this.dataDeNascimento = dto.dataDeNascimento();
    }
}
