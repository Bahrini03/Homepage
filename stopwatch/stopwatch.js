let interval
let clock = 0
function start() {
    if (interval == undefined) {
        interval = setInterval(clockincrease, 10)
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
    stopwatch.textContent = formattime(clock)
}
function clockincrease() {
    clock = clock + 1
    print()
}
function reset() {
    clock = 0
    clearInterval(interval)
    interval = undefined
    print()
}
function formattime(milliseconds) {
    let seconds = 0
    let minutes = 0
    let hours = 0

    seconds = Math.floor(milliseconds / 100)
    minutes = Math.floor(seconds / 60)
    hours = Math.floor(minutes / 60)
    return hours + ":" + formatnumber(minutes % 60) + ":" +formatnumber(seconds % 60)+ ":" +formatnumber(milliseconds % 100)
}
function formatnumber(num){
    return  String(num).padStart(2,"0")

}