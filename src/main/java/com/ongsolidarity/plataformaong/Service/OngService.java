package com.ongsolidarity.plataformaong.Service;

import com.ongsolidarity.plataformaong.DataProvider.OngDataProvider;
import com.ongsolidarity.plataformaong.Domain.Ong;
import com.ongsolidarity.plataformaong.Dto.OngDto;
import com.ongsolidarity.plataformaong.Mapper.OngMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor

public class OngService {
    private OngDataProvider dataProvider;
    public OngDto cadastrar(OngDto dto) {
        Ong ong = OngMapper.deDtoParaDomain(dto);
        if(!validarOng(ong)){
            return OngMapper.paraDto(dataProvider.salvar(ong));
        }else{
            throw new RuntimeException("Ong já existe!");
        }
    }

    public List<OngDto> consultarTodos() {
        return OngMapper.paraDtoList(dataProvider.consultarTodos());
    }

    public OngDto consultarPorId(String cnpj) {
        Optional<Ong> ong = dataProvider.consultarPorCnpj(cnpj);
        if (ong.isPresent()){
            return OngMapper.paraDto(ong.get());
        }else{
            throw new RuntimeException("Ong não encontrada!");
        }
    }

    public OngDto modificar(OngDto dto, Long id) {
        Optional<Ong> ongOptional = dataProvider.consultarPorId(id);
        if (ongOptional.isPresent()){
            Ong ong = ongOptional.get();
            ong.alterarInfos(dto);
            return OngMapper.paraDto(dataProvider.salvar(ong));
        }else{
            throw new RuntimeException("Ong não encontrada!");
        }
    }

    public void deletar(Long id) {
        dataProvider.deletar(id);
    }

    private boolean validarOng(Ong ong){
        Optional<Ong> ongValidation = dataProvider.buscarPorCnpjNomeSenha(ong.getCnpj(), ong.getNomeEmpresarial(), ong.getSenha());
        return ongValidation.isEmpty();
    }
}
