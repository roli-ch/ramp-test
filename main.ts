input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    let soll = 0
    console.log("A soll: " + soll + " ist: " + ist1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    let soll = 100
    console.log("B soll: " + soll + " ist: " + ist1)
})
function ramp(soll: number, grad: number, kreis: number): number {
    let time: number;
    let ist: number;
    
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

let maxVal = 100
let minVal = 0
let soll1 = 100
let ist1 = 0
let kreis1 = 1
let time1 = input.runningTime()
basic.forever(function on_forever() {
    let showOk: boolean;
    
    let val = ramp(soll1, 0.2, 1)
    let ok = soll1 == ist1
    if (!ok) {
        
        console.log("soll1: " + soll1 + "; ist1: " + ist1)
    } else {
        showOk = true
    }
    
    basic.pause(200)
})
