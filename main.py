def on_pin_pressed_p0():
    print(":)")
    soll = 0
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_pin_pressed_A():
    print("A")
    soll = 100
input.button_is_pressed(Button.A)

ist = 0
time = input.running_time()

def ramp(soll, grad):
    global ist, time
    dt =  (input.running_time() - time) * grad

    if ist < soll:
        dval = soll * dt / 1000
        ist += dval
         #print(ist)
    else:
        ist = soll
    return min(ist,soll)

soll = 100

def on_forever():
    global soll

    val = ramp(soll, 0.2)
    #print(val)
    basic.pause(200)
basic.forever(on_forever)
