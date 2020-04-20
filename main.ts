namespace SpriteKind {
    export const npc_defender = SpriteKind.create()
    export const powerUp = SpriteKind.create()
    export const chest = SpriteKind.create()
    export const crate = SpriteKind.create()
    export const puBoots = SpriteKind.create()
    export const puLocker = SpriteKind.create()
    export const transmission = SpriteKind.create()
    export const ux = SpriteKind.create()
    export const npcProjectile = SpriteKind.create()
    export const platform = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d b b b b b b b d d b b b b b d 
b d d . . . . b d d . . . d d b 
. b b d . . . b d d . . d b b . 
. . . b d . . b d d . d b . . . 
. . . . b d d b d d d b . . . . 
. . . . . b b d d d b . . . . . 
. . . . . . b d d d . . . . . . 
. . . . b d d b d d d . . . . . 
. . . b d . . b d d b d . . . . 
. . b d . . . b d d . b d . . . 
b d d . . . . b d d . . b d d . 
d . . . . . . b d d . . . b b d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d b b b b b b d d d b b b b b d 
d . . . . . b d d d . . . . b d 
b d . . . . b d d d . . . b d . 
b d . . . . b d d d . . . b d . 
. b d . . . b d d d . . b d . . 
. . b d . . b d d d . . b d . . 
. . b d . . b d d d . . b d . . 
. . . b d . b d d d . b d . . . 
. . . b d . b d d d . b d . . . 
. . . . b d b d d d b d . . . . 
. . . . b d b d d d b d . . . . 
. . . . . b d d d d d . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
d d d . . . . . . . . . b d d d 
d d b d . . . . . . . b d b d d 
d d b d . . . . . . . b d b d d 
d d . b d . . . . . b d . b d d 
d d . . b d . . . b d . . b d d 
d d . . . b d . b d . . . b d d 
d d . . . b d . b d . . . b d d 
d d . . . . b d d . . . . b d d 
d d . . . . b d d . . . . b d d 
d d . . . . b d d . . . . b d d 
d d . . . b d . b d . . . b d d 
d d . . b d . . . b d . . b d d 
d d . b d . . . . . b d . b d d 
d d . b d . . . . . b d . b d d 
d d b d . . . . . . . b d b d d 
d d d . . . . . . . . . b d d d 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d b b b b b b d d d b b b b b d 
d . . . . . b d d d . . . . b d 
b d . . . . b d d d . . . b d . 
b d . . . . b d d d . . . b d . 
. b d . . . b d d d . . b d . . 
. . b d . . b d d d . b d . . . 
. . b d . . b d d d . b d . . . 
. . . b d . b d d d b d . . . . 
. . . b d . b d d d b d . . . . 
. . . . b d b d d d d . . . . . 
d d d d d d d d d d . . . . . . 
d d d d d d d d d d . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d b b b b b b d d d b b b b b d 
d . . . . . b d d d . . . . b d 
b d . . . . b d d d . . . b d . 
b d . . . . b d d d . . . b d . 
. b d . . . b d d d . . b d . . 
. . b d . . b d d d . b d . . . 
. . b d . . b d d d . b d . . . 
. . . b d . b d d d b d . . . . 
. . . b d . b d d d b d . . . . 
. . . . b d b d d d d . . . . . 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d b b b b b b d d d b b b b b d 
d . . . . . b d d d . . . . b d 
b d . . . . b d d d . . . b d . 
b d . . . . b d d d . . . b d . 
. b d . . . b d d d . . b d . . 
. . b d . . b d d d . b d . . . 
. . b d . . b d d d . b d . . . 
. . . b d . b d d d b d . . . . 
. . . b d . b d d d b d . . . . 
. . . . b d b d d d d . . . . . 
. . . . . b d d d d d d d d d d 
. . . . . . b d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d b b b b b b d d d b b b b b b 
d . . . . . b d d d . . . . . . 
b d . . . . b d d d . . . . . . 
b d . . . . b d d d . . . . . . 
. b d . . . b d d d . . . . . . 
. . b d . . b d d d . . . . . . 
. . b d . . b d d d . . . . . d 
. . . b d . b d d d . . . . d b 
. . . b d . b d d d . . d d b . 
. . . . b d b d d d . d b b . . 
. . . . . b d d d d d b . . . . 
. . . . . . b d d d b . . . . . 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
b b b b b b d d d d b b b b b d 
. . . . . d b d d d . . . . . d 
. . . . d b b d d d . . . . d b 
. . d d b . b d d d . . . . d . 
. d b b . . b d d d . . . d b . 
d b . . . . b d d d . . d b . . 
b . . . . . b d d d . . d . . . 
. . . . . . b d d d . d b . . . 
. . . . . . b d d d . d . . . . 
. . . . . . b d d d d b . . . . 
. . . . . . b d d d b . . . . . 
. . . . . . b d d d . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile13 = img`
. . . . . . . . . . . b d d d d 
. . . . . . . . . . . b d d d d 
. . . . . . . . . . . b d d d d 
. . . . . . . . . . b d d b d d 
. . . . . . . . . b d d . b d d 
. . . . . . . . b d d . . b d d 
. . . . . . . . b d d . . b d d 
. . . . . . b d d d . . . b d d 
. . . . . . b d d d . . . b d d 
. . . . . . b d d d . . . b d d 
. . . . . b d d b d . . . b d d 
. . . . b d d . . b d . . b d d 
. . . b d d . . . . b d . b d d 
. . . b d d . . . . b d . b d d 
. . b d d . . . . . . b d b d d 
d d d d . . . . . . . . b d d d 
`
    //% blockIdentity=images._tile
    export const tile14 = img`
d d d d d d d d d d d d d d d d 
d d b b b b b b b b b b d d d . 
d d . . . . . . . . . b d d . . 
d d . . . . . . . . b d d . . . 
d d . . . . . . . b d d . . . . 
d d . . . . . . b d d . . . . . 
d d . . . . . . b d d . . . . . 
d d . . . . b d d d . . . . . . 
d d . . . . b d d d . . . . . . 
d d . . . . b d d d . . . . . . 
d d . . . b d d . . . . . . . . 
d d . . b d d . . . . . . . . . 
d d . b d d . . . . . . . . . . 
d d . b d d . . . . . . . . . . 
d d b d d . . . . . . . . . . . 
d d d d . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile15 = img`
d . . . . . . . . . . . . . . . 
b d . . . . . . . . . . . . . . 
. b d . . . . . . . . . . . . . 
. . b d . . . . . . . . . . . . 
. . . b d . . . . . . . . . . . 
. . . . b d . . . . . . . . . . 
. . . . . b d . . . . . . . . . 
. . . . . . b d . . . . . . . . 
. . . . . b d d d . . . . . . . 
. . . . b d d d d d . . . . . . 
. . . b d . . d d b d . . . . . 
. . b d . . . d d . b d . . . . 
b d d . . . . d d . . b d . . . 
d . . . . . . d d . . . b d . . 
d d d d d d d d d d d d d d d . 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile21 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
e e . . . . . . . . . . . . . . 
b d e e . . . . . . . . . . . . 
c d d d e . . . . . . . . . . . 
e c d d d e . . . . . . . . . . 
9 e c d d e . . . . . . . . . . 
1 e c d d d e . . . . . . . . . 
9 e c d d d e . . . . . . . . . 
9 e c d d d e . . . . . . . . . 
9 e c d d d e . . . . . . . . . 
1 e c d d d e . . . . . . . . . 
9 e c d d d e . . . . . . . . . 
e c c d d d e . . . . . . . . . 
c d d d d d e . . . . . . . . . 
b d d d d d e . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile22 = img`
b d d d d d e . . . . . . . . . 
b d d d d d e . . . . . . . . . 
b c c c d d e . . . . . . . . . 
c 2 e 2 c d e . . . . . . . . . 
c e 2 e c d e . . . . . . . . . 
b c c c d d e . . . . . . . . . 
b d d d d d e . . . . . . . . . 
b d d d d d e . . . . . . . . . 
b d d d d d e . . . . . . . . . 
b d d d d d e . . . . . . . . . 
b d d d d d e . . . . . . . . . 
b d d d d e . . . . . . . . . . 
b d d d d e . . . . . . . . . . 
b d d d e . . . . . . . . . . . 
b d e e . . . . . . . . . . . . 
e e e . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile23 = img`
d b 9 9 1 9 9 1 1 9 9 1 9 9 b d 
d d b 6 6 6 6 6 6 6 6 6 6 b d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d b b b b b b d d d b b b b b d 
d . . . . . b d d d . . . . b d 
b d . . . . b d d d . . . b d . 
b d . . . . b d d d . . . b d . 
. b d . . . b d d d . . b d . . 
. . b d . . b d d d . b d . . . 
. . b d . . b d d d . b d . . . 
. . . b d . b d d d b d . . . . 
. . . b d . b d d d b d . . . . 
. . . . b d b d d d d . . . . . 
d d d d d d d d d d . . . . . . 
d d d d d d d d d d . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile24 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile25 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile26 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile27 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 . . . . . . . 
. . . . . . 6 6 6 . . . . . . . 
. . . . . . 6 6 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function puInstructions (text: string) {
    for (let value of text.split("-")) {
        game.showLongText(value, DialogLayout.Bottom)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc_defender, function (sprite, otherSprite) {
    otherSprite.say("am i alive?", 2000)
    sprite.x += -2
})
sprites.onDestroyed(SpriteKind.npcProjectile, function (sprite) {
    sprite.startEffect(effects.spray)
})
function spawnKindAsteroid () {
    for (let value22 of tiles.getTilesByType(myTiles.tile27)) {
        kindAsteroid = sprites.create(img`
. . e e e e . . 
. e e e e e e . 
e e e e e 1 e e 
e e 1 e e e e e 
e e e e e e e e 
e e e e e 1 e . 
. e e e e e e . 
. . e e e e . . 
`, SpriteKind.platform)
        tiles.placeOnTile(kindAsteroid, value22)
        tiles.setTileAt(value22, myTiles.tile0)
        kindAsteroid.ay = gravity
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    left = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.platform, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.puBoots, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    grantPU("boots")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.puLocker, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    grantPU("locker")
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameReady == 1) {
        if (armed == 1) {
            music.pewPew.play()
            if (left == 1) {
                phaserBeam = sprites.createProjectileFromSprite(img`
6 6 . 6 . . 6 . 6 
7 7 7 . . 7 . . 7 
6 6 . 6 . . 6 . 6 
`, Drqaua, -110, 0)
                phaserBeam.right = Drqaua.left
            } else {
                phaserBeam = sprites.createProjectileFromSprite(img`
6 . 6 . . 6 . 6 6 
7 . . 7 . . 7 7 7 
6 . 6 . . 6 . 6 6 
`, Drqaua, 110, 0)
                phaserBeam.left = Drqaua.right
            }
        }
    }
})
function spawnNPC () {
    for (let value of tiles.getTilesByType(myTiles.tile25)) {
        solomon = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f . f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f . . . . . . . 
. . . . . . 9 9 6 6 6 6 6 6 6 6 6 8 6 6 6 9 6 6 1 9 . . . . . . 
. . . . . . 9 f f f f f f f f f f f f f f f f f f 6 . . . . . . 
. . . f f f 6 f f e f e e f e e f e 2 f e 2 f 2 f 6 f f f . . . 
. . c f f c 9 f e e f e f f 2 e f e e f 2 e f 2 f 9 f f f c . . 
. . f f c c 6 f f f f f f f f c f f f f f f f f f 9 f c f f . . 
. . c f c c f 8 8 8 8 8 8 6 8 8 8 6 8 8 8 8 8 8 6 c f c c c . . 
. . c c . . f f c c c c f c f f f f f f f f f f f f . . c c . . 
. . b c . . c c c c c c c c c c c c c c c f c f f 8 . . c b . . 
. . b d . . c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 f 8 . . b b . . 
. . f f . . c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c . . f f . . 
. . b f . . c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 . . f b . . 
. . d b . . f f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . b b . . 
. . c c . . f f f 8 8 8 8 8 8 8 8 8 8 8 8 c c 8 8 8 . . c c . . 
. . c c . . f f c f 8 8 8 8 8 8 8 8 8 8 c f f c 8 8 . . c c . . 
. . . . . f f f f f f 8 8 8 8 8 8 8 8 8 c 7 7 c 8 f f . . . . . 
. . . . . f c f f c c c 8 8 8 8 8 8 8 8 8 c c 8 8 c f . . . . . 
. . . . . f f f f f f c f c c 8 8 8 8 8 8 8 8 8 f f f . . . . . 
. . . . . f c c c f . . . . . . . . . . . . f c c c f . . . . . 
. . . . . f f f f f . . . . . . . . . . . . f f f f f . . . . . 
. . . . . . f f f . . . . . . . . . . . . . . f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.npc_defender)
        tiles.placeOnTile(solomon, value)
        tiles.setTileAt(value, myTiles.tile0)
        animation.runImageAnimation(
        solomon,
        [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f . f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . . d . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f . . . . . . . 
. . . . . . 9 9 6 6 6 6 6 6 6 6 6 8 6 6 6 9 6 6 1 9 . . . . . . 
. . . . . . 9 f f f f f f f f f f f f f f f f f f 6 . . . . . . 
. . . f f f 6 f f e f e e f e e f e 2 f e 2 f 2 f 6 f f f . . . 
. . c f f c 9 f e e f e f f 2 e f e e f 2 e f 2 f 9 f f f c . . 
. . f f c c 6 f f f f f f f f c f f f f f f f f f 9 f c f f . . 
. . c f c c f 8 8 8 8 8 8 6 8 8 8 6 8 8 8 8 8 8 6 c f c c c . . 
. . c c . . f f c c c c f c f f f f f f f f f f f f . . c c . . 
. . b c . . c c c c c c c c c c c c c c c f c f f 8 . . c b . . 
. . b d . . c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 f 8 . . b b . . 
. . f f . . c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c . . f f . . 
. . b f . . c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 . . f b . . 
. . d b . . f f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . b b . . 
. . c c . . f f f 8 8 8 8 8 8 8 8 8 8 8 8 c c 8 8 8 . . c c . . 
. . c c . . f f c f 8 8 8 8 8 8 8 8 8 8 c f f c 8 8 . . c c . . 
. . . . . f f f f f f 8 8 8 8 8 8 8 8 8 c 7 7 c 8 f f . . . . . 
. . . . . f c f f c c c 8 8 8 8 8 8 8 8 8 c c 8 8 c f . . . . . 
. . . . . f f f f f f c f c c 8 8 8 8 8 8 8 8 8 f f f . . . . . 
. . . . . f c c c f . . . . . . . . . . . . f c c c f . . . . . 
. . . . . f f f f f . . . . . . . . . . . . f f f f f . . . . . 
. . . . . . f f f . . . . . . . . . . . . . . f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f . f . . . . . . . 
. . . . . . . . . . . . . . . d . d . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . . d . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f . . . . . . . 
. . . . . . 9 9 6 6 6 6 6 6 6 6 6 8 6 6 6 9 6 6 1 9 . . . . . . 
. . . f f f 9 f f f f f f f f f f f f f f f f f f 6 f f f . . . 
. . c f f c 6 f f e f e e f e e f e 2 f e 2 f 2 f 6 f f f c . . 
. . f f c c 9 f e e f e f f 2 e f e e f 2 e f 2 f 9 f c f f . . 
. . c f c c 6 f f f f f f f f c f f f f f f f f f 9 f c c c . . 
. . c c . . f 8 8 8 8 8 8 6 8 8 8 6 8 8 8 8 8 8 6 c . . c c . . 
. . b c . . f f c c c c f c f f f f f f f f f f f f . . c b . . 
. . b d . . c c c c c c c c c c c c c c c f c f f 8 . . b b . . 
. . f f . . c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 f 8 . . f f . . 
. . b f . . c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c . . f b . . 
. . d b . . f f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . b b . . 
. . c c . . f f f 8 8 8 8 8 8 8 8 8 8 8 8 c c 8 8 8 . . c c . . 
. . c c . . f f c f 8 8 8 8 8 8 8 8 8 8 c f f c 8 8 . . c c . . 
. . . . . f f f f f f 8 8 8 8 8 8 8 8 8 c 7 7 c 8 f f . . . . . 
. . . . . f c f f c c c 8 8 8 8 8 8 8 8 8 c c 8 8 c f . . . . . 
. . . . . f f f f f f c f c c 8 8 8 8 8 8 8 8 8 f f f . . . . . 
. . . . . f c c c f . . . . . . . . . . . . f c c c f . . . . . 
. . . . . f f f f f . . . . . . . . . . . . f f f f f . . . . . 
. . . . . . f f f . . . . . . . . . . . . . . f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f . f . . . . . . . 
. . . . . . . . . . . . . . d . . . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . d . d . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f . . . . . . . 
. . . . . . 9 9 6 6 6 6 6 6 6 6 6 8 6 6 6 9 6 6 1 9 . . . . . . 
. . . . . . 9 f f f f f f f f f f f f f f f f f f 6 . . . . . . 
. . . f f f 6 f f e f e e f e e f e 2 f e 2 f 2 f 6 f f f . . . 
. . c f f c 9 f e e f e f f 2 e f e e f 2 e f 2 f 9 f f f c . . 
. . f f c c 6 f f f f f f f f c f f f f f f f f f 9 f c f f . . 
. . c f c c f 8 8 8 8 8 8 6 8 8 8 6 8 8 8 8 8 8 6 c f c c c . . 
. . c c . . f f c c c c f c f f f f f f f f f f f f . . c c . . 
. . b c . . c c c c c c c c c c c c c c c f c f f 8 . . c b . . 
. . b d . . c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 f 8 . . b b . . 
. . f f . . c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c . . f f . . 
. . b f . . c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 . . f b . . 
. . d b . . f f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . b b . . 
. . c c . . f f f 8 8 8 8 8 8 8 8 8 8 8 8 c c 8 8 8 . . c c . . 
. . c c . . f f c f 8 8 8 8 8 8 8 8 8 8 c f f c 8 8 . . c c . . 
. . . . . f f f f f f 8 8 8 8 8 8 8 8 8 c 7 7 c 8 f f . . . . . 
. . . . . f c f f c c c 8 8 8 8 8 8 8 8 8 c c 8 8 c f . . . . . 
. . . . . f f f f f f c f c c 8 8 8 8 8 8 8 8 8 f f f . . . . . 
. . . . . f c c c f . . . . . . . . . . . . f c c c f . . . . . 
. . . . . f f f f f . . . . . . . . . . . . f f f f f . . . . . 
. . . . . . f f f . . . . . . . . . . . . . . f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . d . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d . . . . . . . f . f . . . . . . . 
. . . . . . . . . . . . . . . d . d . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . . d . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f . . . . . . . 
. . . . . . 9 9 6 6 6 6 6 6 6 6 6 8 6 6 6 9 6 6 1 9 . . . . . . 
. . . f f f 9 f f f f f f f f f f f f f f f f f f 6 f f f . . . 
. . c f f c 6 f f e f e e f e e f e 2 f e 2 f 2 f 6 f f f c . . 
. . f f c c 9 f e e f e f f 2 e f e e f 2 e f 2 f 9 f c f f . . 
. . c f c c 6 f f f f f f f f c f f f f f f f f f 9 f c c c . . 
. . c c . . f 8 8 8 8 8 8 6 8 8 8 6 8 8 8 8 8 8 6 c . . c c . . 
. . b c . . f f c c c c f c f f f f f f f f f f f f . . c b . . 
. . b d . . c c c c c c c c c c c c c c c f c f f 8 . . b b . . 
. . f f . . c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 f 8 . . f f . . 
. . b f . . c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c . . f b . . 
. . d b . . f f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . b b . . 
. . c c . . f f f 8 8 8 8 8 8 8 8 8 8 8 8 c c 8 8 8 . . c c . . 
. . c c . . f f c f 8 8 8 8 8 8 8 8 8 8 c f f c 8 8 . . c c . . 
. . . . . f f f f f f 8 8 8 8 8 8 8 8 8 c 7 7 c 8 f f . . . . . 
. . . . . f c f f c c c 8 8 8 8 8 8 8 8 8 c c 8 8 c f . . . . . 
. . . . . f f f f f f c f c c 8 8 8 8 8 8 8 8 8 f f f . . . . . 
. . . . . f c c c f . . . . . . . . . . . . f c c c f . . . . . 
. . . . . f f f f f . . . . . . . . . . . . f f f f f . . . . . 
. . . . . . f f f . . . . . . . . . . . . . . f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
        120,
        true
        )
    }
}
function spawnDraqua () {
    Drqaua = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . . . . . f a f . . . . . . f a f . . . . . . . . . . 
. . . . . . . . . . . f a f . . . . f a f . . . . . . . . . . . 
. . . . . . . . . . f a a a f f f f a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . . f a 1 f a a f 1 a f . . . . . . . . . . . 
. . . . . . . . . . . . f a a a a a a f . . . . . . . . . . . . 
. . . . . . . . . . . . . f a a a a f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f a a a a f f . . . . . . . . . . . . 
. . . . . . . . . . . f 7 7 7 7 7 7 7 7 f . . . . . . . . . . . 
. . . . . . . . . . f 7 7 7 7 7 7 7 7 7 7 f . . . . . . . . . . 
. . . . . . . . . f 7 7 7 7 7 8 7 7 7 7 7 7 f . . . . . . . . . 
. . . . . . . . . f 7 7 f 7 7 8 7 7 7 f 7 7 f . . . . . . . . . 
. . . . . . . . . f 7 7 f 7 7 7 7 7 7 f 7 7 f . . . . . . . . . 
. . . . . . . . . f a a f 7 7 7 7 7 7 f a a f . . . . . . . . . 
. . . . . . . . . . f f . f 7 7 7 7 f . f f . . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f a a f f a a f . . . . . . . . . . . . 
. . . . . . . . . . . f a a a f f a a a f . . . . . . . . . . . 
. . . . . . . . . . . . f f f . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(Drqaua, 100, 0)
    scene.cameraFollowSprite(Drqaua)
    drqauaMeter = sprites.create(img`
f f f f f f f f f f f f f f f f f f f f f f f f f a . . a 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f a a a a 
f f f f f f f f f f f f f f f f f f f f f f f f f . a a . 
`, SpriteKind.ux)
    drqauaMeter.setPosition(20, 5)
    drqauaMeter.setFlag(SpriteFlag.RelativeToCamera, true)
    drqauaLife = [img`
f f f f f f f f f f f f f f f f f f f f f f f f f a . . a 
f 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f a a a a 
f f f f f f f f f f f f f f f f f f f f f f f f f . a a . 
`, img`
f f f f f f f f f f f f f f f f f f f f f f f f f a . . a 
f 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f a a a a 
f f f f f f f f f f f f f f f f f f f f f f f f f . a a . 
`, img`
f f f f f f f f f f f f f f f f f f f f f f f f f a . . a 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f a a a a 
f f f f f f f f f f f f f f f f f f f f f f f f f . a a . 
`, img`
f f f f f f f f f f f f f f f f f f f f f f f f f a . . a 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f a a a a 
f f f f f f f f f f f f f f f f f f f f f f f f f . a a . 
`]
    Drqaua.setFlag(SpriteFlag.ShowPhysics, true)
}
function spawnPowerUps () {
    for (let value4 of tiles.getTilesByType(myTiles.tile7)) {
        antigravBoots = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 1 1 . . . . . . . . . . 
. . . . 1 d 1 . . . . . . . . . 
. 1 1 . 1 1 d 1 . . . . . . . . 
. 1 d 1 . 1 1 1 1 . . . . . . . 
. 1 1 d 1 . 1 1 f f f f . . . . 
. 1 d 1 1 1 f f f 2 2 f . . . . 
. 1 1 d 1 d 1 2 f 2 c f . . . . 
. . . 1 1 1 1 c f c 2 f . . . . 
. . . . . 1 1 2 f 2 c f f f . . 
. . . . . f 1 c f f f 2 2 f f . 
. . . . . f 2 2 2 2 f f 2 2 f . 
. . . . . f 2 2 2 2 2 f 2 e f . 
. . . . . f e 2 e 2 e f f f f . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.puBoots)
        tiles.placeOnTile(antigravBoots, value4)
        tiles.setTileAt(value4, myTiles.tile0)
    }
}
function loadLevel (lvl: number) {
    gameReady = 1
    armed = 0
    vJump = -115
    gravity = 200
    if (lvl == 1) {
        tiles.setTilemap(tiles.createTilemap(
            hex`1100200000000b01010101010101010101010d0000000b0c0000000000000000000000000e000b0c000000000000000000000000000f00030000000000000000000000000006051003000000000000000000000200000003000301010000000000000200000000000300030000000000000000000000010101030003000013000000020000000000000003000301080900000000000000001300000300030000000000020000020000010101030003000013000000000000000000000003000304080900000000000000000000000300030000000000020000000000080906030003000000000000000700000000000003000300000200000000020000000000000300030000000000000200000000130000030003040000000000000000000008050503000300010000000000000000000000000300030000020000000000130000130000030003000000000000000008090008090003000300070000000000020000000000000300030002000000000000000000000000030003000002000000000000000000000003000300000000000002000000000000000300030000000000000000000002000000030003000000000000001300000000000003000300000000000000080900000000000300030000000000000200000000000000030003000000000000000000000000000003000300000000010000000000000000000300030000000000000000120000000a0003000301010101010101010101010101010300`,
            img`
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 . . . . . . . . . . . . 2 . 
2 2 . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . 2 2 2 
2 . . . . . . . . . . 2 . . . 2 . 
2 2 2 . . . . . . 2 . . . . . 2 . 
2 . . . . . . . . . . . 2 2 2 2 . 
2 . . . . . . 2 . . . . . . . 2 . 
2 2 2 2 . . . . . . . . . . . 2 . 
2 . . . . . 2 . . 2 . . 2 2 2 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 2 2 2 . . . . . . . . . . . 2 . 
2 . . . . . 2 . . . . . 2 2 2 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . 2 . . . . 2 . . . . . . 2 . 
2 . . . . . . 2 . . . . . . . 2 . 
2 2 . . . . . . . . . . 2 2 2 2 . 
2 . 2 . . . . . . . . . . . . 2 . 
2 . . 2 . . . . . . . . . . . 2 . 
2 . . . . . . . . 2 2 . 2 2 . 2 . 
2 . . . . . . . 2 . . . . . . 2 . 
2 . 2 . . . . . . . . . . . . 2 . 
2 . . 2 . . . . . . . . . . . 2 . 
2 . . . . . . 2 . . . . . . . 2 . 
2 . . . . . . . . . . 2 . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . 2 2 . . . . . 2 . 
2 . . . . . . 2 . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . 2 . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27],
            TileScale.Sixteen
        ))
        loadDrqaua(1, 30)
    } else if (lvl == 2) {
        tiles.setTilemap(tiles.createTilemap(
            hex`200020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000140000140000000000000000000000000000000000000000000000000000000000000000001300000000000000000000000000000000000000000000000200000002000000080900000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000130003000000000000000000000000000000000000000000000000000001010101010100000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000130000000000000000000000000000000000000000000000000014000000000008090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 . . . 2 . . . 2 2 . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27],
            TileScale.Sixteen
        ))
        loadDrqaua(1, 28)
    } else {
    	
    }
    numHumans = tiles.getTilesByType(myTiles.tile26).length
    spawnPowerUps()
    spawnEnemy()
    dropCrate()
    spawnNPC()
    spawnKindAsteroid()
}
function grantPU (pu: string) {
    if (pu == "boots") {
        instructions = "Antigrav boots: Give you an extra boost when jumping!  But they don't last forever..."
        Drqaua.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . . . . . f a f . . . . . . f a f . . . . . . . . . . 
. . . . . . . . . . . f a f . . . . f a f . . . . . . . . . . . 
. . . . . . . . . . f a a a f f f f a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . . f a 1 f a a f 1 a f . . . . . . . . . . . 
. . . . . . . . . . . . f a a a a a a f . . . . . . . . . . . . 
. . . . . . . . . . . . . f a a a a f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f a a a a f f . . . . . . . . . . . . 
. . . . . . . . . . . f 7 7 7 7 7 7 7 7 f . . . . . . . . . . . 
. . . . . . . . . . f 7 7 7 7 7 7 7 7 7 7 f . . . . . . . . . . 
. . . . . . . . . f 7 7 7 7 7 8 7 7 7 7 7 7 f . . . . . . . . . 
. . . . . . . . . f 7 7 f 7 7 8 7 7 7 f 7 7 f . . . . . . . . . 
. . . . . . . . . f 7 7 f 7 7 7 7 7 7 f 7 7 f . . . . . . . . . 
. . . . . . . . . f a a f 7 7 7 7 7 7 f a a f . . . . . . . . . 
. . . . . . . . . . f f . f 7 7 7 7 f . f f . . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 2 2 f f 2 2 f . . . . . . . . . . . . 
. . . . . . . . . . . f 2 2 2 f f 2 2 2 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
        puBootsEnabled = 1
        vJump = -150
        info.startCountdown(10)
    } else if (pu == "locker") {
        instructions = "Footlocker: You found a footlocker! These contain special items.-Item: Phaser set to eliminate."
        Drqaua.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . 
. . . . . . . . . . f a f . . . . . . f a f . . . . . . 
. . . . . . . . . . . f a f . . . . f a f . . . . . . . 
. . . . . . . . . . f a a a f f f f a a a f . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . 
. . . . . . . . . . . f a 1 f a a f 1 a f . . . . . . . 
. . . . . . . . . . . . f a a a a a a f . . . . . . . . 
. . . . . . . . . . . . . f a a a a f . . . . . . . . . 
. . . . . . . . . . . . f f a a a a f f . . . . . . . . 
. . . . . . . . . . . f 7 7 7 7 7 7 7 7 f . . d d e . . 
. . . . . . . . . . f 7 7 7 7 7 7 7 7 7 7 f f f e d d 9 
. . . . . . . . . f 7 7 7 7 7 8 7 7 7 7 7 7 7 7 a f d . 
. . . . . . . . . f 7 7 f 7 7 8 7 7 7 f f 7 7 7 a f . . 
. . . . . . . . . f 7 7 f 7 7 7 7 7 7 f . f f f f . . . 
. . . . . . . . . f a a f 7 7 7 7 7 7 f . . . . . . . . 
. . . . . . . . . . f f . f 7 7 7 7 f . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . 
. . . . . . . . . . . . f 2 2 f f 2 2 f . . . . . . . . 
. . . . . . . . . . . f 2 2 2 f f 2 2 2 f . . . . . . . 
. . . . . . . . . . . . f f f . . f f f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
        armed = 1
    } else {
    	
    }
    if (foundPUs.indexOf(pu) == -1) {
        foundPUs.push(pu)
        puInstructions(instructions)
    }
}
function unlockLevel () {
    game.showLongText("You eradicated all the humans. Proceed to the next level.", DialogLayout.Center)
    for (let value2 of tiles.getTilesByType(myTiles.tile21)) {
        tiles.setWallAt(value2, false)
        tiles.setTileAt(value2, myTiles.tile0)
    }
    for (let value3 of tiles.getTilesByType(myTiles.tile22)) {
        tiles.setWallAt(value3, false)
        tiles.setTileAt(value3, myTiles.tile0)
    }
    numHumans = -1
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate, 500)
    numHumans += -1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameReady == 1) {
        if (puBootsEnabled == 1) {
            Drqaua.vy = vJump
        } else if (Drqaua.isHittingTile(CollisionDirection.Bottom)) {
            Drqaua.vy = vJump
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    drqauaLives += -1
    drqauaMeter.setImage(drqauaLife[drqauaLives])
    sprite.say("Gack!", 500)
    scene.cameraShake(4, 500)
    for (let index = 0; index < 2; index++) {
        sprite.setFlag(SpriteFlag.Invisible, true)
        pause(100)
        sprite.setFlag(SpriteFlag.Invisible, false)
        pause(100)
    }
    pause(300)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    left = 0
})
function spawnHazards () {
    meanBoiAsteroid = sprites.createProjectileFromSide(img`
. . . 4 4 . . . . . . . . . . . 
. 4 4 4 4 4 . . . . . . . . . . 
. 4 4 1 4 4 4 . . . . . . . . . 
. 1 4 4 1 4 e e e e . . . . . . 
. 4 4 4 4 e e e e e e . . . . . 
. . 4 4 e e e e e 1 e e . . . . 
. . . 4 e e 1 e e e e e . . . . 
. . . . e e e e e e e e . . . . 
. . . . e e e e e 1 e e . . . . 
. . . . . e e e e e e . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 80, 80)
    meanBoiAsteroid.setKind(SpriteKind.npcProjectile)
    meanBoiAsteroid.y = Math.randomRange(275, 300)
    meanBoiAsteroid.z = -1
}
function dropCrate () {
    for (let value22 of tiles.getTilesByType(myTiles.tile11)) {
        footLocker = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . f f . . . 
. . . . . . . . . . . . f . . . 
. . . . . . . . . . . . 8 8 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. 6 8 8 8 8 8 8 8 8 8 8 8 8 6 . 
. 6 8 6 6 9 6 6 6 6 6 6 6 8 6 . 
. 6 8 6 9 6 6 6 6 2 7 2 6 8 6 . 
. 6 8 6 6 6 6 6 6 6 6 6 6 8 6 . 
. 6 8 6 6 6 6 6 6 6 6 6 6 8 6 . 
. 6 8 6 6 6 6 6 6 6 6 6 6 8 6 . 
. 6 8 8 8 8 8 8 8 8 8 8 8 8 6 . 
. 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
. 6 c . . . . . . . . . . c 6 . 
. f c . . . . . . . . . . c f . 
`, SpriteKind.puLocker)
        tiles.placeOnTile(footLocker, value22)
        tiles.setTileAt(value22, myTiles.tile0)
        animation.runImageAnimation(
        footLocker,
        [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . f f . . . 
. . . . . . . . . . . . f . . . 
. . . . . . . . . . . . 8 8 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. 6 8 8 8 8 8 8 8 8 8 8 8 8 6 . 
. 6 8 6 6 9 6 6 6 6 6 6 6 8 6 . 
. 6 8 6 9 2 6 6 6 2 7 2 6 8 6 . 
. 6 8 6 6 6 6 6 6 6 6 6 6 8 6 . 
. 6 8 6 6 6 6 6 6 6 6 6 6 8 6 . 
. 6 8 6 6 6 6 6 6 6 6 6 6 8 6 . 
. 6 8 8 8 8 8 8 8 8 8 8 8 8 6 . 
. 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
. 6 c . . . . . . . . . . c 6 . 
. f c . . . . . . . . . . c f . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . f f . . . 
. . . . . . . . . . . . f . . . 
. . . . . . . . . . . . 8 8 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. 6 8 8 8 8 8 8 8 8 8 8 8 8 6 . 
. 6 8 6 6 9 6 6 6 6 6 6 6 8 6 . 
. 6 8 6 2 9 6 6 6 2 2 7 6 8 6 . 
. 6 8 6 6 6 6 6 6 6 6 6 6 8 6 . 
. 6 8 6 6 6 6 6 6 6 6 6 6 8 6 . 
. 6 8 6 6 6 6 6 6 6 6 6 6 8 6 . 
. 6 8 8 8 8 8 8 8 8 8 8 8 8 6 . 
. 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
. 6 c . . . . . . . . . . c 6 . 
. f c . . . . . . . . . . c f . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . f f . . . 
. . . . . . . . . . . . f . . . 
. . . . . . . . . . . . 8 8 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. 6 8 8 8 8 8 8 8 8 8 8 8 8 6 . 
. 6 8 6 6 2 6 6 6 6 6 6 6 8 6 . 
. 6 8 6 9 9 6 6 6 7 2 2 6 8 6 . 
. 6 8 6 6 6 6 6 6 6 6 6 6 8 6 . 
. 6 8 6 6 6 6 6 6 6 6 6 6 8 6 . 
. 6 8 6 6 6 6 6 6 6 6 6 6 8 6 . 
. 6 8 8 8 8 8 8 8 8 8 8 8 8 6 . 
. 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
. 6 c . . . . . . . . . . c 6 . 
. f c . . . . . . . . . . c f . 
`],
        250,
        true
        )
    }
}
info.onCountdownEnd(function () {
    puBootsEnabled = 0
    vJump = -115
})
function spawnEnemy () {
    for (let value32 of tiles.getTilesByType(myTiles.tile26)) {
        spaceman = sprites.create(img`
. . . . . . . . . b b b b b . . . . . . . . . . 
. . . . . . . . . b b b b b . . . . . . . . . . 
. . . . . . . b b 9 9 9 9 9 b b . . . . . . . . 
. . . . . . b b 9 9 9 1 9 9 9 b b . . . . . . . 
. . . . . . b b 9 9 1 1 9 9 9 b b . . . . . . . 
. . . . . b 9 9 9 1 1 9 9 9 9 6 6 b . . . . . . 
. . . . . b 9 9 9 9 9 9 9 9 6 6 6 b . . . . . . 
. . . . . b 9 9 9 9 9 9 9 6 6 6 6 b . . . . . . 
. . . . . b 9 9 9 9 9 9 6 6 6 6 6 b . . . . . . 
. . . . . . b b 9 9 6 6 6 6 6 b b . . . . . . . 
. . . . . . b b 6 6 6 6 6 6 6 b b . . . . . . . 
. . . . . . . b b 6 6 6 6 6 b b . . . . . . . . 
. . . . . . . . . b b b b b . . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . 
. . . . . . . . f 1 1 1 1 1 f . . . . . . . . . 
. . . . . . . f 1 1 1 1 2 2 1 f . . . . . . . . 
. . . . . . f f 1 1 1 8 2 2 1 f f . . . . . . . 
. . . . . . f f 1 1 1 8 8 1 1 f f . . . . . . . 
. . . . . . f f 1 1 1 1 1 1 1 f f . . . . . . . 
. . . . . . f f 1 1 1 1 1 1 1 f f . . . . . . . 
. . . . . . . . . 1 1 1 1 1 . . . . . . . . . . 
. . . . . . . . . f f 1 f f . . . . . . . . . . 
. . . . . . . . . f f 1 f f . . . . . . . . . . 
. . . . . . . . f f f . f f f . . . . . . . . . 
`, SpriteKind.Enemy)
        tiles.setTileAt(value32, myTiles.tile0)
        tiles.placeOnTile(spaceman, value32)
        spaceman.vx = -50
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.npc_defender, function (sprite, otherSprite) {
    otherSprite.say("No..o...", 500)
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
})
function loadDrqaua (col: number, row: number) {
    Drqaua.ay = gravity
    drqauaLives = drqauaLife.length - 1
    tiles.placeOnTile(Drqaua, tiles.getTileLocation(col, row))
}
let spaceman: Sprite = null
let footLocker: Sprite = null
let meanBoiAsteroid: Sprite = null
let drqauaLives = 0
let puBootsEnabled = 0
let instructions = ""
let vJump = 0
let antigravBoots: Sprite = null
let drqauaLife: Image[] = []
let drqauaMeter: Sprite = null
let solomon: Sprite = null
let Drqaua: Sprite = null
let phaserBeam: Sprite = null
let armed = 0
let gameReady = 0
let left = 0
let gravity = 0
let kindAsteroid: Sprite = null
let foundPUs: string[] = []
let numHumans = 0
let level = 2
numHumans = -1
foundPUs = []
scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 
f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f 8 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 8 6 8 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 6 6 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f 8 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 6 8 8 6 6 6 6 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f 8 f f 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 8 8 6 8 6 6 6 6 6 6 6 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 6 8 8 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 9 6 6 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f 8 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 6 6 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 6 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 9 6 6 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 6 9 9 9 9 9 9 1 9 9 1 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 9 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f 8 f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 9 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 6 8 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 6 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 9 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 9 6 6 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 f 9 f 9 f 9 f 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 9 6 6 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 9 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
e c c e e e e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
e e c e e e e 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 4 4 4 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
e e c c e e e e 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c e e e e 4 4 4 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e 9 9 f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
e e c c e e e e e 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e c e e e e e 4 4 4 4 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c e e e e 9 f 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
e e e e e e e e e e 4 4 4 f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e e e e e 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c 2 2 f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
e e e e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e e e e e e e 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c 2 2 2 2 f 2 f 2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
e e e e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e c c c c c c e e e e e e e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 2 f f f 2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 
e e e e e e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c c c c c c c c c e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 2 2 2 2 c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 2 f 2 f 2 f 2 f 2 2 2 2 2 2 2 2 2 2 2 2 
e e e e e e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f 2 f 2 f 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 
e c c c c c e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 2 f 2 2 2 f 2 f 2 2 2 2 2 2 2 2 2 2 2 2 
4 4 4 c c c c e e e e e e e 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f c c c c c f f 2 2 2 2 2 2 2 2 2 2 2 2 
4 4 4 4 c c c c e e e e e e e 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 
e 4 4 4 4 c c c c e e e e e e e 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
e e 4 4 4 4 4 c c c e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
e e 4 4 4 4 4 4 c c c e e e e e e e 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
e e e e e e 4 4 4 c c e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
e e e e e e e 4 4 c c c e e e e c c 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e c c c 2 2 e c e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
e c e e e e e e 4 4 4 c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
c c e e e e e e e 4 4 c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
c c e e e e e e e 4 4 c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
c e e e e e e e e 4 4 4 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
c e e e 4 e e e e e 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
e e e 4 4 4 e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
e e 4 4 4 4 e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 2 
c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 2 2 
c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c e 2 2 2 2 2 2 2 2 e c c 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c e e e e c c 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c e e e 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e c e e e 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e c c e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e e c c c c e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e e 4 4 4 c c c e e e 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e e e e e 4 4 e e e e e e e e c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e e e e e e 4 4 4 e e c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e e e c c e e e e 4 4 4 c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c 2 2 2 2 c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c 2 2 2 2 2 c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 e e c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 e c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 e c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 2 2 2 e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e e e e e e 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e e e e c e e e e e e e e 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 c c e e e e e c c e e e e e e e e 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 2 2 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e c c c c c c c e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 e e e c c e e e e e c c c c e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 e e e c c e e e e e e e c c c e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 e e e e e e e e e e e e e e c c e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c 2 2 2 2 2 2 2 2 2 2 2 2 2 c 2 2 2 
2 2 2 2 e c c c e c c c c c c c c c c c c c c c c c c e e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e c c c c e c c e 2 2 2 2 2 2 2 2 2 2 c c 2 2 2 
2 2 2 2 c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e e e e 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e c c 2 2 2 2 2 2 c c c c c c c c c c c c c e 2 2 2 
2 2 2 c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 c c c c c c c c c c c c c c c c c c c c c c c c c 2 2 2 e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`)
game.setDialogFrame(img`
. . a a a a a a a a . . 
. . a a a a a a a a . . 
a a f f f f f f f f a a 
a a f f f f f f f f a a 
a a f f c c c c f f a a 
a a f f c c c c f f a a 
a a f f c c c c f f a a 
a a f f c c c c f f a a 
a a f f f f f f f f a a 
a a f f f f f f f f a a 
. . a a a a a a a a . . 
. . a a a a a a a a . . 
`)
game.setDialogCursor(img`
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . 2 2 4 4 4 4 4 4 4 2 2 . . 
. . 2 2 4 4 8 8 8 8 8 4 4 2 2 . 
. . 2 4 4 4 8 8 4 8 8 4 4 4 2 . 
. 2 2 4 4 4 8 4 4 4 8 4 4 4 2 2 
. 2 2 4 4 4 8 8 8 8 8 4 4 4 2 2 
. 2 2 4 4 8 8 4 4 4 8 8 4 4 2 2 
. 2 2 4 8 8 8 4 4 4 8 8 8 4 2 2 
. 2 2 4 2 2 2 4 4 4 2 2 2 4 2 2 
. 2 2 4 4 4 4 4 4 4 4 4 4 4 2 2 
. 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 
. 8 e 2 2 4 4 4 4 4 4 4 2 2 e 8 
. 8 e 2 2 2 2 2 2 2 2 2 2 2 e 8 
. . 8 e e 2 2 2 2 2 2 2 e e 8 . 
. . . 8 8 e e e e e e e 8 8 . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
`)
game.setDialogTextColor(7)
spawnDraqua()
loadLevel(level)
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    if (Drqaua.tileKindAt(TileDirection.Bottom, myTiles.tile23)) {
        level += 1
        loadLevel(level)
    }
})
game.onUpdate(function () {
    if (drqauaLives < 0 || Drqaua.y > 497) {
        game.over(false)
    }
})
game.onUpdate(function () {
    if (gameReady == 1) {
        if (Drqaua.vy >= 0) {
            if (armed == 0) {
                Drqaua.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . . . . . f a f . . . . . . f a f . . . . . . . . . . 
. . . . . . . . . . . f a f . . . . f a f . . . . . . . . . . . 
. . . . . . . . . . f a a a f f f f a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . . f a 1 f a a f 1 a f . . . . . . . . . . . 
. . . . . . . . . . . . f a a a a a a f . . . . . . . . . . . . 
. . . . . . . . . . . . . f a a a a f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f a a a a f f . . . . . . . . . . . . 
. . . . . . . . . . . f 7 7 7 7 7 7 7 7 f . . . . . . . . . . . 
. . . . . . . . . . f 7 7 7 7 7 7 7 7 7 7 f . . . . . . . . . . 
. . . . . . . . . f 7 7 7 7 7 8 7 7 7 7 7 7 f . . . . . . . . . 
. . . . . . . . . f 7 7 f 7 7 8 7 7 7 f 7 7 f . . . . . . . . . 
. . . . . . . . . f 7 7 f 7 7 7 7 7 7 f 7 7 f . . . . . . . . . 
. . . . . . . . . f a a f 7 7 7 7 7 7 f a a f . . . . . . . . . 
. . . . . . . . . . f f . f 7 7 7 7 f . f f . . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f a a f f a a f . . . . . . . . . . . . 
. . . . . . . . . . . f a a a f f a a a f . . . . . . . . . . . 
. . . . . . . . . . . . f f f . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
            } else {
                if (left == 1) {
                    Drqaua.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . 
. . . . . . . . . . f a f . . . . . . f a f . . . . . . 
. . . . . . . . . . . f a f . . . . f a f . . . . . . . 
. . . . . . . . . . f a a a f f f f a a a f . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . 
. . . . . . . . . . . f a 1 f a a f 1 a f . . . . . . . 
. . . . . . . . . . . . f a a a a a a f . . . . . . . . 
. . . . . . . . . . . . . f a a a a f . . . . . . . . . 
. . . . . . . . . . . . f f a a a a f f . . . . . . . . 
. . . . . . e d d . . f 7 7 7 7 7 7 7 7 f . . . . . . . 
. . . . 9 d d e f f f 7 7 7 7 7 7 7 7 7 7 f . . . . . . 
. . . . . d f a 7 7 7 7 7 7 7 8 7 7 7 7 7 7 f . . . . . 
. . . . . . f a 7 7 7 f f 7 7 8 7 7 7 f 7 7 f . . . . . 
. . . . . . . f f f f . f 7 7 7 7 7 7 f 7 7 f . . . . . 
. . . . . . . . . . . . f 7 7 7 7 7 7 f a a f . . . . . 
. . . . . . . . . . . . . f 7 7 7 7 f . f f . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . 
. . . . . . . . . . . . f a a f f a a f . . . . . . . . 
. . . . . . . . . . . f a a a f f a a a f . . . . . . . 
. . . . . . . . . . . . f f f . . f f f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
                } else {
                    Drqaua.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . 
. . . . . . . . . . f a f . . . . . . f a f . . . . . . 
. . . . . . . . . . . f a f . . . . f a f . . . . . . . 
. . . . . . . . . . f a a a f f f f a a a f . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . 
. . . . . . . . . . . f a 1 f a a f 1 a f . . . . . . . 
. . . . . . . . . . . . f a a a a a a f . . . . . . . . 
. . . . . . . . . . . . . f a a a a f . . . . . . . . . 
. . . . . . . . . . . . f f a a a a f f . . . . . . . . 
. . . . . . . . . . . f 7 7 7 7 7 7 7 7 f . . d d e . . 
. . . . . . . . . . f 7 7 7 7 7 7 7 7 7 7 f f f e d d 9 
. . . . . . . . . f 7 7 7 7 7 8 7 7 7 7 7 7 7 7 a f d . 
. . . . . . . . . f 7 7 f 7 7 8 7 7 7 f f 7 7 7 a f . . 
. . . . . . . . . f 7 7 f 7 7 7 7 7 7 f . f f f f . . . 
. . . . . . . . . f a a f 7 7 7 7 7 7 f . . . . . . . . 
. . . . . . . . . . f f . f 7 7 7 7 f . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 7 7 f . . . . . . . . 
. . . . . . . . . . . . f a a f f a a f . . . . . . . . 
. . . . . . . . . . . f a a a f f a a a f . . . . . . . 
. . . . . . . . . . . . f f f . . f f f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
                }
            }
        } else if (Drqaua.vy < 0) {
            if (puBootsEnabled == 1) {
                if (left == 1) {
                    Drqaua.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . . . . . f a f . . . . . . f a f . . . . . . . . . . 
. . . . . . . . . . . f a f . . . . f a f . . . . . . . . . . . 
. . . . . . . . . . f a a a f f f f a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a 1 f a a f 1 a a f . . . . . . . . . . 
. . . . . . . . . . . f a a a a a a a a f . . . . . . . . . . . 
. . . . . . . . . . f f f a a a a a a f . . . . . . . . . . . . 
. . . . . . . . . f a a f f a a a a f f . . . . . . . . . . . . 
. . . . . . . . . f 7 7 f f a a a a f f . . . . . . . . . . . . 
. . . . . . . . . f 7 7 7 7 7 7 7 7 7 7 f . . . . . . . . . . . 
. . . . . . . . . f 6 7 7 7 7 7 7 7 7 7 7 f . . . . . . . . . . 
. . . . . . . . . f 7 6 7 7 7 8 7 7 7 7 7 7 f . . . . . . . . . 
. . . . . . . . . f f f f 7 7 8 7 7 7 f 7 7 f . . . . . . . . . 
. . . . . . . . . . . . f 7 7 7 7 7 7 f 7 7 f . . . . . . . . . 
. . . . . . . . . . . . f 7 7 7 7 7 7 f a a f . . . . . . . . . 
. . . . . . . . . . . . . f 7 7 7 7 f . f f . . . . . . . . . . 
. . . . . . . . . . . . f 6 7 f f 6 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 2 2 f f 7 6 f . . . . . . . . . . . . 
. . . . . . . . . . . f 2 2 2 f f 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f 2 2 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f 2 2 2 f . . . . . . . . . . . 
. . . . . . . . . . . . 1 d . . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . d 1 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 d . . . . d 1 . . . . . . . . . . . . 
. . . . . . . . . . . . . d 1 . . 1 d . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
                } else {
                    Drqaua.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . . . . . f a f . . . . . . f a f . . . . . . . . . . 
. . . . . . . . . . . f a f . . . . f a f . . . . . . . . . . . 
. . . . . . . . . . f a a a f f f f a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a 1 f a a f 1 a a f . . . . . . . . . . 
. . . . . . . . . . . f a a a a a a a a f . . . . . . . . . . . 
. . . . . . . . . . . . f a a a a a a f f f . . . . . . . . . . 
. . . . . . . . . . . . . f a a a a f f a a f . . . . . . . . . 
. . . . . . . . . . . . f f a a a a f f 7 7 f . . . . . . . . . 
. . . . . . . . . . . f 7 7 7 7 7 7 7 f 7 7 f . . . . . . . . . 
. . . . . . . . . . f 7 7 7 7 7 7 7 7 f 7 6 f . . . . . . . . . 
. . . . . . . . . f 7 7 7 7 7 8 7 7 7 7 6 7 f . . . . . . . . . 
. . . . . . . . . f 7 7 f 7 7 8 7 7 7 f f f f . . . . . . . . . 
. . . . . . . . . f 7 7 f 7 7 7 7 7 7 f . . . . . . . . . . . . 
. . . . . . . . . f a a f 7 7 7 7 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . f f . f 7 7 7 7 f . . . . . . . . . . . . . 
. . . . . . . . . . . . f 7 6 f f 7 6 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 6 7 f f 2 2 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f 2 2 2 f . . . . . . . . . . . 
. . . . . . . . . . . . f 2 2 f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . f 2 2 2 f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f . . . d 1 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 1 d . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 d . . . . d 1 . . . . . . . . . . . . 
. . . . . . . . . . . . . d 1 . . 1 d . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
                }
            } else {
                if (left == 1) {
                    Drqaua.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . . . . . f a f . . . . . . f a f . . . . . . . . . . 
. . . . . . . . . . . f a f . . . . f a f . . . . . . . . . . . 
. . . . . . . . . . f a a a f f f f a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a 1 f a a f 1 a a f . . . . . . . . . . 
. . . . . . . . . . . f a a a a a a a a f . . . . . . . . . . . 
. . . . . . . . . . f f f a a a a a a f . . . . . . . . . . . . 
. . . . . . . . . f a a f f a a a a f f . . . . . . . . . . . . 
. . . . . . . . . f 7 7 f f a a a a f f . . . . . . . . . . . . 
. . . . . . . . . f 7 7 7 7 7 7 7 7 7 7 f . . . . . . . . . . . 
. . . . . . . . . f 6 7 7 7 7 7 7 7 7 7 7 f . . . . . . . . . . 
. . . . . . . . . f 7 6 7 7 7 8 7 7 7 7 7 7 f . . . . . . . . . 
. . . . . . . . . f f f f 7 7 8 7 7 7 f 7 7 f . . . . . . . . . 
. . . . . . . . . . . . f 7 7 7 7 7 7 f 7 7 f . . . . . . . . . 
. . . . . . . . . . . . f 7 7 7 7 7 7 f a a f . . . . . . . . . 
. . . . . . . . . . . . . f 7 7 7 7 f . f f . . . . . . . . . . 
. . . . . . . . . . . . f 6 7 f f 6 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f a a f f 7 6 f . . . . . . . . . . . . 
. . . . . . . . . . . f a a a f f 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f a a f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f a a a f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
                } else {
                    Drqaua.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . . . . . f a f . . . . . . f a f . . . . . . . . . . 
. . . . . . . . . . . f a f . . . . f a f . . . . . . . . . . . 
. . . . . . . . . . f a a a f f f f a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a a a a a a a a a f . . . . . . . . . . 
. . . . . . . . . . f a a 1 f a a f 1 a a f . . . . . . . . . . 
. . . . . . . . . . . f a a a a a a a a f . . . . . . . . . . . 
. . . . . . . . . . . . f a a a a a a f f f . . . . . . . . . . 
. . . . . . . . . . . . . f a a a a f f a a f . . . . . . . . . 
. . . . . . . . . . . . f f a a a a f f 7 7 f . . . . . . . . . 
. . . . . . . . . . . f 7 7 7 7 7 7 7 f 7 7 f . . . . . . . . . 
. . . . . . . . . . f 7 7 7 7 7 7 7 7 f 7 6 f . . . . . . . . . 
. . . . . . . . . f 7 7 7 7 7 8 7 7 7 7 6 7 f . . . . . . . . . 
. . . . . . . . . f 7 7 f 7 7 8 7 7 7 f f f f . . . . . . . . . 
. . . . . . . . . f 7 7 f 7 7 7 7 7 7 f . . . . . . . . . . . . 
. . . . . . . . . f a a f 7 7 7 7 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . f f . f 7 7 7 7 f . . . . . . . . . . . . . 
. . . . . . . . . . . . f 7 6 f f 7 6 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 6 7 f f a a f . . . . . . . . . . . . 
. . . . . . . . . . . . f 7 7 f f a a a f . . . . . . . . . . . 
. . . . . . . . . . . . f a a f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . f a a a f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
                }
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    for (let value42 of sprites.allOfKind(SpriteKind.Enemy)) {
        value42.vx = value42.vx * -1
    }
    if (gameReady == 1) {
        if ((Drqaua.tileKindAt(TileDirection.Right, myTiles.tile21) || Drqaua.tileKindAt(TileDirection.Right, myTiles.tile22)) && numHumans > 0) {
            game.showLongText("Dra'qua, Mars can only be salvaged when all the humans are gone!", DialogLayout.Center)
            Drqaua.x += -3
        }
        if (numHumans == 0) {
            unlockLevel()
        }
    }
})
game.onUpdateInterval(1000, function () {
    for (let value of sprites.allOfKind(SpriteKind.platform)) {
        value.vy = -92
    }
})
game.onUpdateInterval(1000, function () {
    if (level == 2) {
        spawnHazards()
    }
})
