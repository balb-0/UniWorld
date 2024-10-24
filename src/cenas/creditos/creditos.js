import centroDeEventos from "../centroDeEventos/centroDeEventos.js"

// Cria a classe creditos, que dará os devidos créditos de quem são os criadores do jogo
export class creditos extends Phaser.Scene {
    
    // Constrói a classe, que será chama de 'creditos
    constructor() {
        super({key: 'creditos'})
        this.mostrarContador = false;
        this.contador = 0;
    }

    create() {

        // Adiciona a imagem de fundo à cena
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgMainMenu').setScale(0.6).setScrollFactor(0)

        // Adiciona a imagem do título "Créditos" à cena
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.15, 'creditos').setScale(.7)

        // Quando o usuário aperta a tecla de voltar, ele volta a cena de configurações
        var botão = this.add.sprite(this.sys.game.config.width * 0.9, this.sys.game.config.height * 0.9, 'teclasOutras', 4).setScale(0.25).setInteractive()
        botão.on('pointerdown', function (event) {
            this.scene.start('settings')
        }, this)

        // Botão estilo diferenciado
        botão.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        // Botão estilo padrão
        botão.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'
        })

        // Variável para cada membro do grupo, que adiona uma imagem do nome de cada um.
        var carol = this.add.image(this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.4, 'credCarol').setScale(0.18)
        var daniel = this.add.image(this.sys.game.config.width * 0.7, this.sys.game.config.height * 0.4, 'credDaniel').setScale(0.11)
        var igor = this.add.image(this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.55, 'credIgor').setScale(0.08)
        var joao = this.add.image(this.sys.game.config.width * 0.7, this.sys.game.config.height * 0.55, 'credJoao').setScale(0.08)
        var luiza = this.add.image(this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.7, 'credLuiza').setScale(0.1)
        var thalyta =  this.add.image(this.sys.game.config.width * 0.7, this.sys.game.config.height * 0.7, 'credThalyta').setScale(0.15)
        var vitor =  this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.85, 'credVitor').setScale(0.1)

        // Adiciona a função de redirecionar o usuário ao LinkedIn de cada membro quando o nome do mesmo for precionado.
        this.abrirLink(carol, 'https://www.linkedin.com/in/carolina-pascarelli-55a6a4282/')
        this.abrirLink(daniel, 'https://www.linkedin.com/in/daniel-dias-977572289/')
        this.abrirLink(igor, 'https://www.linkedin.com/in/igor-sguissardi-a37270244/')
        this.abrirLink(joao, 'https://www.linkedin.com/in/joao-carbone-58b9b72b7/')
        this.abrirLink(luiza, 'https://www.linkedin.com/in/luizapetenazzi')
        this.abrirLink(thalyta, 'https://www.linkedin.com/in/thalyta-da-silva-viana-4a41a4239')
        this.abrirLink(vitor, 'https://www.linkedin.com/in/vitor-balbo/')

        centroDeEventos.on('iniciarCreditos', () => {
            this.mostrarContador = true;
        })
        centroDeEventos.on('ContadorDeRespostas', (contador) => {
            window.alert(`Respostas corretas: ${contador}/12`)
        })
    }

    // Cria a função de redirecionar para o link quando o usuário clicar na imagem do nomes 
   abrirLink(image, url) {
        image.setInteractive();
        image.on('pointerdown', () => {
            window.open(url, '_blank')
        })
        // Estilo diferenciado de botão
        image.on('pointerover', () => {
            this.sys.canvas.style.cursor = 'pointer'
        })
        // Estilo padrão de botão
        image.on('pointerout', () => {
            this.sys.canvas.style.cursor = 'default'
        })
    }

    update() {
        if (this.mostrarContador) {
            centroDeEventos.emit('Respostas')
        }
    }

}