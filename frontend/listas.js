document.addEventListener("DOMContentLoaded", () => {
    fetchLists();
});

let selectedList = null;

async function fetchLists() {
    try {
        const response = await fetch("http://localhost:8000/api/lista/");
        const lists = await response.json();
        const listButtons = document.getElementById("list-buttons");
        listButtons.innerHTML = "";  

        lists.forEach(list => {
            let btn = document.createElement("button");
            btn.textContent = list.name;
            btn.onclick = () => selectList(list);
            listButtons.appendChild(btn);
        });
    } catch (error) {
        console.error("Erro ao carregar listas", error);
    }
}

async function selectList(list) {
    selectedList = list.id;
    document.getElementById("list-title").textContent = list.name;
    
    try {
        const response = await fetch(`http://localhost:8000/api/tarefas/?listas=${selectedList}`);
        const tasks = await response.json();
        const taskBox = document.getElementById("task-box");
        taskBox.innerHTML = "";
        
        tasks.forEach(task => {
            let taskDiv = document.createElement("div");
            taskDiv.innerHTML = `<p>${task.description}</p><p>Status: ${task.status}</p>`;
            taskBox.appendChild(taskDiv);
        });

        taskBox.innerHTML += `
            <div class="add-task">
                <input type="text" id="new-task-desc" placeholder="Descrição da tarefa" />
                <select id="new-task-status">
                    <option value="pendente">Pendente</option>
                    <option value="concluída">Concluída</option>
                </select>
                <button onclick="addNewTask()">Adicionar Tarefa</button>
            </div>
        `;

    } catch (error) {
        console.error("Erro ao carregar tarefas", error);
    }
}

async function addNewList() {
    const newListName = prompt("Digite o nome da nova lista:");
    if (newListName) {
        try {
            await fetch("http://localhost:8000/api/lista/", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newListName })
            });
            fetchLists();
        } catch (error) {
            console.error("Erro ao adicionar lista", error);
        }
    }
}

async function addNewTask() {
    const desc = document.getElementById("new-task-desc").value;
    const status = document.getElementById("new-task-status").value;

    if (desc && selectedList) {
        try {
            await fetch("http://localhost:8000/api/tarefas/", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    description: desc,
                    list_id: selectedList,
                    status: status
                })
            });
            selectList({ id: selectedList, name: document.getElementById("list-title").textContent }); 
        } catch (error) {
            console.error("Erro ao adicionar tarefa", error);
        }
    }
}

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