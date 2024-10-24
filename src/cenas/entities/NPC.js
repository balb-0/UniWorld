// Arquivo que cria a classe NPC, que será o persongaem secundário implementado em diferentes fases.
export default class NPC extends Phaser.Physics.Arcade.Sprite{
    // Em tese esse trecho  em tese inicia uma instância de sprite física chamada  'NPC' -> baseando-me na moeda
    constructor(scene, x, y, texture) {
        super(scene, x, y, 'NPC');
        scene.physics.world.enableBody(this, 0);
        this.setCollideWorldBounds(true);


        // Essa parte do código é para adicionar a cena à tela
        scene.add.existing(this)
    };
    
    animaçãoPersonagem(scene){
        //criando uma cena animada do NPC andando
        scene.anims.create({
            key: 'npcTeste',
            frameRate: 9,
            frames: scene.anims.generateFrameNumbers('npcFrente', {start: 1, end: 1}),
            repeat: -1
        })
    }

    adicionarPersonagem(scene, piso) {
        // Colisão com o mapa
        scene.physics.add.collider(this, piso);
        this.body.setAllowGravity(false);
        this.anims.play('npcTeste')
    }

    create(){

    }

    update(){
        
    }

}
