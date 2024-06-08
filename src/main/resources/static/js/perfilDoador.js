document.addEventListener('DOMContentLoaded', function() {
    const editarBtn = document.getElementById('editar-btn');
    const salvarBtn = document.getElementById('salvar-btn');
    const inputs = document.querySelectorAll('.info-perfil input');

    editarBtn.addEventListener('click', function() {
        inputs.forEach(input => {
            input.removeAttribute('readonly');
            input.style.backgroundColor = 'white';
            input.style.border = '1px solid #ccc';
        });
        editarBtn.style.display = 'none';
        salvarBtn.style.display = 'inline-block';
    });

    salvarBtn.addEventListener('click', function() {
        inputs.forEach(input => {
            input.setAttribute('readonly', 'true');
            input.style.backgroundColor = 'transparent';
            input.style.border = 'none';
        });
        salvarBtn.style.display = 'none';
        editarBtn.style.display = 'inline-block';
    });
});
