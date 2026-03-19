
def on_button_pressed_a():
    global soll
    print("A")
    soll = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global soll
    print("B")
    soll = 100
input.on_button_pressed(Button.B, on_button_pressed_a)

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


val = 0
ist = 0
dt = 0
soll = 0
time = 0
input.button_is_pressed(Button.A)
time = input.running_time()


def on_forever():
    global val
    val = ramp(soll, 0.2)
    # print(val)
    basic.pause(200)
basic.forever(on_forever)
