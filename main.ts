let Compteur = 0
function Feux_Oranger () {
    Compteur = 4
    while (Compteur > 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
        Compteur = -1
        basic.showNumber(Compteur)
        if (pins.digitalReadPin(DigitalPin.P5) == 1) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P3, 0)
            pins.digitalWritePin(DigitalPin.P4, 1)
            basic.pause(3000)
        }
    }
}
function Feux_Rouge () {
    Compteur = 8
    while (Compteur > 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 1)
        pins.digitalWritePin(DigitalPin.P4, 0)
        Compteur = -1
        basic.showNumber(Compteur)
    }
}
function Feux_vert () {
    Compteur = 8
    while (Compteur > 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 1)
        Compteur = -1
        basic.showNumber(Compteur)
        if (pins.digitalReadPin(DigitalPin.P5) == 1) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P3, 0)
            pins.digitalWritePin(DigitalPin.P4, 1)
            basic.pause(3000)
        }
    }
}
basic.forever(function () {
    Feux_Rouge()
    Feux_Oranger()
    Feux_vert()
})
