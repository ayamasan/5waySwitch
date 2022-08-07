// buf2 = buf.slice();
function ReadSwitch () {
    pins.i2cWriteNumber(
    3,
    1,
    NumberFormat.Int8LE,
    false
    )
    let buf = pins.i2cReadBuffer(3, 9)
for (let カウンター = 0; カウンター <= 9; カウンター++) {
        配列[カウンター] = buf[カウンター]
    }
}
let 配列: number[] = []
game.setScore(0)
bluetooth.startUartService()
配列 = []
let クリック = 0
basic.forever(function () {
    ReadSwitch()
    if (配列[4] != 1) {
        if (クリック == 0) {
            クリック = 1
            basic.showArrow(ArrowNames.East)
            basic.clearScreen()
        }
    } else if (配列[5] != 1) {
        if (クリック == 0) {
            クリック = 1
            basic.showArrow(ArrowNames.North)
            basic.clearScreen()
        }
    } else if (配列[6] != 1) {
        if (クリック == 0) {
            クリック = 1
            basic.showArrow(ArrowNames.West)
            basic.clearScreen()
        }
    } else if (配列[7] != 1) {
        if (クリック == 0) {
            クリック = 1
            basic.showArrow(ArrowNames.South)
            basic.clearScreen()
        }
    } else if (配列[8] != 1) {
        if (クリック == 0) {
            クリック = 1
            game.addScore(1)
        }
    } else {
        クリック = 0
    }
})
