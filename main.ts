basic.showLeds(`
    . . # . .
    . # # # .
    . . # . .
    . # # # .
    . . # . .
    `)
basic.pause(200)
basic.showLeds(`
    # # . # #
    # . . . #
    # # . # #
    # . . . #
    # # . # #
    `)
basic.forever(function () {
    serial.writeLine("\"Temperature\"")
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    serial.writeLine("\"Intensiter Limeuneuse\"")
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
    serial.writeLine("\"Champ magnetique\"")
    serial.writeNumber(input.magneticForce(Dimension.X))
    serial.writeLine("")
    basic.pause(1000)
})
