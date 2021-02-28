// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`4000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020201010101010202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202030202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202010101010101020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020201010101010101020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202010101010101010202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020101010202020202020202020202020202020202020202020202020202020202020202020202020101010101010101020202020202020202020202020202020101010102020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020101010101020202020202020202020202020202020202020202020202020202020101010101010102020202020202020202020202020202020202020202020101010101010202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020201010101010101010102020202020202020202020202020202020202020202020202020202`, img`
................................................................
................................................................
................................................................
................................................................
........22222...................................................
................................................................
.222222.........................................................
..............2222222...........................................
................................................................
................................................................
..................2222222.......................................
.................................222............................
........22222222................2222............................
...............................22222............................
2222222.......................222222............................
...........................222222222............................
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "iRou":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.