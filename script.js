
function adicionarTarefa(){
    let tarefaDigitada = document.getElementById("tarefa").value
    let tarefaCriada = document.createElement( "p" )
    tarefaCriada.textContent = tarefaDigitada
    tarefaCriada.className = "tarefaNoBrowser"
    document.getElementById("container").appendChild(tarefaCriada)
    document.getElementById("tarefa").value = ""
}

function darkmode(){
    let idButton = document.getElementById("darkButton").className

    if(idButton === "darkmode"){
        document.getElementById("darkButton").className = "cleanmode"
        document.body.style.backgroundColor = "black"
        document.getElementById("pButton").textContent = "Clean Mode"
    }else{
        document.getElementById("darkButton").className = "darkmode" 
        document.body.style.backgroundColor = "#e0e0e0"
        document.getElementById("pButton").textContent = "Dark Mode"
    }
}