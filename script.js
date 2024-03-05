let itens = [];

function If() {
    let titleElement = document.getElementById('title');
    if (itens.length > 0) {
        titleElement.innerHTML = "Tarefas - " + itens.length;
    } else {
        titleElement.innerHTML = "Não há tarefas a fazer";
        console.log(itens);
    }
}

function Tasks() {
    let body = document.getElementById('main');
    let div = document.createElement('div');
    let div0 = document.createElement('footer');

    document.getElementById('click').addEventListener("click", function () {
        let inputValue = document.getElementById('name').value;
        if (inputValue.trim() !== "") {
            itens.push(inputValue);
            console.log(itens);
            updateTasks();
        }
    });

    function updateTasks() {
        
        div.innerHTML = "";
        

        // Adicionar novos elementos
        for (let i = 0; i < itens.length; i++) {
            let taskElement = document.createElement('div');
            let taskText = document.createElement('p');
            let updateButton = document.createElement('button');
            let deleteButton = document.createElement('button');

            taskText.textContent = itens[i];
            updateButton.textContent = "Atualizar";
            deleteButton.textContent = "Excluir";

            updateButton.addEventListener("click", function () {
                let updatedValue = prompt("Atualizar tarefa:", itens[i]);
                if (updatedValue !== null) {
                    itens[i] = updatedValue;
                    updateTasks();
                }
            });

            deleteButton.addEventListener("click", function () {
                itens.splice(i, 1);
                updateTasks();
            });

            taskElement.appendChild(taskText);
            taskElement.appendChild(updateButton);
            taskElement.appendChild(deleteButton);
            div.appendChild(taskElement);
        }

        // Atualizar contagem no título
        If();
    }

    body.append(div);
    body.append(div0);
}

document.addEventListener("DOMContentLoaded", function () {
    If();
    Tasks();
});
