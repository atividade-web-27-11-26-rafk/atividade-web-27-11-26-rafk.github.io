let adicionar = document.querySelector("#adicionar");
let listar_tarefas = document.querySelector("#lista_tarefas");
let input_titulo = document.querySelector("#input_titulo");
let input_descricao = document.querySelector("#input_descricao")

let tarefas = []
let proximo_id = 0

function apagar_tarefa(id){
    tarefas = tarefas.filter(function(tarefa){
        return tarefa.id !== id;
    })
    mostrar_tarefas();
}

function mostrar_tarefas(){
    listar_tarefas.innerHTML = "";

    tarefas.forEach(function(tarefa){
        const div = document.createElement("div");

        const titulo = document.createElement("h2");
        titulo.textContent = tarefa.titulo;

        const descricao = document.createElement("p");
        descricao.textContent = tarefa.descricao;

        const botao_apagar = document.createElement("button");
        botao_apagar.addEventListener("click", function(){
            apagar_tarefa(tarefa.id)
        })
        botao_apagar.textContent = "Apagar"

        div.appendChild(titulo);
        div.appendChild(descricao);
        div.appendChild(botao_apagar)
        listar_tarefas.appendChild(div);
    })
}

adicionar.addEventListener("click", function(e){
    if(input_titulo.value.trim().length > 0){
        tarefas.push({
            id: proximo_id,
            titulo: input_titulo.value.trim(),
            descricao: input_descricao.value.trim()
        });
        proximo_id = proximo_id + 1;
        mostrar_tarefas();
    }else{
        // aviso que tem que colocar um titulo.
    }
})