let Angle = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    for (let index = 0; index <= 10; index++) {
        Angle = index * 10 + 10
        servos.P0.setAngle(Angle)
        basic.pause(100)
    }
})
