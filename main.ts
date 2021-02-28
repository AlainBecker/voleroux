controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 5; index++) {
        Rou.y += -9
        pause(100)
        continue;
    }
    for (let index = 0; index < 5; index++) {
        Rou.y += 9
        pause(100)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Rou.x += 8
    pause(100)
})
let Rou: Sprite = null
tiles.setTilemap(tilemap`niveau1`)
Rou = sprites.create(assets.tile`iRou`, SpriteKind.Player)
tiles.placeOnRandomTile(Rou, sprites.castle.tileDarkGrass2)
scene.cameraFollowSprite(Rou)
