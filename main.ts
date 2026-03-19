input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    soll = 0
    console.log("A soll: " + soll + " ist: " + ist)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    soll = 100
    console.log("B soll: " + soll + " ist: " + ist)
})
function ramp(soll: number, grad: number): number {
    
    let val = 0
    // maxOk = False
    // minOk = False
    let dt = (input.runningTime() - time) / 1000
    time = input.runningTime()
    let dval = maxVal * dt * grad
    if (ist > soll) {
        ist -= dval
        if (ist < soll) {
            ist = soll
        }
        
    }
    
    if (ist < soll) {
        ist += dval
        if (ist > soll) {
            ist = soll
        }
        
    }
    
    // print("soll: " + soll + "; ist: " + ist + "; dval: " +dval+ "; dt: " + dt)
    return ist
}

let val = 0
let maxVal = 100
let minVal = 0
let ist = 0
let soll = 100
let time = input.runningTime()
input.buttonIsPressed(Button.A)
time = input.runningTime()
basic.forever(function on_forever() {
    let showOk: boolean;
    
    val = ramp(soll, 0.5)
    let ok = soll == ist
    if (!ok) {
        
        console.log("soll: " + soll + "; ist: " + ist + "; val: " + val)
    } else {
        showOk = true
    }
    
    basic.pause(200)
})
