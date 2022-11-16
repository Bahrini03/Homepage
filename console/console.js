function action() {
    // for (let i = 0; i < 5; i++) {
    //     console.log(i, "    ")
    // }

    let hoch = ""
    for (let s = 0; s < 5; s++) {
        console.log(s, hoch)
        hoch = hoch + "*"
    }

    let zahl = 1;
    for (let s = 0; s < 10; s++) {
        zahl = zahl + zahl;
        console.log(zahl);
    }
}

function ref() {
    console.log(0, "    ")
    console.log(1, "*   ")
    console.log(2, "**  ")
    console.log(3, "*** ")
    console.log(4, "****")
}
