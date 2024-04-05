$("#btnProgramacaoUnica").on("click", function () {
    $("#multiCollapseExample2").collapse("hide");
    $("#multiCollapseExample1").collapse("show");
});

$("#btnProgramacaoLote").on("click", function () {
    $("#multiCollapseExample1").collapse("hide");
    $("#multiCollapseExample2").collapse("show");
});

$("#btnAmbosCadastros").on("click", function () {
    $("#multiCollapseExample1").collapse("show");
    $("#multiCollapseExample2").collapse("show");
});

