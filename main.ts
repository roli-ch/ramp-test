input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    
})
let ist = 0
let time = input.runningTime()
function ramp(soll: number, grad: number): number {
    let dval: number;
    
    let dt = input.runningTime() - time
    time = input.runningTime()
    if (ist < soll) {
        dval = soll * dt / 1000
        ist += dval
    } else {
        // print(ist)
        ist = soll
    }
    
    return ist
}

let soll = 100
basic.forever(function on_forever() {
    let val = ramp(soll, 1)
    console.log(val)
    basic.pause(200)
})
