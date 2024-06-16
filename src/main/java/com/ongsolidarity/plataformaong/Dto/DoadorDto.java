package com.ongsolidarity.plataformaong.Dto;

import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

public record  DoadorDto (String nome, String email, String senha, String cpf, String telefone, LocalDate dataDeNascimento, MultipartFile imagemPerfil, String tipoUsuario, Long id) {

}

