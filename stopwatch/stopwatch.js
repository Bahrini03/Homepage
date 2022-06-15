let interval
let clock = 0
function start() {
    if (interval == undefined) {
        interval = setInterval(clockincrease, 1000)
        print()
    }
}
function stop() {
    clearInterval(interval)
    interval = undefined
    print()
}
function print() {
    let stopwatch = document.getElementById("stopwatch")
    stopwatch.textContent = clock
}
function clockincrease() {
    clock = clock + 1
    print()
}
function reset () {
    clock= 0
    clearInterval(interval)
    interval = undefined
    print()
}