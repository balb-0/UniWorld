// Criação da classe dicionario, o dicionário é onde os links externos ficam armazenados
export class dicionario extends Phaser.Scene {
    
    // Constrói a chave que será chamada de dicionário
    constructor() {
        super({key: 'dicionario'})
    }

    // Armazena os dados da cena anterior para que ao sair do dicionário o jogador possa voltar os mesmo local que estava 
    init(data) {
        this.previousScene = data.previousScene;
    }

    create() {

        // Adiciona o efeito de fundo utilizado na cena de pause
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fundoPause').setScale(0.6).setScrollFactor(0)
        // Adiciona o efeiro de fundo que constrói a estética de pergaminho que o dicionário possui
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height, 'pergaminhoDicionario').setScale(0.5)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.45, 'dicionarioPergaminho').setScale(0.35)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.64, 'unileverPergaminho').setScale(0.3)

        // Define o tamanho da câmera na cena
        this.cameras.main.setBounds(0, 0, this.sys.game.config.width, 1250)
        // Define até onde a física do jogo influencia
        this.physics.world.setBounds(0, 0, this.sys.game.config.width, 1250)




        // Define que quando o botão "X" for apertado, o decionário será aberto
        this.x = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)
        this.x.on('down', () => {
            if(this.previousScene) {
                this.scene.resume(this.previousScene)
                this.scene.stop()
            }
        })

        // habilitando a possibilidade de rolagem da tela
        this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY) => {
            this.cameras.main.scrollY += deltaY * 0.5;
        })

        /* Variáveis que carregam os links fornecidos pela Unilever e seus tamanhos que irão aparecer na tela
        (nomes autoexplicativos das variáveis autoexplicativos)*/
        var Dicionariobg = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.85, 'Dicionariobg').setScale(1.0)
        var videoUniops = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.97, 'videobg').setScale(1.0)
        var estruturaEstrategia = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.15, 'estrategiabg').setScale(1.0)
        var educacional = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.31, 'educacionalbg').setScale(1.0)
        var una = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.45, 'Unabg').setScale(1.0)
        var time = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.60, 'Timebg').setScale(1.0)


        // Variável que realmente possibilita o jogador abrir os links disponibilizados pela Unilever
        this.abrirLink(Dicionariobg, 'https://unilever.sharepoint.com/sites/AboutUnilever/SitePages/Unilever-Dictionary.aspx')
        this.abrirLink(videoUniops, '')
        this.abrirLink(estruturaEstrategia, '')
        this.abrirLink(educacional, 'https://degreed.com/plan/3210455?editmode=false&autosuggest=false')
        this.abrirLink(una, 'https://degreed.com/pathway/w9d4oxqm8j/pathway?newWindow=true')
        this.abrirLink(time, '')

    }

    // Desenvolvendo a variável que possibilitará oo usuária acessar o link
    abrirLink(image, url) {
        image.setInteractive();
        image.on('pointerdown', () => {
            window.open(url, '_blank')
        })

        // design do botão estilizado
        image.on('pointerover', () => {
            this.sys.canvas.style.cursor = 'pointer'
        })

        // Dedign padrão do botão
        image.on('pointerout', () => {
            this.sys.canvas.style.cursor = 'default'
        })
    }


    update() {
    }


}