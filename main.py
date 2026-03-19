def on_pin_pressed_p0():
    pass
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

ist = 0
time = input.running_time()

def ramp(soll, grad):
    global ist, time
    dt =  (input.running_time() - time) * grad
    time = input.running_time()

    if ist < soll:
        dval = soll * dt / 1000
        ist += dval
         #print(ist)
    else:
        ist = soll

    return min(ist,soll)

soll = 100

def on_forever():
    val = ramp(soll, 0.2)
    print(val)
    basic.pause(200)
basic.forever(on_forever)
