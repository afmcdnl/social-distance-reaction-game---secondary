radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
})
radio.setGroup(1)
