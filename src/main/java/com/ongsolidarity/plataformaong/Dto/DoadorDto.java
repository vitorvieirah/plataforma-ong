package com.ongsolidarity.plataformaong.Dto;

import java.time.LocalDate;

public record  DoadorDto (String nome, String email, String senha, String cpf, String telefone, LocalDate dataDeNascimento, Long id) {

}

