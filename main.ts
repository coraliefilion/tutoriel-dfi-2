let Angle = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    for (let index = 0; index <= 16; index++) {
        Angle = index * 10 + 10
        servos.P0.setAngle(Angle)
        basic.pause(100)
    }
    if (Angle < 170) {
        servos.P0.setRange(170, 5)
        for (let index = 0; index <= 34; index++) {
            Angle = index * 5 - 5
            servos.P0.setAngle(Angle)
            basic.pause(100)
        }
    }
})
