/* Definição da classe 'moeda' herdando a função Phaser.Physics.Arcade.Sprite */
export default class moeda extends Phaser.Physics.Arcade.Sprite {
    
    static pontuacao = 0
    static texto = null
    
    /** Esse trecho difine o construtor da classe 'moedas', que inicializa uma instância da sprite de física
     *  arcade nomeada 'texture', que nesse caso será representada pela sprite da moeda  */
    constructor(scene, x, y, texture) {
        super(scene, x, y, 'moeda');

        /**Configura e inicializa várias propriedades e comportamentos do sprite vidasCount quando ele é criado na cena do jogo.  */
        //Adicionar o sprite à cen
        scene.add.existing(this)
        // Habilita seu corpo à cena
        scene.physics.world.enableBody(this, 0);
        // Configura colisões com os limites da cena
        this.setCollideWorldBounds(true);
        // inicializar propriedades para rastrear a moeda associada ao jogador e sua pontuação.
        if (moeda.texto === null) {
            moeda.texto = scene.add.text(128, 45, moeda.pontuacao > 0 ? moeda.pontuacao.toString() : '', {
                fontSize: '40px',
                fill: '#252525',
                fontFamily: 'pixel Font'
            }).setScrollFactor(0).setDepth(2);
        }
    };

    spawnMoedas(scene, chr, piso) {
        // Aqui é adicionado a animação do contador de moedas
        scene.add.sprite(scene.sys.game.config.width * 0.1, scene.sys.game.config.height * 0.1, 'moedaCount', 0).setScale(0.08).setScrollFactor(0)

         // Trecho criado para mostrar as informação/texto sobre a moeda na tela
        this.texto = scene.add.text(128, 45, '', {
            fontSize: '40px',
            fill: '#252525',
            fontFamily: 'pixel Font'
        }) 
        this.texto.setScrollFactor(0).setDepth(2)

        //criando uma cena animada da moeda girando
        scene.anims.create({
            key: 'moedaGirando',
            frameRate: 7,
            frames: scene.anims.generateFrameNumbers('moeda', {start: 0, end: 6}),
            repeat: -1
        })

        // Aqui é implementada a parte toda a parte física da moeda, assim como, o efetivo sistema de contagem de moedas coletadas 
        this.body.setAllowGravity(false);
        this.setCollideWorldBounds(true);
        scene.physics.add.collider(this, piso);
        scene.physics.add.overlap(chr, this, () => {
            this.disableBody(true, true);
            moeda.pontuacao += 1; 
            moeda.texto.setText(moeda.pontuacao);
        }, null, this);

        // Adiciona a animação da moeda girando na tela
        this.anims.play('moedaGirando')
    }
}