// Importa a classe música do arquivo que ela foi criada;
import { music } from '../music/music.js'

/* cria a classe "mainMenu", que é a tela incial -> de quando o usuário inicia o jogo;
essa classe está herdando as funções de Phaser.Scene*/
export class mainMenu extends Phaser.Scene {

    /* Instancia novos objetos que serão utilizados nesta classe*/
    constructor() {
        //chama o construtor da classe pai, que neste caso é Phaser.Scene.
        super({key: 'mainMenu'})
        //Define as variáveis que serão construídas.
        this.selectedItemIndex = 0
        this.arrowKeysEnabled = true
        this.playingSong = false
        this.menuSong = null
    }

    create() {
        // adiciona as imagens do background e letreiro (título) com nome do jogo.
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgMainMenu').setScale(0.6)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 4, 'uniWorld').setScale(0.45)
        
        // define as posições dos intens que aparecerão no menu.
        this.menuItemsPositions = [
            {x: this.sys.game.config.width * 0.51, y: this.sys.game.config.height * 0.7},
            {x: this.sys.game.config.width / 2, y: this.sys.game.config.height * 0.78},
            {x: this.sys.game.config.width / 2, y: this.sys.game.config.height * 0.86}
        ]

        // adiciona posição e tamanho (escala) dos botões interativos dos controles, configurações e novo jogo.
        this.menuItems = [
            this.add.image(this.menuItemsPositions[0].x, this.menuItemsPositions[0].y, 'newGame').setScale(0.2),
            this.add.image(this.menuItemsPositions[1].x, this.menuItemsPositions[1].y, 'controles').setScale(0.2),
            this.add.image(this.menuItemsPositions[2].x, this.menuItemsPositions[2].y, 'configs').setScale(0.2),
        ]

        // adiciona imagem do botão de start do jogo, na tela.
        this.arrow = this.add.image(this.menuItemsPositions[0].x - 200, this.menuItemsPositions[0].y, 'playMain').setScale(0.018)

        // adiciona cursores á tela.
        this.cursors = this.input.keyboard.createCursorKeys()

        // Configurando a tecla "ENTER" para que ela funcione devidamente e quando precionada realmente acione algum dos botões e efetue alguma ação.
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        
        // pausa da cena "hud".
        this.scene.stop('hud')

        // reseta o menu.
        this.resetarMenu()
        
        // Ativa a música na cena.
        music(this, 'mainMenu')     
    }

    update(time) {

        // habilita funções de navegar pelo menu usando as setas do teclado.
        if (this.arrowKeysEnabled == true) {
            if (this.cursors.up.isDown && this.selectedItemIndex > 0) {
                this.selectedItemIndex--
                this.moverSeta()
                this.desabilitarTeclasSetaTemporariamente(time)
            } else if (this.cursors.down.isDown && this.selectedItemIndex < this.menuItems.length - 1) {
                this.selectedItemIndex++;
                this.moverSeta()
                this.desabilitarTeclasSetaTemporariamente(time)
            }
        }

        // configura o funcionameto correto da tecla "ENTER".
        if (this.selectedItemIndex === 0 && this.enterKey.isDown) {
            this.scene.start('bloquearFaseFinal')
        } else if (this.selectedItemIndex === 1 && this.enterKey.isDown) {
            this.scene.start('controls')
        } else if (this.selectedItemIndex === 2 && this.enterKey.isDown) {
            this.scene.start('settings')
        }
    }

    // Cria uma função que seleciona itens com as setas e o "ENTER".
    moverSeta() {
        let selectedItemPosition = this.menuItemsPositions[this.selectedItemIndex]
        this.arrow.x = selectedItemPosition.x - 200
        this.arrow.y = selectedItemPosition.y
    }

    // Criar a função desativar navegar com as setas (temporariamente) para evitar bugs como pular itens do menu.
    desabilitarTeclasSetaTemporariamente() {
        this.arrowKeysEnabled = false;
        this.time.delayedCall(150, () => {
            this.arrowKeysEnabled = true;
        }, [], this);
    }

    // função resetar menu (voltar ao padrão).
    resetarMenu() {
        this.selectedItemIndex = 0
    }
}