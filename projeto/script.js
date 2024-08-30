document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.querySelector("#bookingForm");

    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Agendamento realizado com sucesso!");
        // Aqui você pode adicionar lógica para enviar os dados ao servidor
    });
});
