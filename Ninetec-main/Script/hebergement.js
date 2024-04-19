$(document).ready(function () {
    $(".select").click(function (e) {
        $(this).children(".option").toggleClass("shown");
        $(this).toggleClass("open");
    });

    $(".option").click(function () {
        $(this).siblings("#selected").html($(this).html().split("</p>")[0]);
        /*Obtiene el html de #selected y lo cambia por la primera línea del
        elemento que se ha seleccionado [$(this)]
        $(this).html extrae el html del contenido y luego lo separa
        en un arreglo con split(), usando los <br> como delimitadores, por lo
        que obtenemos un arreglo con dos valores: a[0] = Opción X y a[1] = descripción
        */
    });

    /*Aquí emulamos el input.value de Javascript*/
    $("input").click(function () {
        var selection = $("#selected").html();
        alert(selection);
    });
});