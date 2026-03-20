
def on_button_pressed_a():
    global soll1
    soll = 0
    print("A soll: " + soll+ " ist: " + ist1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global soll1
    soll = 100
    print("B soll: " + soll+ " ist: " + ist1)  
input.on_button_pressed(Button.B, on_button_pressed_b)

def ramp(soll, grad, kreis):
    global ist1, time1, kreis1

    val = 0
    #maxOk = False
    #minOk = False
    dt = (input.running_time() - time) / 1000
    time = input.running_time()
    dval = maxVal * dt * grad
    if ist > soll:
        ist -= dval
        if ist < soll:
            ist = soll
    if ist < soll:
        ist += dval
        if ist > soll:
            ist = soll
    #print("soll: " + soll + "; ist: " + ist + "; dval: " +dval+ "; dt: " + dt)
    return ist

maxVal = 100
minVal = 0

soll1 = 100
ist1 = 0
kreis1 = 1
time1 = input.running_time()

def on_forever():
    global soll1, ist1

    val = ramp(soll1, 0.2, 1)
    ok = (soll1 == ist1)
    if not ok:
        pass
        print("soll1: " + soll1 + "; ist1: " + ist1)
    else:
        showOk = True
    
    basic.pause(200)
basic.forever(on_forever)
