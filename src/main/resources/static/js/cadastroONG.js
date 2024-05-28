

    function addBankInputs() {
        // Limpa a div antes de adicionar novos elementos
        dadosBancoDiv.innerHTML = '';

        // Cria o label e o input para Agência
        const agenciaLabel = document.createElement('label');
        agenciaLabel.setAttribute('for', 'agencia');
        agenciaLabel.textContent = 'Agência';
        const agenciaInput = document.createElement('input');
        agenciaInput.classList.add('inputs');
        agenciaInput.setAttribute('type', 'text');
        agenciaInput.setAttribute('id', 'agencia');

        // Cria o label e o input para Conta
        const contaLabel = document.createElement('label');
        contaLabel.setAttribute('for', 'conta');
        contaLabel.textContent = 'Conta';
        const contaInput = document.createElement('input');
        contaInput.classList.add('inputs');
        contaInput.setAttribute('type', 'text');
        contaInput.setAttribute('id', 'conta');

        // Adiciona os novos elementos à div dadosBanco
        dadosBancoDiv.appendChild(agenciaLabel);
        dadosBancoDiv.appendChild(agenciaInput);
        dadosBancoDiv.appendChild(document.createElement('br'));
        dadosBancoDiv.appendChild(contaLabel);
        dadosBancoDiv.appendChild(contaInput);
    }

