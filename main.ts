let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
})
basic.forever(function () {
    strip.showRainbow(1, 360)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
