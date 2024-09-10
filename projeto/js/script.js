// Função para redirecionar para a página de agendamento com o serviço selecionado
function goToScheduling() {
    const service = document.getElementById('servico').value;
    if (service) {
        window.location.href = `agendamento.html?servico=${service}`;
    } else {
        alert('Por favor, selecione um serviço.');
    }
}

// Função para pegar o serviço da URL e exibir na página de agendamento
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const servico = params.get('servico');
    const selectedServiceElement = document.getElementById('selectedService');

    if (servico) {
        let serviceName;
        switch(servico) {
            case 'corte':
                serviceName = 'Corte de Cabelo';
                break;
            case 'barba':
                serviceName = 'Aparar a Barba';
                break;
            case 'corte-barba':
                serviceName = 'Corte e Barba';
                break;
            default:
                serviceName = '';
        }
        selectedServiceElement.innerText = `Serviço escolhido: ${serviceName}`;
    } else {
        window.location.href = 'index.html'; // Voltar para escolha de serviço se não houver serviço selecionado
    }
}
