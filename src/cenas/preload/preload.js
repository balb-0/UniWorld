export class preload extends Phaser.Scene{
    constructor() {
        super('preload')
    }

    /* função preload do phaser3 para o carregamento dos assets utilizados -> TODOS os assets/imagens que são
    utilizados no jogo são pré-carregados neste arquivo. Cada asset recebeu um nome autoexplicativo para que 
    você desenvolvedor consiga saber do que cada um se trata.*/
    preload() {
        // carregamento de imagens, sprites e mapas que serão utilizados nas próximas cenas
        this.load.image('ground', './././assets/map/Terrain (64x64)).png');
        this.load.image('placa', './././assets/map/plaquinha.png');
        this.load.image('cano', './././assets/map/cano.png');
        this.load.image('otherBlocks', './././assets/map/Legacy-Fantasy - High Forest 2.3/Assets/water.png');
        this.load.image('elevador', './././assets/map/tileset_elevator.png');
        this.load.image('background', './././assets/bg_sky.png');
        this.load.image('objetos', './././assets/objetos.png');
        this.load.tilemapTiledJSON('map', './././assets/map/map.json');
        this.load.image('ground1', './././assets/map2/testeaaa.png');
        this.load.image('bg1', './././assets/map2/Wallpaper.png');
        this.load.image('objetos1', './././assets/map2/Fundo.png');
        this.load.tilemapTiledJSON('map2', './././assets/map2/map2.json');
        this.load.image('letraE', './././assets/letter-E.png');
        this.load.image('down_arrow', './././assets/down_arrow.png');
        this.load.image('up_arrow', './././assets/up_arrow.png')
        this.load.image('2x', './././assets/2x.png')
        this.load.image('space', './././assets/space.png')
        this.load.tilemapTiledJSON('level1', './././assets/level1/map1.json');
        this.load.image('bg_fase1', './././assets/level1/Background.png');
        this.load.image('marcas_fase1', './././assets/level1/objects.png');
        this.load.image('ground_fase1', './././assets/level1/Terrain (16 x 16).png');
        this.load.image ('plataforma_1', './././assets/level1/plataforma_1.png')
        this.load.image('elevadores', './././assets/level1/tileset_elevator.png')
        this.load.tilemapTiledJSON('level2', './././assets/level2/fase2.json');
        this.load.image ('chao', './././assets/level2/azul.png');
        this.load.image ('fundo', './././assets/level2/fundo.png');
        this.load.image ('plataforma_gelo', './././assets/level2/plataforma_2.png');
        this.load.image ('decoração', './././assets/level2/decoração.png');
        this.load.image ('logo', './././assets/level2/logo.png');
        this.load.image ('produtos', './././assets/level2/produtos.png');
        this.load.tilemapTiledJSON('level3', './././assets/level3/level3.json');
        this.load.image('ground3_1', './././assets/level3/walls_background.png');
        this.load.image('ground3_2', './././assets/level3/Terrain (64x64)).png');
        this.load.image('ground3_3', './././assets/level3/Tile-Sets (64-64).png');
        this.load.image('bg3', './././assets/level3/background.png');
        this.load.image ('plataforma_hellmans', './././assets/level3/plataforma_3.png');
        this.load.image ('plataforma_tijolos', './././assets/level3/plataforma_t.png');
        this.load.image('objetos3', './././assets/level3/objetos.png');
        this.load.tilemapTiledJSON('level4', './././assets/level4/level4.json');
        this.load.image('bg5', './././assets/level4/background.png');
        this.load.image ('plataforma_neve', './././assets/level4/plataforma_4.png')
        this.load.image('objetos5', './././assets/level4/objects.png');
        this.load.image('sup', './././assets/level4/objects_sup.png');
        this.load.image('ground5', './././assets/level4/SnowyTileset (1).png');
        this.load.tilemapTiledJSON('cenaFinal', './././assets/mapfinal/mapfinal.json');
        this.load.image('bgFinal', './././assets/mapfinal/backgroundfinal.png');
        this.load.image('marcas', './././assets/mapfinal/marcas.png');
        this.load.image('groundFinal', './././assets/mapfinal/testeaaa.png');
        this.load.image('bgMainMenu', './././assets/fundoMainMenu.png')
        this.load.image('controles', './././assets/controles.png')
        this.load.image('configs', './././assets/configs.png')
        this.load.image('newGame', './././assets/newGame.png')
        this.load.image('playMain', './././assets/playButton.PNG')
        this.load.image('uniWorld', './././assets/tituloMain.png')
        this.load.image('moveSet', './././assets/moveSet.png')
        this.load.image('dicionario', './././assets/dicionario.png')
        this.load.image('teclasWASD', './././assets/teclasWASD.png')
        this.load.image('teclasSetas', './././assets/teclasSetas.png')
        this.load.image('teclasSpace', './././assets/teclasSpace.png')
        this.load.image('dash', './././assets/dash.png')
        this.load.image('mute', './././assets/mute.png')
        this.load.image('som', './././assets/som.png')
        this.load.image('idioma', './././assets/idioma.png')
        this.load.image('credVitor', './././assets/credVitor.png')
        this.load.image('credLuiza', './././assets/credLuiza.png')
        this.load.image('credDaniel', './././assets/credDaniel.png')
        this.load.image('credCarol', './././assets/credCarol.png')
        this.load.image('credIgor', './././assets/credIgor.png')
        this.load.image('credThalyta', './././assets/credThalyta.png')
        this.load.image('credJoao', './././assets/credJoao.png')
        this.load.image('bgGameOver', './././assets/bgGameOver.png')
        this.load.image('Dicionariobg', './././assets/Dicionariobg.png')
        this.load.image('videobg', './././assets/videobg.png')
        this.load.image('estrategiabg', './././assets/estrategiabg.png')
        this.load.image('educacionalbg', './././assets/educacionalbg.png')
        this.load.image('Unabg', './././assets/Unabg.png')
        this.load.image('Timebg', './././assets/Timebg.png')
        this.load.image('elevador1', './././assets/elevador1.png')
        this.load.image('elevador2', './././assets/elevador2.png')
        this.load.image('elevador3', './././assets/elevador3.png')
        this.load.image('elevador4', './././assets/elevador4.png')
        this.load.image('elevadorfinal', './././assets/elevadorfinal.png')
        this.load.image('moedaCount', './././assets/moedaCount.png')
        this.load.image('vidasCount', './././assets/vidasCount.png')
        this.load.image('vidasCountVazio', './././assets/vidasCountVazio.png')
        this.load.image('vidas3', './././assets/vidasCount-3.png')
        this.load.image('vidas2', './././assets/vidasCount-2.png')
        this.load.image('vidas1', './././assets/vidasCount-1.png')
        this.load.image('fundoPause', './././assets/fundoPause.png')
        this.load.image('dicionarioIconRoll', './././assets/dicionarioIconRoll.png')
        this.load.image('pergaminhoDicionario', './././assets/pergaminho.png')
        this.load.image('unileverPergaminho', './././assets/unileverLogoGrande.png')
        this.load.image('dicionarioPergaminho', './././assets/dicionarioPerg.png')
        this.load.image('spawndicionario', './././assets/Dicionário.png')
        this.load.image('bg-unilever', './././assets/unilever_background.jpg')
        this.load.image('menu', './././assets/mainMenu.png')
        this.load.image('reiniciar', './././assets/reiniciar.png')
        this.load.image('gameOver', './././assets/gameOver.png')
        this.load.image('interacoes', './././assets/interacoes.png')
        this.load.image('creditos', './././assets/creditos.png')
        this.load.image ('clearC', './././assets/colecionaveis/clearColec.png')
        this.load.image ('cifC', './././assets/colecionaveis/cifColec.png')
        this.load.image ('closeupC', './././assets/colecionaveis/closeupColec.png')
        this.load.image ('doveC', './././assets/colecionaveis/doveColec.png')
        this.load.image ('hellmansC', './././assets/colecionaveis/hellmannsColec.png')
        this.load.spritesheet ('knorC', './././assets/colecionaveis/knorrColec.png', {
            frameWidth: 1024,
            frameHeight: 1024
        })
        this.load.spritesheet ('omoC', './././assets/colecionaveis/omoColec.png', {
            frameWidth:1024,
            frameHeight:580
        })
        this.load.spritesheet ('rexonaC', './././assets/colecionaveis/rexonaColec.png', {
            frameWidth:1024,
            frameHeight: 1024
        })
        this.load.spritesheet('checkpoint', './././assets/checkPoint.png', {
            frameWidth: 192,
            frameHeight: 192
        })
        this.load.spritesheet('spriteSom', './././assets/spriteSom.png', {
            frameWidth: 336, 
            frameHeight: 336
        })
        this.load.spritesheet('brFlag', './././assets/brFlag.png', {
            frameWidth: 1024,
            frameHeight: 712
        })
        this.load.spritesheet('usFlag', './././assets/usFlag.png', {
            frameWidth: 1024,
            frameHeight: 712
        })
        this.load.spritesheet('spainFlag', './././assets/spainFlag.png', {
            frameWidth: 1024,
            frameHeight: 712
        })
        this.load.spritesheet('teclasOutras', './././assets/teclasOutras.png', {
            frameWidth: 320,
            frameHeight: 320
        })
        this.load.spritesheet('moeda', './././assets/moeda.png', {
            frameWidth: 64,
            frameHeight: 64
        })
        this.load.spritesheet('npcAndando', './././assets/sprites_side_NPC.png', {
            frameWidth: 34,
            frameHeight: 64
        })
        this.load.spritesheet('npcFrente', './././assets/sprites_front_NPC.png', {
            frameWidth: 34,
            frameHeight: 64
        })
        this.load.spritesheet('checkpoint', './././assets/checkPoint.png', {
            frameWidth: 192, 
            frameHeight: 192
        });
        this.load.spritesheet('lev', './././assets/spritesheettest.png', {
            frameWidth: 128, 
            frameHeight: 128 
        });
        this.load.image('balaoFala', './././assets/balaodefala.png')
        this.load.audio('mainMenu', './././assets/FM/mainMenu.mp3')
        this.load.audio('main', './././assets/FM/main.mp3')
    };
    /* Especifica a cena onde o jogo começará -> o jogo começará na cena que você escrever.
    O 'mainMenu' foi a cena desenvolvida para que o jogo comece.*/
    create() {
        this.scene.start('mainMenu')
    };
}
