input.onButtonPressed(Button.A, function () {
    Chaser.delete()
    Chaser = game.createSprite(2, 4)
    Dot.delete()
    Dot = game.createSprite(randint(0, 4), randint(0, 4))
    Seconds = 0
})
input.onGesture(Gesture.LogoUp, function () {
    Chaser.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Chaser.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    Chaser.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    Chaser.change(LedSpriteProperty.Y, -1)
})
let Seconds = 0
let Dot: game.LedSprite = null
let Chaser: game.LedSprite = null
Chaser = game.createSprite(2, 4)
Dot = game.createSprite(randint(0, 4), randint(0, 4))
Seconds = 0
basic.forever(function () {
    basic.pause(1000)
    Seconds += 1
    while (Chaser.isTouching(Dot)) {
        game.addScore(1)
        Dot.delete()
        Dot = game.createSprite(randint(0, 4), randint(0, 4))
    }
    while (Seconds == 60) {
        game.gameOver()
    }
})
