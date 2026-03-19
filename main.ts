input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    console.log(":)")
    let soll = 0
})
function on_pin_pressed_A() {
    console.log("A")
    let soll = 100
}

input.buttonIsPressed(Button.A)
let ist = 0
let time = input.runningTime()
function ramp(soll: number, grad: number): number {
    let dval: number;
    
    let dt = (input.runningTime() - time) * grad
    if (ist < soll) {
        dval = soll * dt / 1000
        ist += dval
    } else {
        // print(ist)
        ist = soll
    }
    
    return Math.min(ist, soll)
}

let soll = 100
basic.forever(function on_forever() {
    
    let val = ramp(soll, 0.2)
    // print(val)
    basic.pause(200)
})
