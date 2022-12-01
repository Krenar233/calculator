input.onButtonPressed(Button.A, function () {
    if (Switch == 0) {
        Number1 += 1
    }
    basic.showNumber(Number1)
    if (Switch == 1) {
        Number2 += 1
        basic.showNumber(Number2)
    }
})
input.onButtonPressed(Button.AB, function () {
    OP += 1
    if (OP == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
    	
    }
    if (OP == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
    	
    }
    if (OP == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
    	
    }
    if (OP == 4) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Switch += 1
    basic.showNumber(Number1 + Number2)
})
let Switch = 0
let Number2 = 0
let Number1 = 0
let OP = 0
OP = 0
Number1 = 0
Number2 = 0
Switch = 0
basic.showString("Hello!")
