$(document).ready(function () {
    // Obtém o ID da URL
    const urlParams = new URLSearchParams(window.location.search);
    const animaisId = urlParams.get("id");
    // Carrega o animal
    $.get(`http://localhost:3000/animais/${animaisId}`, function (data) {
        $("#raca").val(data.raca);
        $("#tipo").val(data.tipo);
        $("#caracteristicas").val(data.caracteristicas);
    });
    // Atualiza o animal
    $("#editForm").submit(function (event) {
        event.preventDefault();
        const formValues = {
            raca: $("#raca").val(),
            tipo: $("#tipo").val(),
            caracteristicas: $("#caracteristicas").val()
        };
        $.ajax({
            url: `http://localhost:3000/animais/${animaisId}`,
            type: "PUT",
            data: JSON.stringify(formValues),
            contentType: "application/json",
            success: function () {
                $("#result").text("Animal atualizado com sucesso!");
            },
            error: function () {
                alert("Erro ao atualizar o animal.");
            }
        });
    });
});