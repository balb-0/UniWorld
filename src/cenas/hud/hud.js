    /* Criando a classe HUD (tela que exibe as informações importante sobre o jogador, como as moedas coletadas, corações que sinalizam a vida e o dicionário),
    e ao mesmo tempo é exportada a classe para que seja usada em outras partes do código.*/
    export class hud extends Phaser.Scene {

        /* Construindo/Instanciando os objetos que serão utilizados na classe HUD. */
        constructor() {
            super({key: 'hud'})
            // variável pontuação das moedas, definida nesse momento como 0.
            this.pontuacao = 0

            //...
            this.texto = null
            
            // variável volume da música, definindo a música como ligada.
            this.volume = true
        }


        /* Configurando o que acontecerá com a HUD quando o pause for acionado, (que é acionado na tecla "ESC"), nesse caso a Hud é pausada e 
        e aparece a tela de pause.*/
        renderizadorHud() {
            this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
            this.esc.on('down', () => {
                this.scene.pause()
                this.scene.launch('pause')
            })

            // Delimitando o que acontecerá com o ícone do dicionário, nesse caso ele irá sumir.
            this.dicionario = this.add.sprite(this.sys.game.config.width * 0.93, this.sys.game.config.height * 0.1, 'dicionarioIconRoll', 0).setScale(0.04).setScrollFactor(0).setVisible(false)
        }
        
        // Habilitando a função do dicionário para aparecer na HUD do jogador.
        habilitarDicionario() {
            this.dicionario.setVisible(true)
        }
    }
