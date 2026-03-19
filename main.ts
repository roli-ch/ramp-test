input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    soll = 0
    console.log("A soll: " + soll)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    soll = 100
    console.log("B soll: " + soll)
})
function ramp(soll: number, grad: number): number {
    
    let dt = (input.runningTime() - time) / 1000
    time = input.runningTime()
    let dval = soll * dt * grad
    if (ist < soll) {
        ist += dval
    } else {
        //  print(ist)
        ist = soll
    }
    
    // print("soll: " + soll + "; ist: " + ist + "; dval: " +dval+ "; dt: " + dt)
    return Math.min(ist, soll)
}

let val = 0
let ist = 0
let soll = 100
let time = input.runningTime()
input.buttonIsPressed(Button.A)
time = input.runningTime()
basic.forever(function on_forever() {
    
    val = ramp(soll, 0.5)
    if (soll != ist) {
        console.log("soll: " + soll + "; ist: " + ist + "; val: " + val)
    }
    
    basic.pause(200)
})
