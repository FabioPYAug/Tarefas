var taskInput = document.getElementById("InputTarefa");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("ListaFazer");
var completedTasksHolder = document.getElementById("ListaFeita");

document.addEventListener("DOMContentLoaded", function () {
    var botaoNoturno = document.getElementById("modonoturno");
    var body = document.body;

    if (localStorage.getItem("modoNoturno") === "ativado") {
        body.classList.add("dark-mode");
    }

    botaoNoturno.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("modoNoturno", "ativado");
        } else {
            localStorage.setItem("modoNoturno", "desativado");
        }
    });
});
