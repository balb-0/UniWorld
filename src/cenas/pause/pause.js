// importa a classe moeda
import moeda from "../entities/moeda.js"

// Definição da classe "pause" que herda a função Phaser.Scene
export class pause extends Phaser.Scene {
    constructor() {  /**O construtor da classe 'pause' está chamando o construtor da clase
    'Phaser.Scene' usando 'super()', passando o objeto que a chave é 'key' com o valor 'pause'.*/
        super({key: 'pause'})

        // ativando o som
        this.somAtivo = true  // ativando o som

        
    }
    // Armazena uma referência para começar essa nova cena, assim facilitando a transição entre cenas;
    init(data) {
        this.previousScene = data.previousScene;
    }
    
     create() {
        /**Adiciona as imagens: de plano de fundo, da opção de configurações e o ícone do som;*/
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fundoPause').setScale(0.6)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.25, 'configs').setScale(.5)
        this.add.image(this.sys.game.config.width * 0.45, this.sys.game.config.height * 0.45, 'som').setScale(.28)

        // Sprite interativo para controlar o som (this.som).
        this.som = this.add.sprite(this.sys.game.config.width * 0.58, this.sys.game.config.height * 0.45, 'spriteSom', 2).setScale(0.3).setInteractive()
        
        /* sprite interativo para retomar o jogo (button)*/ 
        var button = this.add.sprite(this.sys.game.config.width * 0.9, this.sys.game.config.height * 0.9, 'teclasOutras', 4).setScale(0.25).setInteractive()
        
        // Quando o botão de retomada (button) é clicado, a cena anterior é retomada e a cena de pausa é interrompida.
        button.on('pointerdown', function (event) {
            if(this.previousScene) {
                this.scene.resume(this.previousScene)
                this.scene.stop()
            }
        }, this)
        
        /* Altera o estilo do botão para quando o cursor estiver sobre ele
         ( aparece aquele estilo de seleção de botão) */

        // Estilo volta ao padrão
        button.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'
        })
        /* Altera o estilo do botão do som quando o cursor estiver sobre ele*/
        this.som.on('pointerover', () => {
            this.som.setFrame(this.somAtivo ? 3:5)
            this.game.canvas.style.cursor = 'pointer'
        })
        // Estilo do botão volta ao padrão 
        this.som.on('pointerout', () => {
            this.som.setFrame(this.somAtivo ? 2:4)
            this.game.canvas.style.cursor = 'default'

        })
        // Programa o funcionamento de ativar e desativar o som quando o botão for clicado
        this.som.on('pointerdown', () => {
            this.somAtivo = !this.somAtivo
            if(this.somAtivo) {
                this.sound.resumeAll()
            } else {
                this.sound.pauseAll()
            }
            this.som.setFrame(this.somAtivo ? 3:5)
        })

        // Adiciona a imagem da opção de reiniciar, que irá aparecer na tela.
        this.reiniciar = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.6, 'reiniciar').setScale(.16).setInteractive()
        
        // Altera o estilo do botão de reiniciar, demostrando que o cursor está sobre ele.
        this.reiniciar.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        // Retorna o estilo ao padrão
        this.reiniciar.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'

        })

        // Cria a função de reiniciar o jogo quando o botão de reiniciar for pressionado
        this.reiniciar.on('pointerdown', () => {
            this.scene.start(this.previousScene)
            this.resetMoedas()
        })

        /* configurando um ouvinte de evento para a cena de pausa ('pause'). Ele escuta
         o evento 'changedata', que é emitido quando os dados da cena são alterados. */
        this.scene.get('pause').data.events.on('changedata', (scene, data) => {

            /*Variável this.previousScene é atualizada para armazenar o identificador da cena anterior.
            Isso garante que a cena correta seja retomada quando o jogo for despausado.*/
            if(data.previousScene) {
                this.previousScene = data.previousScene;
            }
        })

        // Detecta o pressionamento da tecla ESC
        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        // Se a tecla ESC for pressionada, o jogo voltará a cena anterior (despause do jogo)
        this.esc.on('down', () => {
            if(this.previousScene) {
                this.scene.resume(this.previousScene)
                this.scene.stop()
            }
        })
        // Carrega a imagem da opção de botão "Menu"
        this.menu = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.75, 'menu').setScale(0.2).setInteractive()

        // Cria a função de quando clicar no botão voltar à página do Menu inicial
        this.menu.on('pointerdown', () => {
            window.location.reload()
        }, this)

        // Adiciona o estilo que mostra o botão estilizado quando o cursor estiver sobre ele
        this.menu.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        }, this)
     }

    // Função que reseta as contagens de moedas
    resetarMoedas() {
        moeda.texto = null
        moeda.pontuacao = 0
    }
}