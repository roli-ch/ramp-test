//  Ramp-Test
//  =============
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    soll1 = 0
    soll2 = 20
    console.log("A soll: " + soll1 + " ist: " + ist1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    soll1 = 100
    soll2 = 80
    console.log("B soll: " + soll1 + " ist: " + ist1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    console.log("Touch")
    testA(1)
})
function ramp(soll: number, ist: number, time: number, grad: number, kreis: number): number[] {
    // global ist1, time1
    // print("ramp:"+kreis)
    // val = 0
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
    
    // print("Kreis" + kreis+ "; soll: " + soll + "; ist: " + ist + "; dval: " +dval+ "; dt: " + dt)
    return [ist, time]
}

function testA(nr: number) {
    let num = ist_array[nr]
    // num = myA[0]
    console.log(num)
}

let maxVal = 100
let minVal = 0
let soll1 = 100
let ist1 = 0
let time1 = input.runningTime()
let soll2 = 100
let ist2 = 0
let time2 = input.runningTime()
let ist_array = [0, 1]
// istA = [100, 200, 300]
// ist = 0
// kreis = 1
// timeA = [input.running_time(),input.running_time()]
basic.forever(function on_forever() {
    let showOk: boolean;
    
    let ___tempvar8 = ramp(soll1, ist1, time1, 1, 1)
    ist1 = ___tempvar8[0]
    time1 = ___tempvar8[1]
    let ___tempvar9 = ramp(soll2, ist2, time2, 0.5, 2)
    ist2 = ___tempvar9[0]
    time2 = ___tempvar9[1]
    // ramp(soll2, 0.5, 1)
    // val = ramp(soll1, 0.5, 1)
    let ok = soll1 == ist1 && soll2 == ist2
    if (!ok) {
        
        // print("soll1: " + soll1 + "; ist1: " + ist1)
        // print("soll2: " + soll1 + "; ist2: " + ist2 )
        console.log("soll1: " + soll1)
        console.log("ist1: " + ist1)
        console.log("soll2: " + soll2)
        console.log("ist2: " + ist2)
    } else {
        showOk = true
    }
    
    basic.pause(100)
})
