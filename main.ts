function ramp(soll: number, grad: number): number {
    let dval: number;
    
    dt = (input.runningTime() - time) * grad
    if (ist < soll) {
        dval = soll * dt / 1000
        ist += dval
    } else {
        //  print(ist)
        ist = soll
    }
    
    return Math.min(ist, soll)
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    console.log("A")
    let soll = 100
})
let val = 0
let ist = 0
let dt = 0
let soll2 = 0
let time = 0
let soll3 = 0
input.buttonIsPressed(Button.A)
time = input.runningTime()
let soll32 = 100
basic.forever(function on_forever() {
    
    val = ramp(soll32, 0.2)
    //  print(val)
    basic.pause(200)
})
