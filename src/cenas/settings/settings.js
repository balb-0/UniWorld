// Cria a classe de configurações do jogo
export class settings extends Phaser.Scene {
    constructor() {
        super({key: 'settings'}) // Atribui a maneira que esta cena é referida e utilizada no código
        this.somAtivo = true // Define a variável somAtivo que será utilizada posteriormente
        
    }
    
    create() {
        // Adiciona imagem de background do menu, nas posições e dimensões especificadas
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgMainMenu').setScale(0.6)
        // Adiciona imagem do título "configurações" à tela, nas posições e dimensões especificadas
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.15, 'configs').setScale(.5)
        
        // Atribui os limites da câmera
        this.cameras.main.setBounds(0, 0, this.sys.game.config.width, 1200)
        // Atribui os limites físicos da cena
        this.physics.world.setBounds(0, 0, this.sys.game.config.width, 1200)

        // Cria a váriavel "button" que adiciona a sprite revelando teclas diversas utilizadas no jogo 
        var button = this.add.sprite(this.sys.game.config.width * 0.9, this.sys.game.config.height * 0.9, 'teclasOutras', 4).setScale(0.25).setInteractive()
        button.on('pointerdown', function (event) {
            this.scene.start('mainMenu')
        }, this)

        // Adiciona o design diferenciado quando o cursor passa sobre a tela
        button.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        // Adiciona o design padrão do botão quando o cursor deixa de estar sobre o botão
        button.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'
        })
        // Adiciona a funcionalidade de utilizar teclas do teclado, como cursores, esc e enter
        this.cursors = this.input.keyboard.createCursorKeys()
        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)

        // Adiciona imagem e sprite de "som"
        this.add.image(this.sys.game.config.width * 0.45, this.sys.game.config.height * 0.44, 'som').setScale(.25)
        this.som = this.add.sprite(this.sys.game.config.width * 0.58, this.sys.game.config.height * 0.44, 'spriteSom', 2).setScale(0.3).setInteractive()

        // Design cursor sobre o botão
        this.som.on('pointerover', () => {
            this.som.setFrame(this.somAtivo ? 3:5)
            this.game.canvas.style.cursor = 'pointer'
        })

        // Design padrão do cursor 
        this.som.on('pointerout', () => {
            this.som.setFrame(this.somAtivo ? 2:4)
            this.game.canvas.style.cursor = 'default'

        })
        // Desativa ou ativa som do jogo conforme o jogador selecionar a opção
        this.som.on('pointerdown', () => {
            this.somAtivo = !this.somAtivo
            if(this.somAtivo) {
                this.sound.resumeAll()
            } else {
                this.sound.pauseAll()
            }
            this.som.setFrame(this.somAtivo ? 3:5)
        })
        // Adiciona imagem da palavra "controles" que aparece na tela
        this.controles = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.58, 'controles').setScale(.25).setInteractive()

        // Inicia a cena de controles quando o jogador selecionar a opção de visualizar os controles
        this.controles.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        // botão estilo padrão
        this.controles.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'
        })

        // Se o botão de "controles" for selecionado, a cena de controles será iniciada "
        this.controles.on('pointerdown', () => {
            this.scene.start('controls') 
        })

        // Adiciona imagem da palavra "créditos" que aparece na tela
        this.creditos = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.72, 'creditos').setScale(.25).setInteractive()
        
        // Inicia a cena de "créditos" quando o jogador selecionar a opção de visualizar os créditos
        this.creditos.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        // botão estilo padrão
        this.creditos.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'

        })

        // Quando o botão "créditos" for selecionado, a cena Créditos será iniciada
        this.creditos.on('pointerdown', () => {
            this.scene.start('creditos')
        })

    }

    // Retoma a cena para o Menu Principal após a tecla esc ser selecionada
    update() {
        if (this.esc.isDown || this.enter.isDown) {
            this.scene.start('mainMenu')
            this.selectedItemIndex = 0
        }

    }
}