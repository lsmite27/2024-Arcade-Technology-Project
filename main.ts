controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.vy += -5
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setVelocity(0, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setPosition(80, 60)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.vx += -5
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.vx += 5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.vy += 5
})
let Hero: Sprite = null
Hero = sprites.create(assets.image`myImage`, SpriteKind.Player)
