let data = {
    tasks: [],
}
window.onload = load

function add() {
    let inputelement = document.getElementById("todotext")

    if (inputelement.value < 1) return;

    let task = {
        id: Date.now(),
        text: inputelement.value,
        done: false,
    }
    attachTodo(task.id, task.text)

    data.tasks.push(task)

    inputelement.value = "";
    save()
}

function attachTodo(id, text) {
    let item = document.createElement("div")
    // item.setAttribute('data-id', id)
    item.dataset.id = id

    let removebutton = document.createElement("button")
    removebutton.textContent = "Delete"
    removebutton.addEventListener("click", remove)

    let itemlabel = document.createElement("label")
    itemlabel.innerHTML = text

    let inputcheckbox = document.createElement("input")
    inputcheckbox.addEventListener("change", toggledone)
    inputcheckbox.type = "checkbox"

    item.appendChild(inputcheckbox)
    item.appendChild(itemlabel)
    item.appendChild(removebutton)

    let contentelement = document.getElementById("content")
    contentelement.appendChild(item)
}

function toggledone(event) {
    let inputcheckbox = event.target
    let item = inputcheckbox.parentElement
    item.classList.toggle("done")
}

function clearAll() {
    document.getElementById("content").innerHTML = ""
    data.tasks = []
    save()
}
function remove(event) {
    let button = event.target
    let item = button.parentElement
    item.remove()
    data.tasks = data.tasks.filter(function (task) {
        if (task.id == item.dataset.id) {
            return false;
        }
        return true;
    })
    save()
}

function save() {
    localStorage.setItem("savedata", JSON.stringify(data));
}
function load() {
    console.log('load')
    data = JSON.parse(localStorage.getItem("savedata"));
    for (let i = 0; i < data.tasks.length; i++) {
        let task = data.tasks.at(i)
        attachTodo(task.id, task.text)
    }
}