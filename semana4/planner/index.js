function addItem() {
    const myTask = document.getElementById("tarefa")
    return myTask.value
}

function addHour() {
    const myHour = document.getElementById("dia-hora")
    return myHour.value
}

function clickButton(){
    if (`${addItem()}` !== ""){
        
        const task = document.getElementById(dayOfWeek())
        task.innerHTML += `<li id="item" onclick="strikeOut()">${addItem()} - ${addHour()}</li>`
        
        const myTask = document.getElementById("tarefa")
        myTask.value =""
    }
    else alert("Digite alguma tarefa, por favor.")
}

function dayOfWeek(){
    const day = document.getElementById("dias-semana")
    return day.value
}

function cleanAll(){
    const item_clean = document.getElementsByClassName("semana-lista")
    for (let i = 0; i < item_clean.length; i++){
        item_clean[i].innerHTML = ""
    }
}

function strikeOut(){
    const item_strike = document.getElementById("item")
    item_strike.style.textDecoration = "line-through";
}
