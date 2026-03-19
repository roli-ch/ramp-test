
def on_button_pressed_a():
    global soll
    soll = 0
    print("A soll: " + soll)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global soll
    soll = 100
    print("B soll: " + soll)
    
input.on_button_pressed(Button.B, on_button_pressed_b)

def ramp(soll, grad):
    global ist, time

    dt = (input.running_time() - time) / 1000
    time = input.running_time()
    dval = soll * dt * grad

    if ist < soll:      
        ist += dval
    else:
        # print(ist)
        ist = soll
    #print("soll: " + soll + "; ist: " + ist + "; dval: " +dval+ "; dt: " + dt)
    return min(ist, soll)



val = 0
ist = 0

soll = 100
time = input.running_time()
input.button_is_pressed(Button.A)
time = input.running_time()


def on_forever():
    global val, soll, ist

    val = ramp(soll, 0.5)
    if soll != ist:
        print("soll: " + soll + "; ist: " + ist + "; val: " +val)
    
    basic.pause(200)
basic.forever(on_forever)
