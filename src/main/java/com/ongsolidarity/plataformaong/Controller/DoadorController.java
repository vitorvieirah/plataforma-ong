package com.ongsolidarity.plataformaong.Controller;

import com.ongsolidarity.plataformaong.Domain.Doador;
import com.ongsolidarity.plataformaong.Dto.DoadorDto;
import com.ongsolidarity.plataformaong.Service.DoadorService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping ("/doadores")
@AllArgsConstructor

public class DoadorController {
    private DoadorService service;
    @PostMapping
    public ResponseEntity<DoadorDto> cadastrar(@RequestBody DoadorDto dto, UriComponentsBuilder uriBuilder){
        DoadorDto response = service.cadastrar(dto);
        var uri = uriBuilder.path("/doadores/{id}").buildAndExpand(response.id()).toUri();
        return ResponseEntity.created(uri).body(response);
    }

    @GetMapping (value = "{email}")
    public ResponseEntity<DoadorDto> buscarPorEmail(@PathVariable String email){
        DoadorDto response = service.buscarPorEmail(email);
        return ResponseEntity.ok(response);
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<DoadorDto> alterar(@PathVariable Long id, @RequestBody DoadorDto dto){
        DoadorDto response = service.alterar(id, dto);
        return ResponseEntity.ok(response);
    }
    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id){
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
