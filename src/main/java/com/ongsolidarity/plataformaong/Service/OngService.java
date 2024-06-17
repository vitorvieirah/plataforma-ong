package com.ongsolidarity.plataformaong.Service;

import com.ongsolidarity.plataformaong.DataProvider.OngDataProvider;
import com.ongsolidarity.plataformaong.Domain.Doador;
import com.ongsolidarity.plataformaong.Domain.Ong;
import com.ongsolidarity.plataformaong.Dto.OngDto;
import com.ongsolidarity.plataformaong.Mapper.OngMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor

public class OngService {
    private OngDataProvider dataProvider;
    private FileStorageService fileService;

    public OngDto cadastrar(OngDto dto) {
        Ong ong = OngMapper.deDtoParaDomain(dto);
        fileService = new FileStorageService("C:\\REPOSITÓRIOS\\plataforma-ong\\src\\main\\resources\\static\\img");
        if(validarOng(ong)){
            ong.setTipoUsuario("ONG");
            byte[] imagemBytes = Base64.getDecoder().decode(dto.pathImagem().split(",")[1]);
            MultipartFile imagemFile = new ByteArrayMultipartFile(imagemBytes, "imagemOng.jpeg");
            ong.setPathImagem(fileService.storeFile(imagemFile));
            return OngMapper.paraDto(dataProvider.salvar(ong));
        }else{
            throw new RuntimeException("Ong já existe!");
        }
    }

    public List<OngDto> consultarPorNome(String nome) {
        return OngMapper.paraDtoList(dataProvider.consultarPorNome(nome));
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

    public String consultarImagemPerfil(Long id) {
        Optional<Ong> ong = dataProvider.consultarPorId(id);
        if(ong.isEmpty()){
            throw new RuntimeException("Ong não encontrado");
        }else {
            return ong.get().getPathImagem();
        }
    }

    public List<OngDto> consultarTodos() {
        return OngMapper.paraDtoList(dataProvider.consultarTodos());
    }
}
