// Nessa classe é desenvolvida a tela de controles 
export class controls extends Phaser.Scene {
    
    // Constrói a chave que chama a classe
    constructor() {
        super({key: 'controls'})
        
    }


    create() {

        // Adiciona a imagem do fundo da tela de controles, que é a mesma do menu principal
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgMainMenu').setScale(0.6).setScrollFactor(0)

        // Título "controles", que da nome à tela
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.15, 'controles').setScale(.6)
        
        // Configurando os limites de tamanho da câmera principal da cena
        this.cameras.main.setBounds(0, 0, this.sys.game.config.width, 1400)

        // Configura os limites do mundo físico na cena.
        this.physics.world.setBounds(0, 0, this.sys.game.config.width, 1400)

        // Adição do título "movimentações" à cena 
        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.35, 'moveSet').setScale(0.25)

        // Setando que a tecla ESC faça voltar ao menu principal 
        var botao = this.add.sprite(this.sys.game.config.width * 0.9, this.sys.game.config.height * 0.9, 'teclasOutras', 4).setScale(0.25).setInteractive().setScrollFactor(0)
        botao.on('pointerdown', function (event) {
            this.scene.start('mainMenu')
        }, this)

        // Quando o cursor estiver sobre o botão, o estilo dele varia
        botao.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        // Quando o cursor não estiver mais sobre o botão, o estilo dele volta ao padrão
        botao.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'
        })

        this.cursors = this.input.keyboard.createCursorKeys()
        // Determinando ESC como uma tecla clicável
        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

        // Determinando ENTER como uma tecla clicável
        this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)

        // Função de rolar a página no eixo Y
        this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY) => {
            this.cameras.main.scrollY += deltaY * 0.5;
        });

        // Adiciona as imagens das palavras que são adicionadas na tela de controles
        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.7, 'dash').setScale(.25)
        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height, 'dicionario').setScale(0.25)
        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.33, 'configs').setScale(0.25)
        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.64, 'mute').setScale(0.25)
        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.92, 'interacoes').setScale(0.25)

        // Adicionam diferentes imagens de teclas que serão mostradas na tela de controle, como demostração de funcionalidade
        this.add.image(this.sys.game.config.width * 0.4, this.sys.game.config.height * 0.5, 'teclasWASD').setScale(.07)
        this.add.image(this.sys.game.config.width * 0.6, this.sys.game.config.height * 0.5, 'teclasSetas').setScale(.07)
        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.8, 'teclasSpace').setScale(.07)
        this.add.sprite(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.12, 'teclasOutras', 0).setScale(0.2)
        this.add.sprite(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.45, 'teclasOutras', 3).setScale(0.2)
        this.add.sprite(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.75, 'teclasOutras', 5).setScale(0.2)
        this.add.sprite(this.sys.game.config.width * 0.5, this.sys.game.config.height * 2.02, 'teclasOutras', 2).setScale(0.2)




    }

    update() {

        // Se a tecla ESC for pressionada, o jogo voltará à cena anterior, o menu principal
        if (this.esc.isDown || this.enter.isDown) {
            this.scene.start('mainMenu')
        }
    }
}
