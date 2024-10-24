// Este arquivo desenvolve os Checkpoint e seu funcionameto. 
export default class checkpoint extends Phaser.Physics.Arcade.Sprite {
    
    //// Constrói a instância da cena, de localização do objeto e textura/design.
    constructor(scene, x, y, texture) {
        super(scene, x, y, 'checkpoint');
        //// Adiciona o objeto checkpoint à cena atual. Isso significa que o objeto será renderizado e processado pela cena
        scene.add.existing(this)

        //// Habilita o corpo físico para o objeto checkpoint dentro do mundo físico da cena.
        scene.physics.world.enableBody(this, 0);

        // Define se o objeto checkpoint deve ou não colidir com os limites do mundo físico da cena.
        this.setCollideWorldBounds(true);
        
        /* Essas coordenadas são usadas para definir a posição inicial do objeto e também são armazenadas nas propriedades
         MorreX e MorreY, que podem ser usadas posteriormente para redefinir a posição do objeto (respawn).*/
        this.MorreX = x;
        this.MorreY = y;
    };

    /* Configura a aparência visual do objeto checkpoint adicionando uma placa de identificação e iniciando uma animação.*/
    adicionarPlaca() {
        this.anims.play('idle', true);
        this.setSize(120, 150).setOffset(40, 40);
    }

    // Cria a animação que será usada para o checkpoint.
    criarAnimacao() {
        this.scene.anims.create({
            key: 'idle',
            frameRate: 10,
            frames: this.scene.anims.generateFrameNumbers('checkpoint', { start: 0, end: 9 }),
            repeat: -1,
        });
    }
};