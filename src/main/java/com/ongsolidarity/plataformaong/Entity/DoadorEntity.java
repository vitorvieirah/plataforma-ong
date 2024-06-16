package com.ongsolidarity.plataformaong.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Entity(name = "Doador")
@Table(name = "Doadores")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DoadorEntity {
    private String nome, email, senha, cpf, telefone;
    private LocalDate dataDeNascimento;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

}
