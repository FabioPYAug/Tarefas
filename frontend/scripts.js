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


document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const inputTarefa = document.getElementById("InputTarefa");
    const listaFazer = document.getElementById("ListaFazer");
    const listaFeita = document.getElementById("ListaFeita");

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        adicionarTarefa(inputTarefa.value);
        inputTarefa.value = "";
    });

    function adicionarTarefa(tarefa) {
        if (tarefa.trim() === "") return;
    
        const li = document.createElement("li");
        li.textContent = tarefa;
    
        const divBotoes = document.createElement("div");
        divBotoes.classList.add("action-buttons");
    
        const btnConcluir = document.createElement("button");
        btnConcluir.innerHTML = "Concluir";
        btnConcluir.classList.add("btn-concluir");
        btnConcluir.addEventListener("click", () => moverParaFeito(li));
    
        const btnExcluir = document.createElement("button");
        btnExcluir.innerHTML = "Apagar";
        btnExcluir.classList.add("btn-excluir");
        btnExcluir.addEventListener("click", () => li.remove());
    
        divBotoes.appendChild(btnConcluir);
        divBotoes.appendChild(btnExcluir);
    
        li.appendChild(divBotoes);
        listaFazer.appendChild(li);
    }
    

    function moverParaFeito(tarefa) {
        tarefa.querySelector(".btn-concluir").remove();
        listaFeita.appendChild(tarefa);
    }
});