package com.ongsolidarity.plataformaong.Controller;

import com.ongsolidarity.plataformaong.Dto.OngDto;
import com.ongsolidarity.plataformaong.Service.OngService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/Ongs")
@AllArgsConstructor

public class OngController {
    private OngService ongService;
    @PostMapping
    public ResponseEntity<OngDto> cadastrar(@RequestBody OngDto dto, UriComponentsBuilder uriBuilder){
        OngDto response = ongService.cadastrar(dto);
        var uri = uriBuilder.path("/Ongs/{id}").buildAndExpand(response.id()).toUri();
        return ResponseEntity.created(uri).body(response);
    }

    @GetMapping
    public ResponseEntity<List<OngDto>> consultarTodos(){
        return ResponseEntity.ok(ongService.consultarTodos());
    }

    @GetMapping(value = "/consultarPorId/{cnpj}")
    public ResponseEntity<OngDto> consultarPorId(@PathVariable("cnpj") String cnpj){
        return ResponseEntity.ok(ongService.consultarPorId(cnpj));
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<OngDto> modificar(@RequestBody OngDto dto, @PathVariable("id") Long id) {
        OngDto response = ongService.modificar(dto, id);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> deletar (@PathVariable("id") Long id){
        ongService.deletar(id);
        return ResponseEntity.noContent().build();
    }

}
