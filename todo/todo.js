
function add() {
    let inputelement = document.getElementById("todotext")
    attachTodo(inputelement.value)
    inputelement.value = "";
}

function attachTodo(text) {
    if (text.length < 1) return;

    let item = document.createElement("div")

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
}
function remove(event) {
    let button = event.target
    let item = button.parentElement
    item.remove()
}
