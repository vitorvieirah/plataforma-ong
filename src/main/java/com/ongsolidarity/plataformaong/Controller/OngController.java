package com.ongsolidarity.plataformaong.Controller;

import com.ongsolidarity.plataformaong.Dto.FotoDto;
import com.ongsolidarity.plataformaong.Dto.OngDto;
import com.ongsolidarity.plataformaong.Service.OngService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/ongs")
@AllArgsConstructor

public class OngController {
    private OngService ongService;
    @PostMapping
    public ResponseEntity<OngDto> cadastrar(@RequestBody OngDto dto, UriComponentsBuilder uriBuilder){
        OngDto response = ongService.cadastrar(dto);
        var uri = uriBuilder.path("/ongs/{id}").buildAndExpand(response.id()).toUri();
        return ResponseEntity.created(uri).body(response);
    }

    @GetMapping
    public ResponseEntity<List<OngDto>> consultarTodos(){
        return ResponseEntity.ok(ongService.consultarTodos());
    }

    @GetMapping(value = "/consultar-por-cnpj/{cnpj}")
    public ResponseEntity<OngDto> consultarPorCnpj(@PathVariable("cnpj") String cnpj){
        return ResponseEntity.ok(ongService.consultarPorId(cnpj));
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<FotoDto> buscarPathImagens(@PathVariable Long id){
        String foto = ongService.consultarImagemPerfil(id).replace("C:\\REPOSITÓRIOS\\plataforma-ong\\src\\main\\resources\\static", "..");
        return ResponseEntity.ok(new FotoDto(foto));
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
