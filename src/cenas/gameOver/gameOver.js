// importa a classe moeda para esse arquivo.
import moeda from "../entities/moeda.js"
import centroDeEventos from "../centroDeEventos/centroDeEventos.js";

//Define a classe game over que herda da classe Phaser Scene
export class gameOver extends Phaser.Scene {

    /* Construindo/Instanciando os objetos que serão utilizados na classe "gameOver",*/
    constructor() {
        super({ key: 'gameOver' })
        this.selectedItemIndex = 0
        this.arrowKeysEnabled = true
        moeda.texto = null
        this.reiniciarCena = null
    }
    
    
    create() {

        // Adiciona ao arquivo a imagem de fundo (background) da tela de Game Over. 
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgGameOver').setScale(0.6)

        // Adiciona ao arquivo a imagem das letras estilizadas que escrevem o "GAME OVER".
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.33, 'gameOver').setScale(0.3)

        // Adiciona a posição exata dos itens que será exibidos na tela.
        this.menuItemsPositions = [
            {x: this.sys.game.config.width * 0.5, y: this.sys.game.config.height * 0.8},
            {x: this.sys.game.config.width * 0.5, y: this.sys.game.config.height * 0.9}
        ]

        // referencia os itens que são selecionáveis na tela de Game Over.
        this.menuItems = [

            // Adiciona a imagem do botão de reiniciar o jogo.
            this.add.image(this.menuItemsPositions[0].x, this.menuItemsPositions[0].y, 'reiniciar').setScale(0.16),
            
            // Adeiciona a imagem do botão de voltar ao menu principal.
            this.add.image(this.menuItemsPositions[1].x, this.menuItemsPositions[1].y, 'menu').setScale(0.2),
        ]
        /* Cria a flechinha/cursor que é mostrada na tela para indicar em qual dos botões o usuário
         está "pré-selecionado/selecionado momentaneamente"*/
        this.arrow = this.add.image(this.menuItemsPositions[0].x - 250, this.menuItemsPositions[0].y, 'playMain').setScale(0.02)
        
        /* Cria um objeto "cursors" que contém referências às teclas de seta do
         teclado (cima, baixo, esquerda, direita) que o jogador pode usar para navegar pelo menu.*/
        this.cursors = this.input.keyboard.createCursorKeys()

        // Cria a referência a tecla ENTER, que quando pressionada irá selecionar a respectiva função
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        
        /* Eedefine o índice do item selecionado para o valor inicial, que é 0. Isso significa que,
         sempre que a tela de Game Over for exibida novamente, o cursor será posicionado no primeiro item do menu.*/
        this.resetarMenu()

        /* Redefine o estado de moedas no jogo, que é 0. Ou seja, o contador de medas zera quando o jogador morre*/
        this.resetarMoedas()

        this.reiniciar()
    }

    update(time) {
 
        /* Permite ao jogador navegar pelo menu de Game Over usando as teclas de seta para cima e para baixo, garantindo que a
         navegação seja limitada ao escopo do menu e fornecendo um feedback visual por meio do cursor.*/
        if (this.arrowKeysEnabled == true) {
            if (this.cursors.up.isDown && this.selectedItemIndex > 0) {
                this.selectedItemIndex--;
                this.moverSeta();
                this.desabilitarTeclasSetaTemporariamente(time);
            /* Impede que o jogador faça seleções rápidas demais ao desativar temporariamente
           as teclas de navegação após uma seleção*/
            } else if (this.cursors.down.isDown && this.selectedItemIndex < this.menuItems.length - 1) {
                this.selectedItemIndex++;
                this.moverSeta();
                this.desabilitarTeclasSetaTemporariamente(time);
            }
        }

        // Desenvolve a função de Começar a cena 1 do jogo caso o botão de reiniciar seja selecionado.
        if (this.selectedItemIndex === 0 && this.enterKey.isDown) {
            this.scene.start(this.reiniciarCena)
          // Desenvolve a função de voltar ao menu principal caso ele seja selecionado.
        } else if (this.selectedItemIndex === 1 && this.enterKey.isDown) {
            this.scene.start('mainMenu')
        }
    }

    /* Assegura que o cursor seja movido visualmente para o item do menu que está
     atualmente selecionado, posicionando-o à esquerda do item selecionado. */
    moverSeta() {
        let selectedItemPosition = this.menuItemsPositions[this.selectedItemIndex];
        this.arrow.x = selectedItemPosition.x - 250; 
        this.arrow.y = selectedItemPosition.y;
    }
    // Desabilita a movimentação do cursor temporariamente após a seleção de uma opção.
    desabilitarTeclasSetaTemporariamente() {
        this.arrowKeysEnabled = false;
        this.time.delayedCall(150, () => {
            this.arrowKeysEnabled = true;
        }, [], this);
    }

    /*garante que o cursor comece no mesmo ponto sempre que a tela de Game Over for exibida novamente.*/
    resetarMenu() {
        this.selectedItemIndex = 0
    }

    /* Reinicia a contagem da pontuação das moedas e limpa qualquer texto relacionado à
     pontuação que possa estar sendo exibido na tela*/
    resetarMoedas() {
        moeda.texto = null
        moeda.pontuacao = 0
    }

    reiniciar() {
        centroDeEventos.emit('gameOver')
        
        centroDeEventos.on('Cena1', (scene) => {
            this.reiniciarCena = scene
        })
        centroDeEventos.on('Level1', (scene) => {
            this.reiniciarCena = scene;
        })
        centroDeEventos.on('Level2', (scene) => {
            this.reiniciarCena = scene;
        })
        centroDeEventos.on('Level3', (scene) => {
            this.reiniciarCena = scene;
        })
        centroDeEventos.on('Level4', (scene) => {
            this.reiniciarCena = scene;
        })
    }
}