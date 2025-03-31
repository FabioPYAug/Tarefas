var taskInput = document.getElementById("InputTarefa");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("ListaFazer");
var completedTasksHolder = document.getElementById("ListaFeita");

document.addEventListener("DOMContentLoaded", function () {
    var botaoNoturno = document.getElementById("modonoturno");
    var icone = document.getElementById("iconeModo");
    var body = document.body;

    if (localStorage.getItem("modoNoturno") === "ativado") {
        body.classList.add("dark-mode");
        icone.classList.replace("fa-moon", "fa-sun");
    }

    botaoNoturno.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("modoNoturno", "ativado");
            icone.classList.replace("fa-moon", "fa-sun");
        } else {
            localStorage.setItem("modoNoturno", "desativado");
            icone.classList.replace("fa-sun", "fa-moon");
        }
    });
});

