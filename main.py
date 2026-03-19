

def ramp(soll: number, grad: number):
    global dt, ist
    dt = (input.running_time() - time) * grad
    if ist < soll:
        dval = soll * dt / 1000
        ist += dval
    else:
        # print(ist)
        ist = soll
    return min(ist, soll)

def on_button_pressed_a():
    global soll
    print("A")
    soll = 100
input.on_button_pressed(Button.A, on_button_pressed_a)

val = 0
ist = 0
dt = 0
soll2 = 0
time = 0
soll3 = 0
input.button_is_pressed(Button.A)
time = input.running_time()
soll32 = 100

def on_forever():
    global val
    val = ramp(soll32, 0.2)
    # print(val)
    basic.pause(200)
basic.forever(on_forever)
