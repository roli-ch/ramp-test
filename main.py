# Ramp-Test
# =============

def on_button_pressed_a():
    global soll1, soll2
    soll1 = 0
    soll2 = 20
    print("A soll: " + soll1 + " ist: " + ist1 )
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global soll1, soll2
    soll1 = 100
    soll2 = 80
    print("B soll: " + soll1 + " ist: " + ist1 )  
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    print("Touch")
    testA(1)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def ramp(soll, ist, time, grad, kreis):
    #global ist1, time1
    #print("ramp:"+kreis)
    #val = 0
    #maxOk = False
    #minOk = False
    dt = (input.running_time() - time) / 1000
    time = input.running_time()
    dval = maxVal * dt * grad
    
    if ist > soll:
        ist -= dval
        if ist  < soll:
            ist = soll
    if ist  < soll:
        ist += dval
        if ist  > soll:
            ist = soll
    #print("Kreis" + kreis+ "; soll: " + soll + "; ist: " + ist + "; dval: " +dval+ "; dt: " + dt)
    return ist, time

def testA(nr):  
    num = ist_array[nr]
    #num = myA[0]
    print(num)

maxVal = 100
minVal = 0

soll1 = 100
ist1 = 0
time1 = input.running_time()

soll2 = 100
ist2 = 0
time2 = input.running_time()

ist_array = [0, 1]
#istA = [100, 200, 300]
#ist = 0

#kreis = 1
#timeA = [input.running_time(),input.running_time()]


def on_forever():
    global soll1, ist1, time1, soll2, ist2, time2
    
    ist1, time1 = ramp(soll1, ist1, time1, 1, 1)
    ist2, time2 = ramp(soll2, ist2, time2, 0.5, 2)
    #ramp(soll2, 0.5, 1)
    #val = ramp(soll1, 0.5, 1)
    ok = (soll1 == ist1) and (soll2 == ist2 )
    if not ok:
        pass
        #print("soll1: " + soll1 + "; ist1: " + ist1)
        #print("soll2: " + soll1 + "; ist2: " + ist2 )
        print("soll1: " + soll1)
        print("ist1: " + ist1 )
        print("soll2: " + soll2 )
        print("ist2: " + ist2 )
    else:
        showOk = True
    
    basic.pause(100)
basic.forever(on_forever)
