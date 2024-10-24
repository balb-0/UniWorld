import centroDeEventos from "../centroDeEventos/centroDeEventos.js"

export class mostradorDePerformance extends Phaser.Scene {
    constructor() {
        super({key: 'mostradorDePerformance'})
        this.contador = 0;
    }

    receberResposta() {
        centroDeEventos.on('Certa', () => {
            this.contador++
        })
    }

    enviarRespostas() {
        centroDeEventos.on('Respostas', () => {
            centroDeEventos.emit('ContadorDeRespostas', this.contador)
        })
    }

    create() {
        this.receberResposta()
        this.enviarRespostas()
        this.scene.start('Intro')
    }
}