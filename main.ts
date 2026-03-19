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
    let maxOk = false
    let minOk = false
    let dt = (input.runningTime() - time) / 1000
    time = input.runningTime()
    let dval = maxVal * dt * grad
    if (ist > soll) {
        ist -= dval
    } else {
        maxOk = true
    }
    
    if (ist < soll) {
        ist += dval
    } else {
        minOk = true
    }
    
    // print("soll: " + soll + "; ist: " + ist + "; dval: " +dval+ "; dt: " + dt)
    if (maxOk) {
        console.log("maxOK")
        return maxVal
    } else if (minOk) {
        console.log("minOK")
        return minVal
    } else {
        console.log("ist")
        return ist
    }
    
}

function ramp1(soll: number, grad: number): number {
    
    let dt = (input.runningTime() - time) / 1000
    time = input.runningTime()
    let dval = soll * dt * grad
    if (ist > soll) {
        ist -= dval
    } else {
        ist = soll
    }
    
    // print("soll: " + soll + "; ist: " + ist + "; dval: " +dval+ "; dt: " + dt)
    return soll
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
    
    val = ramp(soll, 0.5)
    if (soll != ist) {
        
        console.log("soll: " + soll + "; ist: " + ist + "; val: " + val)
    }
    
    basic.pause(200)
})
