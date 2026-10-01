$(document).ready(function () {
    // ==========================
    // LISTAR ANIMAIS (GET)
    // ==========================
    function carregarAnimais() {
        if ($("#animais").length) {
            $("#animais").html('<p class="status">Carregando animais...</p>');
            $.get("http://localhost:3000/animais", function (data) {
                $("#animais").empty().append('<header class="page-header"><div><p class="eyebrow">CATÁLOGO</p><h1>Listagem de Animais</h1><p class="subtitle">Conheça as espécies cadastradas e suas principais características.</p></div><a class="button button-primary" href="cadastro.html">Cadastrar animal</a></header><section class="animal-grid" aria-label="Animais cadastrados"></section>');
                const grid = $(".animal-grid");
                data.forEach(function (animal) {
                    grid.append(`
                        <article class="card-animal" id="animal-${animal.id}">
                        <span class="tipo">${animal.tipo || "Sem tipo"}</span>
                        <h3>${animal.raca}</h3>
                        <p>${animal.caracteristicas}</p>
                        <div class="card-actions"><button class="button button-secondary" onclick="editanimal(${animal.id})">Editar</button><button class="button button-danger" onclick="deleteanimal(${animal.id})">Excluir</button></div>
                    </article>
                `);
            });
            }).fail(function () {
                $("#animais").html('<div class="status status-error"><h1>Não foi possível carregar os animais.</h1><p>Verifique se a API está rodando em <strong>localhost:3000</strong> e tente novamente.</p><button class="button button-primary" onclick="carregarAnimais()">Tentar novamente</button></div>');
            });
        }
    }
    window.carregarAnimais = carregarAnimais;
    // ==========================
    // CADASTRAR (POST)
    // ==========================
    $("form").submit(function (event) {
        if ($("#cadastroForm").length) {
            event.preventDefault();
            const formValues = {
            tipo: $("#tipo").val(),
            raca: $("#raca").val(),
            caracteristicas: $("#caracteristicas").val()
        };
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/animais",
                data: JSON.stringify(formValues),
                contentType: "application/json"
            })
            .done(function () {
                $("#result").html("Registro salvo!");
                $("#cadastroForm")[0].reset();
            })
            .fail(function () {
                alert("Falha no POST");
            });
        }
    });
    // ==========================
    // EXCLUIR (DELETE)
    // ==========================
    window.deleteanimal = function (id) {
        $.ajax({
            url: `http://localhost:3000/animais/${id}`,
            type: "DELETE",
            success: function () {
                alert("Animal excluído com sucesso!");
                carregarAnimais();
            },
            error: function () {
                alert("Erro ao excluir o animal.");
            }
        });
    };
    // ==========================
    // EDITAR
    // ==========================
    window.editanimal = function (id) {
        window.location.href = `editar.html?id=${id}`;
    };
    // Carrega apenas se existir a div de animais
    carregarAnimais();
});